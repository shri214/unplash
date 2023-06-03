import React from "react";
const Display = ({ Image }) => {
  console.log(Image);
  return (
    <div className="container">
      {Image.map((val, ind) => {
        return (
          <div key={ind} className="image-container">
            <img src={val.urls.small} alt={val.alt_description} />
          </div>
        );
      })}
    </div>
  );
};
export default Display;
