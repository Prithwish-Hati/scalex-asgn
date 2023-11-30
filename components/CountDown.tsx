"use client";

import { useEffect, useState } from "react";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center sm:gap-3 gap-6 mt-6">
      <div className="bg-dark rounded-[20px] py-4 px-6 text-center">
        <p className="text-2xl font-bold">{days}</p>
        <p className="text-[10px] font-light mt-1">DAYS</p>
      </div>
      <div className="bg-dark rounded-[20px] py-4 px-6 text-center">
        <p className="text-2xl font-bold">{hours}</p>
        <p className="text-[10px] font-light mt-1">HOURS</p>
      </div>
      <div className="bg-dark rounded-[20px] py-4 px-6 text-center">
        <p className="text-2xl font-bold">{minutes}</p>
        <p className="text-[10px] font-light mt-1">MINUTES</p>
      </div>
      <div className="bg-dark rounded-[20px] py-4 px-6 text-center">
        <p className="text-2xl font-bold">{seconds}</p>
        <p className="text-[10px] font-light mt-1">SECONDS</p>
      </div>
    </div>
  );
};

export default CountDown;
