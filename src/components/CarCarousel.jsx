import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import caroneImg from "../assets/car1.jpg";
import cartwoImg from "../assets/car2.jpg";
import carthree from "../assets/car3.jpg";

const cars = [
  {
    name: "Volkswagen",
    img: caroneImg,
  },
  {
    name: "Sonata",
    img: cartwoImg,
  },
  {
    name: "Pajero",
    img: carthree,
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Arrows */}
      <button
        onClick={() => handleRotate("left")}
        className="fixed left-4 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-700 p-3 rounded-full z-50"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => handleRotate("right")}
        className="fixed right-4 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-700 p-3 rounded-full z-50"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

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
        <svg
          width="500"
          height="250"
          viewBox="0 0 500 250"
          className="overflow-visible"
        >
          {cars.map((car, i) => {
            const adjustedIndex = (i - index + 1 + cars.length) % cars.length;
            const angle = Math.PI - adjustedIndex * angleStep; // spread across 180 degrees
            const x = 250 + radius * Math.cos(angle);
            const y = 250 - radius * Math.sin(angle);
            const active = i === index;

            return (
              <text
                key={car.name}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={active ? "#38bdf8" : "#aaa"}
                fontSize={active ? "24" : "14"}
                fontWeight={active ? "600" : "normal"}
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
