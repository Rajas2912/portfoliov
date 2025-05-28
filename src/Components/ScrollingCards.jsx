import { useEffect, useRef, useState } from "react";
import { FiFileText, FiAward, FiBookOpen, FiCode, FiBriefcase } from "react-icons/fi";

const ScrollingCards = () => {
  const items = [
    { id: 1, title: "Projects", icon: <FiCode size={24} />, count: "12+" },
    { id: 2, title: "Resume", icon: <FiFileText size={24} /> },
    { id: 3, title: "Certifications", icon: <FiAward size={24} />, count: "5" },
    { id: 4, title: "Publications", icon: <FiBookOpen size={24} />, count: "3" },
    { id: 5, title: "Experience", icon: <FiBriefcase size={24} />, count: "4 yrs" },
  ];

  const containerRef = useRef(null);
  const requestRef = useRef();
  const [displayItems, setDisplayItems] = useState([...items, ...items]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 1.5; // pixels per frame

  const animate = (timestamp) => {
    setScrollPosition((prev) => {
      const container = containerRef.current;
      if (!container) return prev;
      
      // Reset position when we've scrolled one full set of items
      const itemWidth = 192; // 48 * 4 (w-48 + gap-6)
      const scrollWidth = items.length * itemWidth;
      
      if (prev >= scrollWidth) {
        return 0;
      }
      return prev + scrollSpeed;
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-100 py-8">
      <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
      
      <div className="relative h-40 w-full">
        <div 
          ref={containerRef}
          className="absolute flex gap-6"
          style={{ 
            left: `calc(50% - ${scrollPosition}px)`,
            transform: 'translateX(-50%)'
          }}
        >
          {displayItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="flex h-32 w-48 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-gray-800/90 p-6 text-white shadow-md transition-all hover:bg-gray-700/90 hover:shadow-lg"
            >
              <div className="mb-3 text-gray-300">{item.icon}</div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              {item.count && (
                <p className="mt-1 text-sm text-gray-400">{item.count}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ScrollingCards;