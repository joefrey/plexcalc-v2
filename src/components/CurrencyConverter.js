"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import TitleNav from "./TitleNav";
import { countryCode, countryCodeNameOfCurrency } from "./DataCountries";
import Image from "next/image";
import axios from "axios";

const CurrencyConverter = () => {
  const [currencyValue, setCurrencyValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(1);
  const [convertAmount, setConvertAmount] = useState(null);
  const [dateQuote, setDateQuote] = useState('');
  const [description, setDescription] = useState('');
  const [typing, setTyping] = useState(false);
  const [fromCurrencyName, setFromCurrencyName] = useState('');
  const [toCurrencyName, setToCurrencyName] = useState('');
  const [init, setInit] = useState(false);
  
  // const [currencyCountryFrom, setCurrencyCountryFrom] = useState("");
  // const [currencyCountryTo, setCurrencyCountryTo] = useState("");

  const [selectedOne, setSelectedOne] = useState(
    Object.keys(countryCode).at(146)
  );
  const [selectedTwo, setSelectedTwo] = useState(
    Object.keys(countryCode).at(110)
  );
  const [userCountry, setUserCountry] = useState(null);
  // Object.keys(countryCode);
  // people[0];

  const [queryOne, setQueryOne] = useState("");
  const [queryTwo, setQueryTwo] = useState("");

  const getDownloadHandler = async () => {
    if (selectedOne === selectedTwo) return;
    // console.log('sulod', selectedOne, selectedTwo);
    let quoteDescriptionTmp, quoteAmountTmp, dateQuoteTmp, fromDesc, toDesc;
    try {
      const URL_LOCAL = "http://localhost:4444/api/getDownloads";
      const URL_LIVE = "https://plexcalc.com/api/getDownloads";
      const res = await fetch(`${URL_LIVE}`, {
        method: "POST",
        body: JSON.stringify({ selectedOne, selectedTwo }),
      });
      const { quoteAmount, dateQuote } = await res.json();

      // fromDesc = fromNameOfCurrency;
      // toDesc = toNameOfCurrency;
      quoteAmountTmp = quoteAmount;
      dateQuoteTmp = dateQuote;

      

      setCurrencyValue(+quoteAmountTmp);
      setDateQuote(dateQuoteTmp);
      // setDescription(fromDesc);
      // computeAmount(+amount, +currencyValue);

      const currencyNameFrom = getValueBySearchTerm(
        countryCodeNameOfCurrency,
        selectedOne
      );
      const currencyNameTo = getValueBySearchTerm(
        countryCodeNameOfCurrency,
        selectedTwo
      );
      setFromCurrencyName(currencyNameFrom);
      setToCurrencyName(currencyNameTo);
      

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {

      
      setCurrencyValue(+quoteAmountTmp);
      setDateQuote(dateQuoteTmp);
      // setDescription(fromDesc);
      computeAmount(String(amount), +currencyValue);
      
      setLoading(false);
    }
  };

  const getCountryHandler = async () => {
    try {
      const res = await fetch("http://localhost:4444/api/getCountry");
      const { country } = await res.json();
      // setCurrencyValue(+country);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };


  const filteredCountryOne =
    queryOne === ""
      ? Object.keys(countryCode)
      : Object.keys(countryCode).filter((key) => {
          return key
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queryOne.toLowerCase().replace(/\s+/g, ""))
            || countryCode[key]
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queryOne.toLowerCase().replace(/\s+/g, ""));
        });
  const filteredCountryTwo =
    queryTwo === ""
      ? Object.keys(countryCode)
      : Object.keys(countryCode).filter((key) => {
          return key
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queryTwo.toLowerCase().replace(/\s+/g, ""))
            || countryCode[key]
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queryTwo.toLowerCase().replace(/\s+/g, ""));
        });

  // v``mconsole.log(query);

  useEffect(() => {
    // console.log(typing);
    // console.log(amount, typeof amount);
    // console.log(convertAmount, typeof convertAmount);
    
    if (typing === false) {
      getDownloadHandler();
    } 
  }, [amount, convertAmount, setSelectedOne, setTyping, filteredCountryOne, filteredCountryTwo]);

  const onBlurHandler = (e) => {
    // console.log("unfocus");
    // if (e.target.value === NaN) return;
    // Nice
    if (e.target.value === '') return;
    let numAmount;
    if (typeof e.target.value === 'string') {
      // console.log("string gyud");
      
      numAmount = parseFloat(e.target.value.replace(/,/g, ""));
      numAmount = +numAmount;
      // numAmount = +e.target.value;
    } else {
      // console.log("dili string");
      numAmount = e.target.value;
    }
    
    
    // if (typeof numAmount === "string") {
    //   numAmount = numAmount;
    // } else {
    //   numAmount = amount;
    // }

    // console.log(numAmount, typeof numAmount);

    // if (typeof numAmount === 'string') {
    //   numAmount = +numAmount;
    //   console.log('string');
    // } else {
    //   // return null;
    //   console.log("int");
    // }

    // if (numAmount === NaN) return;
    // const numInt = +numAmount;
    // console.log(numInt, typeof numInt);

    // console.log(numAmount.toLocaleString());
    // console.log(
    //   typeof localizedAmount.toLocaleString("en-US"),
    //   localizedAmount.toLocaleString("en-US")
    // );
    setAmount((+numAmount).toLocaleString());

    // setAmount();
  }

  const computeAmountHandler = (e) => {
    setTyping(true);
    // const numInput = parseFloat(e.target.value.replace(/,/g, ""));
    const numInput = e.target.value;

    // numInput = parseFloat(numInput.replace(/,/g, ""));

    // console.log(numInput, typeof numInput);
    setAmount(numInput);
    computeAmount(numInput, currencyValue);
  }
  const inputOneHandler = (e) => {
    setQueryOne(e.target.value);
    setTyping(false);
  }

  const comboOneHandler = (e) => {
    setSelectedOne(e);
    setTyping(false);
    // console.log('comboOne change')
    
    // console.log(amount, currencyValue, 'first');
    // console.log("loading", loading);
    // loading ? "" : computeAmount(amount, currencyValue);
    // console.log("loading", loading);
    // console.log(amount, currencyValue, 'second');
  };
  const comboTwoHandler = (e) => {
    setSelectedTwo(e);
    setTyping(false);
  }

  function computeAmount(amountArg, currencyArg) {

    if (amountArg === '') return;
    // console.log(typeof amountArg, amountArg);
    const compute = currencyArg * parseFloat(String(amountArg)?.replace(/,/g, ""));

    // console.log(typeof compute, compute);

    const result = compute.toLocaleString("en-US");

    // console.log(typeof result, result);

    setConvertAmount(result);
  }

  function getValueBySearchTerm(obj, searchTerm) {
    for (const key in obj) {
      if (
        obj.hasOwnProperty(key) &&
        key.toLowerCase() === searchTerm.toLowerCase()
      ) {
        return obj[key];
      }
    }
    return null; // Return null if the search term is not found
  }

  return (
    <div className="box-container-shadow">
      <TitleNav title="Currency Converter" />

      <div className="grid grid-cols-1 sm:grid-cols-1 space-y-4">
        <div>
          <label
            htmlFor="em"
            className="block mb-3 text-left font-medium text-gray-700">
            Amount
          </label>
          <div className="flex tw-field relative py-5">
            <input
              type="text"
              className="!outline-none !appearance-none w-3/4"
              value={amount}
              readOnly={loading ? true : false}
              onBlur={onBlurHandler}
              onChange={computeAmountHandler}
            />
            <Combobox value={selectedOne} onChange={comboOneHandler}>
              <div className="absolute w-[80px] top-1/2 -translate-y-1/2 z-[1] right-2 !outline-none !appearance-none">
                <div className="relative flex items-center">
                  <div className="z-[2] absolute -left-[70px]">
                    <Image
                      src={`/flags/${selectedOne}.png`}
                      width="400"
                      height="400"
                      className="!w-7 top-0 -left-0"
                      alt={selectedOne}
                    />
                  </div>
                  <Combobox.Input
                    className="text-left w-full right-8 relative !outline-none !appearance-none"
                    displayValue={(key) => `${key}`}
                    onChange={inputOneHandler}
                  />

                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQueryOne("")}>
                  <Combobox.Options className="absolute z-50 w-[300px] mt-1 max-h-60 right-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {filteredCountryOne.length === 0 && queryOne !== "" ? (
                      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredCountryOne.map((key) => (
                        <Combobox.Option
                          key={key}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 text-left ${
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={key}>
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}>
                                {countryCode[key]} - {key}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-left pl-3 ${
                                    active ? "text-white" : "text-indigo-600"
                                  }`}>
                                  <CheckIcon
                                    className="h-5 w-5 top-2 relative"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>

        <div>
          <label
            htmlFor="em"
            className="block mb-3 text-left font-medium text-gray-700">
            Convert to
          </label>
          <div className="flex tw-field relative py-5">
            {loading && (
              <span className="absolute z-50 top-1/2 left-4 -translate-y-1/2 !text-[.75rem]">
                {loading ? "Loading..." : ""}
              </span>
            )}
            <input
              type="text"
              readOnly
              className={`!outline-none !appearance-none w-3/4 text-indigo-600 ${
                loading ? "text-opacity-10" : "text-opacity-100"
              }`}
              // value={typing === false ? currencyValue : convertAmount}
              // value={convertAmount === currencyValue ? currencyValue : convertAmount}
              value={convertAmount != 0 ? convertAmount : currencyValue}
            />
            <Combobox value={selectedTwo} onChange={comboTwoHandler}>
              <div className="absolute w-[80px] top-1/2 -translate-y-1/2 z-1 right-2 !outline-none !appearance-none">
                <div className="relative flex items-center">
                  <div className="z-[2] absolute -left-[70px]">
                    <Image
                      src={`/flags/${selectedTwo}.png`}
                      width="400"
                      height="400"
                      className="!w-7 top-0 -left-0"
                      alt={selectedTwo}
                    />
                  </div>
                  <Combobox.Input
                    className="text-left w-full right-8 relative !outline-none !appearance-none"
                    displayValue={(key) => `${key}`}
                    onChange={(event) => setQueryTwo(event.target.value)}
                  />

                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQueryOne("")}>
                  <Combobox.Options className="absolute z-50 w-[300px] mt-1 max-h-60 right-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {filteredCountryTwo.length === 0 && queryTwo !== "" ? (
                      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredCountryTwo.map((key) => (
                        <Combobox.Option
                          key={key}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 text-left ${
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={key}>
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}>
                                {countryCode[key]} - {key}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-left pl-3 ${
                                    active ? "text-white" : "text-indigo-600"
                                  }`}>
                                  <CheckIcon
                                    className="h-5 w-5 top-2 relative"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>

        {loading ? (
          <div className="mt-4">
            <p className="text-[0.75rem] font-[300] -mt-2">
              Please wait... Fetching latest currency exchange rate...
            </p>
          </div>
        ) : (
          <div className="result text-2xl">
            <p>
              <span>1.000 {selectedOne}</span> ={" "}
              <span className="text-green-600">
                {currencyValue} {selectedTwo}
              </span>
            </p>
            {fromCurrencyName && (
              <p className="text-[1rem] font-[400] mb-0">
                {fromCurrencyName} to {toCurrencyName}
              </p>
            )}
            {dateQuote && (
              <p className="text-[0.75rem] font-[300] -mt-2">
                Last Exchange Rate Date: {dateQuote}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default CurrencyConverter;
