import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cars = [
    {
        name: "Volkswagen",
        img: "./assets/analytics.jpeg",
    },
    {
        name: "Sonata",
        img: "https://images.unsplash.com/photo-1617814070447-1ffad2f3cf45?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Pajero",
        img: "https://images.unsplash.com/photo-1603048297872-59b727c4f49f?auto=format&fit=crop&w=900&q=80",
    },
];


export default function CarCarousel() {
    const [index, setIndex] = useState(0);

    const handleRotate = (dir) => {
        setIndex((prev) =>
            dir === "left"
                ? (prev - 1 + cars.length) % cars.length
                : (prev + 1) % cars.length
        );
    };

    const radius = 180; // half-circle radius
    const angleStep = Math.PI / (cars.length - 1);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
            {/* Center Car Image */}
            <div className="flex justify-center items-center mb-10 relative">
                <img
                    src={cars[index].img}
                    alt={cars[index].name}
                    className="w-[400px] max-w-[80vw] rounded-xl shadow-2xl transition-all duration-700 ease-in-out"
                />
            </div>

            {/* Circular text selector */}
            <div className="relative w-[500px] h-[250px] flex items-center justify-center">
                {/* Arrows */}
                <button
                    onClick={() => handleRotate("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={() => handleRotate("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Names positioned along a half circle */}
                <svg
                    width="500"
                    height="250"
                    viewBox="0 0 500 250"
                    className="overflow-visible"
                >
                    {cars.map((car, i) => {
                        const angle = Math.PI - i * angleStep; // spread across 180 degrees
                        const x = 250 + radius * Math.cos(angle);
                        const y = 250 - radius * Math.sin(angle);
                        const active = i === index;

                        return (
                            <text
                                key={car.name}
                                x={x}
                                y={y}
                                textAnchor="middle"
                                fill={active ? "#38bdf8" : "#aaa"}
                                fontSize={active ? "18" : "14"}
                                className="cursor-pointer select-none transition-all duration-300"
                                onClick={() => setIndex(i)}
                            >
                                {car.name}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}
