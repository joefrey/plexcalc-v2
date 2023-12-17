"use client";
import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import TitleNav from "./TitleNav";
import useSound from "use-sound";

const Timer = ({ initialTime, play, stop }) => {
  const [clickPlay] = useSound("/sound/click.mp3", { volume: 1 });
  let initialTimeTemp = initialTime;

  const [time, setTime] = useState(initialTime * 60);
  let titleEl;
  if (typeof document !== "undefined") {
    titleEl = document.querySelector("title");
  }

  const [isRunning, setIsRunning] = useState(false);

  const handleTimerStart = () => {
    setIsRunning(!isRunning);
    stop();
    clickPlay();

    if (time === 0) {
      setTime(initialTime * 60);
    }
  };

  useEffect(() => {
    if (isRunning == false) return;

    let timer;
    if (time > 0) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsRunning(false);
      play();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [time, isRunning, play, initialTimeTemp]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (titleEl) {
    titleEl.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")} - Pomodoro Task Timer`;
  }

  return (
    <div>
      <div className="flex flex-col space-y-72 items-center justify-center">
        <div className="w-full">
          <strong className="text-indigo-900 text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[10rem] block tracking-wide">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </strong>

          <button
            className="outline-none py-3 mb-5 rounded-md block w-full md:w-auto mx-auto  border border-transparent appearance-none bg-indigo-600 text-white px-20 text-2xl"
            onClick={handleTimerStart}>
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

const PomodoroTaskTimer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [play, { stop }] = useSound("/sound/ringtone-126505.mp3", {
    volume: 1,
  });

  return (
    <div className="box-container-shadow">
      <TitleNav title="Pomodoro Task Timer" />

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-2">
          <Tab
            className={`${
              selectedIndex === 0 ? "bg-indigo-600 text-white" : "bg-indigo-50"
            }  py-2 px-2 rounded-full  border border-transparent outline-none`}
            onClick={() => stop()}>
            Pomodoro
          </Tab>
          <Tab
            className={`${
              selectedIndex === 1 ? "bg-indigo-600 text-white" : "bg-indigo-50"
            }  py-2 px-2 rounded-full  border border-transparent outline-none`}
            onClick={() => stop()}>
            Short Break
          </Tab>
          <Tab
            className={`${
              selectedIndex === 2 ? "bg-indigo-600 text-white" : "bg-indigo-50"
            }  py-2 px-2 rounded-full  border border-transparent outline-none`}
            onClick={() => stop()}>
            Long Break
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Timer initialTime={25} play={play} stop={stop} />
          </Tab.Panel>
          <Tab.Panel>
            <Timer initialTime={5} play={play} stop={stop} />
          </Tab.Panel>
          <Tab.Panel>
            <Timer initialTime={15} play={play} stop={stop} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default PomodoroTaskTimer;
