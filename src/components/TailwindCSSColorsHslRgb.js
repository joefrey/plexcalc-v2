"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import tinycolor from "tinycolor2";
import { TWColors } from "@/components/DataTailwindColors";

import TitleNav from "@/components/TitleNav";
import Share from "@/components/Share";
import { shareMeta } from "@/components/Data";

const TailwindCSSColorsHslRgb = () => {
  const [open, setOpen] = useState(true);

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
      return Math.floor(value);
    } else {
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

        const hslaH = hslaObject.h.toFixed(0);
        const hslaS = roundFloat((hslaObject.s * 100).toFixed(1));
        const hslaL = roundFloat((hslaObject.l * 100).toFixed(1));
        const hslaA = hslaObject.a.toFixed(0);
        const hsla = `hsla(${hslaH}, ${hslaS}%, ${hslaL}%, ${hslaA})`;
        setHslaColor(hsla);

        const rgbaObject = color.toRgb();
        const rgbaR = rgbaObject.r.toFixed(0);
        const rgbaG = rgbaObject.g.toFixed(0);
        const rgbaB = rgbaObject.b.toFixed(0);
        const rgbaA = rgbaObject.a.toFixed(0);
        const rgba = `rgba(${rgbaR}, ${rgbaG}, ${rgbaB}, ${rgbaA})`;

        setRgbaColor(rgba);

        setHexColor(color.toHexString());
        setHslColor(color.toHslString());
        setRgbColor(color.toRgbString());
      }
    }
  }, [hexColor, hslColor, rgbColor, isTyping]);

  const data = TWColors;

  const colorHandler = (event) => {
    setHexColor(event.currentTarget.getAttribute("data-hex"));
  };

  if (!data) {
    return null;
  }
  return (
    <>
      {/* font-semibold -mt-5 absolute right-0 p-3 px-3 bg- text-sm border bg-white
      border-gray-200 hover:bg-gray-50 rounded-md rounded-tr-none
      rounded-br-none text-gray-700 duration-300 transition-all ease-in-out
      hover:text-gray-900 */}
      {/* tailwind-btn color-1 */}
      <button
        onClick={(e) => setOpen(!open)}
        className="font-semibold -mt-5 absolute right-0 py-2 px-3 bg- text-sm border shadow-md bg-indigo-600 text-white
       rounded-full rounded-tr-none
      rounded-br-none duration-300 transition-all ease-in-out hover:bg-indigo-500
      ">
        TailwindCSS Colors
      </button>
      <div className="box-container-shadow">
        <TitleNav title="TailwindCSS Colors to HSL, RGB Converter" />

        <div>
          <div className="mb-3">
            <label
              htmlFor="hex"
              className="block mb-3 font-medium text-gray-700">
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
            <label
              htmlFor="hsl"
              className="block mb-3 font-medium text-gray-700">
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
            <label
              htmlFor="rgb"
              className="block mb-3 font-medium text-gray-700">
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full">
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            TailwindCSS Colors
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}>
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 ">
                              {data.map((color, index) => (
                                <li key={color.name} className="mb-1.5">
                                  <div>
                                    <h3 className="text-[12px] font-semibold">
                                      {color.name}
                                    </h3>
                                    <div className="grid grid-cols-11 gap-3">
                                      {color.colors.map((c, i) => (
                                        <a
                                          key={i}
                                          data-id={i}
                                          data-hex={c.hex}
                                          className={` ${
                                            hexColor == c.hex
                                              ? "shadow-md border-white scale-150 !z-10 relative"
                                              : ""
                                          } relatives w-6 h-6 inline-block rounded-[4px] cursor-pointer z-0 duration-300 transition-all ease-in-out scale-100 hover:scale-150 hover:z-10 border-2 border-transparent hover:border-white hover:shadow-md`}
                                          onClick={colorHandler}
                                          style={{
                                            backgroundColor: `${c.hex}`,
                                          }}></a>
                                      ))}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <Share
                          url="https://plexcalc.com/"
                          description={shareMeta.description}
                          subject={shareMeta.description}
                          body={shareMeta.description}
                        />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default TailwindCSSColorsHslRgb;
