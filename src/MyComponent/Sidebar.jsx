import React from "react";

const Sidebar = ({onCityClick}) => {
  const cities = ["Lahore", "Multan", "Islamabad", "Murree", "Quetta"];

  return (
    <div className="sidebar">
      <h3>Popular Cities</h3>
      {cities.map((city) => (
        <div className="city"onClick={() => onCityClick(city)}>
          {city}
        </div>
        
      ))}
    </div>
  );
};

export default Sidebar;
