"use client";
import React, { useEffect, useState } from "react";
import tinycolor from "tinycolor2";

import TitleNav from "@/components/TitleNav";

const HSLColorPicker = () => {
  // const [input, setInput] = useState("#84cc16");
  const [hexColor, setHexColor] = useState("#5B58E6");
  const [hslColor, setHslColor] = useState();
  const [rgbColor, setRgbColor] = useState();

  const [shlaColor, setHslaColor] = useState();
  const [rgbaColor, setRgbaColor] = useState();

  const [isTyping, setIsTyping] = useState({
    hexTyping: false,
    hslTyping: false,
    rgbTyping: false,
  });

  function roundFloat(value) {
    const decimalPart = value - Math.floor(value);

    if (decimalPart < 0.5) {
      // If the decimal part is less than 0.5, round down
      return Math.floor(value);
    } else {
      // If the decimal part is greater than or equal to 0.5, round up
      return Math.ceil(value);
    }
  }

  useEffect(() => {
    let color, HslaObj;

    if (isTyping.hexTyping === true) {
      color = tinycolor(hexColor);
    } else if (isTyping.hslTyping === true) {
      color = tinycolor(hslColor);
    } else if (isTyping.rgbTyping === true) {
      color = tinycolor(rgbColor);
    } else {
      color = tinycolor(hexColor);
    }

    if (color.isValid()) {
      if (
        hexColor.length == 3 ||
        hexColor.length == 4 ||
        hexColor.length == 7 ||
        hexColor.length == 6 ||
        color.getFormat() === "name"
      ) {
        const hslaObject = color.toHsl();
        console.log(hslaObject);
        const hslaH = hslaObject.h.toFixed(0);
        const hslaS = roundFloat((hslaObject.s * 100).toFixed(1));
        const hslaL = roundFloat((hslaObject.l * 100).toFixed(1));
        const hslaA = hslaObject.a.toFixed(0);
        const hsla = `hsla(${hslaH}, ${hslaS}%, ${hslaL}%, ${hslaA})`;

        const rgbaObject = color.toRgb();
        console.log(hslaObject);
        const rgbaR = rgbaObject.r.toFixed(0);
        const rgbaG = rgbaObject.g.toFixed(0);
        const rgbaB = rgbaObject.b.toFixed(0);
        const rgbaA = rgbaObject.a.toFixed(0);
        const rgba = `rgba(${rgbaR}, ${rgbaG}, ${rgbaB}, ${rgbaA})`;

        setHslaColor(hsla);
        setRgbaColor(rgba);
        setHexColor(color.toHexString());
        setHslColor(color.toHslString());
        setRgbColor(color.toRgbString());
      }
    }
  }, [hexColor, hslColor, rgbColor, isTyping]);

  return (
    <div className="box-container-shadow">
      <TitleNav title="HEX, HSL, RGB Color Converter" />

      <div>
        <div className="mb-3">
          <label htmlFor="hex" className="block mb-3 font-medium text-gray-700">
            HEX
          </label>
          <div className="relative">
            <input
              type="color"
              className="appearance-none absolute right-5 top-1/2 -translate-y-1/2 border-none outline-none rounded-md p-0 px-0"
              value={hexColor}
              onBlur={(e) => {
                setIsTyping({
                  hexTyping: true,
                  hslTyping: false,
                  rgbTyping: false,
                });
              }}
              onFocus={(e) => {
                setIsTyping({
                  hexTyping: true,
                  hslTyping: false,
                  rgbTyping: false,
                });
              }}
              onChange={(e) => {
                setHexColor(e.target.value);
              }}
            />
            <input
              id="hex"
              value={hexColor}
              onBlur={(e) => {
                setIsTyping({
                  hexTyping: true,
                  hslTyping: false,
                  rgbTyping: false,
                });
              }}
              onFocus={(e) => {
                setIsTyping({
                  hexTyping: true,
                  hslTyping: false,
                  rgbTyping: false,
                });
              }}
              onChange={(e) => {
                setHexColor(e.target.value);
                setIsTyping({
                  hexTyping: true,
                  hslTyping: false,
                  rgbTyping: false,
                });
              }}
              className="tw-field"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="hsl" className="block mb-3 font-medium text-gray-700">
            HSL
          </label>
          <input
            id="hsl"
            type="text"
            value={hslColor}
            onBlur={(e) => {
              setIsTyping({
                hexTyping: false,
                hslTyping: true,
                rgbTyping: false,
              });
            }}
            onFocus={(e) => {
              setIsTyping({
                hexTyping: false,
                hslTyping: true,
                rgbTyping: false,
              });
            }}
            onChange={(e) => {
              setHslColor(e.target.value);
              setIsTyping({
                hexTyping: false,
                hslTyping: true,
                rgbTyping: false,
              });
            }}
            className="tw-field mb-2 text-indigo-600"
            autoComplete="off"
          />
          {shlaColor && (
            <p className="text-[12px] mb-3">
              with alpha{" "}
              <span className="inline-block bg-gray-100 border border-dashed border-gray-300 text-gray-900 rounded-md py-0 px-2">
                {shlaColor}
              </span>
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="rgb" className="block mb-3 font-medium text-gray-700">
            RGB
          </label>

          <input
            id="rgb"
            type="text"
            value={rgbColor}
            onBlur={(e) => {
              setIsTyping({
                hexTyping: false,
                hslTyping: false,
                rgbTyping: true,
              });
            }}
            onFocus={(e) => {
              setIsTyping({
                hexTyping: false,
                hslTyping: false,
                rgbTyping: true,
              });
            }}
            onChange={(e) => {
              setRgbColor(e.target.value);
              setIsTyping({
                hexTyping: false,
                hslTyping: false,
                rgbTyping: true,
              });
            }}
            className="tw-field mb-2 text-indigo-600"
            autoComplete="off"
          />

          {rgbaColor && (
            <p className="text-[12px] mb-3">
              with alpha{" "}
              <span className="inline-block bg-gray-100 border border-dashed border-gray-300 text-gray-900 rounded-md py-0 px-2">
                {rgbaColor}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HSLColorPicker;
