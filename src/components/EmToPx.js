"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { GoArrowSwitch } from "react-icons/go";
import { BiSolidPencil } from "react-icons/bi";
import Link from "next/link";

import TitleNav from "./TitleNav";

const EmToPx = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [remValue, setRemValue] = useState(1);
  const [pxValue, setPxValue] = useState(16);
  const [baseSize, setBaseSize] = useState(16);
  const [typing, setTyping] = useState(false);
  const baseRef = useRef(null);
  const penRef = useRef(null);

  const search = searchParams.get("em");

  const convertEmToPx = () => {
    const rem = parseFloat(remValue); // input

    // const px = parseFloat(pxValue);
    const baseFontSize = parseFloat(baseSize);
    // const rem = (1 / baseFontSize) * px;
    const px = rem * baseFontSize;

    if (isNaN(rem) || rem <= 0) {
      setPxValue(0);
      return;
    }

    if (isNaN(baseSize) || baseSize <= 0) {
      setBaseSize(16);
      return;
    }

    const countDigit = px.toString().length;

    const regex = /\.0{2,3,4}\d*$/;

    // if (countDigit > 3) {
    //   if (regex.test(px) === true) {
    //     setPxValue(px.toFixed(0));
    //   } else {
    //     setPxValue(px.toFixed(2));
    //   }
    // } else {
    setPxValue(px);
    // }
  };

  function removeAlphabets(inputString) {
    // Use a regular expression to match alphabets and replace them with an empty string
    return inputString.replace(/[a-zA-Z]/g, "");
  }

  useEffect(() => {
    if (typing === false) {
      const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
      const search = current.toString();
      const query = search ? `?${search}` : "";

      if (query != "") {
        const queryREM = query.split("=");

        setRemValue(removeAlphabets(queryREM[1]));
      }
    }

    if (search) {
      setRemValue(search);
    }

    convertEmToPx();
  }, [pxValue, remValue, baseSize, router, search]);

  const focusHandler = () => {
    baseRef.current.focus();
    baseRef.current.style.width = 50 + "px";
    penRef.current.style.display = "none";
  };
  const blurHandler = () => {
    baseRef.current.style.width = 20 + "px";
    penRef.current.style.display = "block";
  };

  const remValueHandler = (event) => {
    // now you got a read/write object
    setTyping(true);
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    // console.log(current, "current");

    // update as necessary
    const value = event.target.value.trim();

    if (!value) {
      current.delete("em");
    } else {
      current.set("em", event.target.value);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);

    setRemValue(value);
  };

  return (
    <>
      {/* max-w-md w-screen mx-auto text-center mb-10 border border-gray-200 rounded-md p-10 shadow-lg */}
      <div className="box-container-shadow">
        <TitleNav title="EM to PX Converter" />

        <div className="flex justify-between space-x-7">
          <div className="mb-3">
            <label
              htmlFor="em"
              className="block mb-3 font-medium text-gray-700">
              EM
            </label>
            <div className="relative">
              <input
                id="em"
                type="text"
                value={remValue || ""}
                onChange={remValueHandler}
                className="tw-field"
                autoComplete="off"
              />
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-3">
                <span className="text-gray-400 sm:text-base">em</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[30px] -translate-x-1/2 left-1/2">
              <Link
                href={`/px-to-em-converter/?px=${pxValue}`}
                className="duration-300 transition-all ease-in-out opacity-30 hover:opacity-100">
                <GoArrowSwitch className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="pixels"
              className="block mb-3 font-medium text-gray-700">
              Pixels
            </label>

            <div className="relative">
              <input
                id="pixels"
                type="text"
                value={pxValue}
                onChange={(e) => {
                  return null;
                }}
                className="tw-field text-indigo-600"
                autoComplete="off"
              />
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-3">
                <span className="text-gray-400 sm:text-base">px</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 text-center">
          <em className="italic text-gray-500 text-sm inline-flex items-center space-x-1">
            <span className="mr-1">Calculation based on a font-size of</span>
            <div className="inline-flex space-x-1 items-center">
              <input
                onBlur={blurHandler}
                onFocus={focusHandler}
                ref={baseRef}
                value={baseSize || 16}
                onChange={(e) => setBaseSize(e.target.value)}
                className="text-center w-5 h-6 !py-0 !px-0 cursor-default focus:ring-1 focus:ring-inset focus:ring-indigo-600"
              />
              <div ref={penRef} onClick={focusHandler}>
                <BiSolidPencil className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <span>pixel.</span>
          </em>
        </div>
      </div>
    </>
  );
};

export default EmToPx;
