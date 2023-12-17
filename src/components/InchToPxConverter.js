"use client";
import React, { useEffect, useState, Fragment } from "react";
import TitleNav from "@/components/TitleNav";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";

import { BiSolidPencil } from "react-icons/bi";
import { GoArrowSwitch } from "react-icons/go";
import Link from "next/link";

const InchToPxConverter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [inchValue, setInchValue] = useState("1");
  const [pxValue, setPxValue] = useState("96");
  const [ppiValue, setPPIValue] = useState("96");
  const [typing, setTyping] = useState(false);

  const convertToPx = () => {
    const inch = parseFloat(inchValue);

    const px = inch * ppiValue;

    if (isNaN(inch) || inch <= 0) {
      setPxValue(1);
      return;
    }
    if (isNaN(ppiValue) || ppiValue <= 0) {
      setPxValue(96);
      return;
    }

    setPxValue(px);
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
        const queryPX = query.split("=");
        setInchValue(removeAlphabets(queryPX[1]));
      }
    }

    convertToPx();
  }, [pxValue, inchValue, ppiValue, router]);

  const inchValueHandler = (event) => {
    // now you got a read/write object
    setTyping(true);
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    // console.log(current, "current");

    // update as necessary
    const value = event.target.value.trim();

    if (!value) {
      current.delete("inch");
    } else {
      current.set("inch", event.target.value);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);

    setInchValue(value);
  };

  return (
    <div className="box-container-shadow">
      <TitleNav title="Inches to Pixels Converter" />

      <div>
        <div className="mb-3 md:max-w-xs mx-auto">
          {/* <label htmlFor="em" className="block mb-3 font-medium text-gray-700">
            PPI
          </label> */}
          <label
            htmlFor="em"
            className="mb-3 font-medium text-gray-700 text-center relative inline-block">
            <span>PPI</span>
            <span className="absolute -right-5">
              <Popover className="relative">
                <Popover.Button className="outline-none">
                  <FaRegQuestionCircle className="w-3 h-3 opacity-25 transition-all duration-300 ease-in-out hover:opacity-100" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Popover.Panel className="absolute left-1/2 -translate-x-1/2 z-10 origin-top-left divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white p-5 w-56 text-left">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      The standard for{" "}
                      <span className="inline-block bg-gray-50 text-gray-600 rounded-md py-0 px-1.5">
                        1 inch
                      </span>{" "}
                      in web is equal to{" "}
                      <span className="inline-block bg-gray-50 text-gray-600 rounded-md py-0 px-1.5">
                        96 pixels
                      </span>
                      . Alternatively, use this PPI value when creating designs
                      for digital or print purposes.
                    </p>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </span>
          </label>
          <div className="relative">
            <input
              id="em"
              type="text"
              value={ppiValue || ""}
              onChange={(e) => setPPIValue(e.target.value)}
              className="tw-field"
              autoComplete="off"
            />
            {/* <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-3">
              <span className="text-gray-400 sm:text-base">px</span>
            </div> */}
          </div>
        </div>
        <div className="flex justify-between space-x-7">
          <div className="mb-3">
            <label
              htmlFor="em"
              className="block mb-3 font-medium text-gray-700">
              Inches
            </label>
            <div className="relative">
              <input
                id="em"
                type="text"
                value={inchValue || ""}
                onChange={inchValueHandler}
                className="tw-field"
                autoComplete="off"
              />
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-3">
                <span className="text-gray-400 sm:text-base">in</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[30px] -translate-x-1/2 left-1/2">
              <Link
                href={`/px-to-inch-converter/?px=${pxValue}`}
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
      </div>
    </div>
  );
};

export default InchToPxConverter;
