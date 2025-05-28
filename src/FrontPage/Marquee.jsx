import React from "react";

function Marquee() {
  const items = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "Python",
    "Git",
    "Docker",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-8">My Tech Stack</h1>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden bg-gray-100 py-4">
        <div className="whitespace-nowrap flex animate-marquee">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl px-4 py-2 mx-2 text-sm font-semibold text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee animation style */}
      <style jsx="true">{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Marquee;
