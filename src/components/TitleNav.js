"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LuChevronsUpDown } from "react-icons/lu";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { navigationMenu } from "./Data";

const TitleNav = ({ title }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="inline-flex space-x-3 text-center items-center mb-7 relative w-full">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        <Menu as="div" className="inline-block text-left absolute right-0">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-2 rounded-md bg-white px-1 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <LuChevronsUpDown
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute right-0 z-10 mt-2 w-72 p-3 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {navigationMenu.map((menu, index) => (
                  <Menu.Item key={menu.name}>
                    {({ active }) => (
                      <Link
                        href={menu.href}
                        className={` block px-5 py-2 transition-all text-gray-600 text-sm duration-300 ease-in-out hover:text-indigo-600 ${
                          pathname === menu.href ? "!text-indigo-600" : ""
                        }`}>
                        {menu.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default TitleNav;
