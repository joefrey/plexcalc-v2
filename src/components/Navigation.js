"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Share from "./Share";
// export { navigationMenu } from "./Data";
import { navigationMenu } from "./Data";

const shareMeta = {
  description: "Fast and Accurate Online Calculator and Converter - plexcalc",
  subject: "Fast and Accurate Online Calculator and Converter - plexcalc",
  body: "Your Go-To Resource for Fast and Accurate Calculations",
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header className="mt-0 mb-2 md:mb-3">
        <div className="container px-4 flex mx-auto justify-between py-5">
          <div>
            <Link
              href="/"
              className="font-bold duration-300 transition-all ease-in-out hover:opacity-75">
              <Image
                src="/logo.svg"
                className="!h-6 w-auto"
                width={147}
                height={26}
                alt="PLEXCalc"
              />
            </Link>
          </div>
          <button
            onClick={(e) => setOpen(!open)}
            className="font-semibold text-sm text-gray-700 duration-300 transition-all ease-in-out hover:text-gray-900">
            Menu
          </button>
        </div>
      </header>
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
                      <div className="flex-1 overflow-y-auto  py-6">
                        <div className="flex items-start justify-between px-4 sm:px-6">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Menu
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

                        <div className="mt-2">
                          <div className="flow-root">
                            <ul role="list" className="">
                              {navigationMenu.map((menu) => (
                                <li key={menu.name}>
                                  <Link
                                    href={menu.href}
                                    className={`py-2 block text-sm px-4 sm:px-6 ${
                                      pathname == menu.href
                                        ? "font-bold text-indigo-600 border-l-4 pl-3 border-indigo-600"
                                        : ""
                                    }`}>
                                    {menu.name}
                                  </Link>
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

export default Navigation;
