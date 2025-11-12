import { faBriefcase, faShield, faShieldHalved, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const FluidTabs = ({ tabs, onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(tabs[index], index);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-300 relative z-10 ${
              activeIndex === index
                ? "text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            }`}
          >
            <span> { 
            index==0? <FontAwesomeIcon className=" me-1" icon={faUser} />:
            index==1?<FontAwesomeIcon className=" me-1" icon={faBriefcase} />:
            <FontAwesomeIcon className=" me-1" icon={faShieldHalved} />
            
            }{tab}</span>
          </button>
        ))}
      </div>

      {/* Sliding Indicator */}
      <div
        className="absolute top-1 bottom-1 rounded-md transition-all duration-300 ease-out shadow-md"
        style={{
          width: `calc(${100 / tabs.length}% - 0.5rem)`,
          left: `calc(${(100 / tabs.length) * activeIndex}% + 0.25rem)`,
          backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)"
        }}
      />
    </div>
  );
};
