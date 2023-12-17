"use client";
import React from "react";
import Link from "next/link";
import { BiChevronsRight } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { navigationMenu } from "./Data";

const CalcList = () => {
  const pathname = usePathname();
  return (
    <div className="max-w-md lg:w-screen mx-auto text-center mb-10 border border-gray-200 rounded-md p-5 md:p-10 shadow-customShadowContainer">
      <ul className="text-sm">
        {navigationMenu.map((item, index) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="group flex items-center justify-between font-semibold py-3 px-3 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-indigo-600">
              <span>{item.name}</span>
              <span className="tranistion-all ease-in-out duration-300 relative -left-2 group-hover:left-0 opacity-0 group-hover:opacity-100">
                <HiArrowLongRight className="w-5 h-5 !text-gray-900" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalcList;
