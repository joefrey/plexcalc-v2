import PomodoroTaskTimer from "@/components/PomodoroTaskTimer";
import Share from "@/components/Share";
import React from "react";
export const metadata = {
  title: "Pomodoro Task Timer",
  description:
    "A digital Pomodoro Timer designed to enhance your efficiency and productivity online.",
  openGraph: {
    title: "Pomodoro Task Timer",
    description:
      "A digital Pomodoro Timer designed to enhance your efficiency and productivity online.",
    url: "https://plexcac.com/pomodoro-task-timer",
    siteName: "PlexCalc",
    images: [
      {
        url: "https://plexcalc.com/img_opengraph_800x600-min.png",
        width: 800,
        height: 600,
        alt: "A digital Pomodoro Timer designed to enhance your efficiency and productivity online.",
      },
      {
        url: "https://plexcalc.com/img_opengraph_1800x1600-min.png",
        width: 1800,
        height: 1600,
        alt: "A digital Pomodoro Timer designed to enhance your efficiency and productivity online.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
const page = () => {
  return (
    <>
      <PomodoroTaskTimer />
      <div className="max-w-sm w-full mx-auto text-center mt-0 mb-16 ">
        <h3 className="text-sm mb-5 text-gray-70">Share:</h3>
        <Share
          description={metadata.openGraph.description}
          subject={metadata.description}
          body={metadata.openGraph.description}
        />
      </div>

      <div className="max-w-2xl mx-auto mb-8 content-wrap">
        <h2 className="text-gray-900 text-sm mb-4 font-bold">
          Pomodoro Task Timer
        </h2>
        <h3 className="mb-3 font-semi-bold text-sm">
          A digital Pomodoro Timer designed to enhance your efficiency and
          productivity online.
        </h3>
        <p className="text-gray-500 leading-loose text-sm">
          Introducing a digital Pomodoro Timer meticulously crafted to elevate
          your efficiency and productivity in the online realm. This
          user-friendly tool is thoughtfully designed to help you manage your
          work intervals effectively, aligning with the proven Pomodoro
          Technique. By seamlessly integrating into your online workflow, this
          timer encourages focused work sessions punctuated by brief breaks,
          optimizing your concentration and overall output. Whether you&apos;re
          tackling work tasks, studying, or engaging in creative endeavors, this
          Pomodoro Timer is a valuable companion on your journey to enhanced
          productivity and success.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-8 content-wrap">
        <h2 className="text-gray-900 text-sm mb-4 font-bold">
          What is Pomodoro?
        </h2>
        <p className="text-gray-500 leading-loose text-sm">
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. The technique uses a timer to
          break down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. These intervals are known as
          &ldquo;Pomodoros,&rdquo; the Italian word for tomatoes, inspired by
          the kitchen timer that Cirillo used during university, which resembled
          a tomato.
        </p>
        <p className="text-gray-500 leading-loose text-sm">
          The Pomodoro Technique is based on the idea that frequent breaks can
          improve mental agility and focus. The standard Pomodoro cycle involves
          working on a task for 25 minutes, followed by a short 5-minute break.
          After completing four Pomodoros, a longer break of 15-30 minutes is
          taken. This structured approach aims to enhance productivity by
          maintaining a balance between focused work and rejuvenating breaks.
        </p>
        <p className="text-gray-500 leading-loose text-sm">
          The technique has gained popularity as a simple and effective method
          for time management, helping individuals stay organized, manage
          distractions, and accomplish tasks with a heightened sense of
          concentration. Many people use digital Pomodoro Timers to automate and
          facilitate the application of the Pomodoro Technique in their daily
          routines.
        </p>
      </div>
    </>
  );
};

export default page;
