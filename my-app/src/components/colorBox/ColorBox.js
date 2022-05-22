import React, { useState } from "react";

const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "yellow", "blue", "red", "black"];
  const random = Math.floor(Math.random() * COLOR_LIST.length);

  return COLOR_LIST[random];
};

const ColorBox = () => {
  //==== làm như này nó sẽ chạy nhiều lần
  // const initColor = localStorage.getItem("color_box") || "deeppink";

  //==== chuyển sang callback để chạy 1 lần
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color_box") || "deeppink";
    return initColor;
  });

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("color_box", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
};

export default ColorBox;
