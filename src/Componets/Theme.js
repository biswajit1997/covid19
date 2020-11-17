import React from "react";

function Theme({
  handleColorYellow: handleColorYellow,
  handleColorWhite: handleColorWhite,
  handleColorBlack: handleColorBlack,
  textColor: textColor,
}) {
  return (
    <div>
      <span style={{ color: textColor }}>Theme :</span>
      <span className="theme-yellow shadow" onClick={handleColorYellow}>
        yellow
      </span>
      <span className="theme-white shadow" onClick={handleColorWhite}>
        white
      </span>
      <span className="theme-black shadow" onClick={handleColorBlack}>
        black
      </span>
    </div>
  );
}

export default Theme;
