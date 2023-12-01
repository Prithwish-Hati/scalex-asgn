import Image from "next/image";
import Button from "./Button";

const WhatWillYouLearn = () => {
  return (
    <section className="max-md:mx-10 max-md:my-10 mx-32 my-20">
      <h1 className="text-3xl font-semibold text-center">
        What You will Learn in
        <br />4 Hours?
      </h1>
      <div className="flex justify-center mt-1">
        <Image src="/vector1.svg" width={135} height={13} alt="vector" />
      </div>

      <p className="font-medium text-xl text-center mt-10 2xl:text-head-3">
        Here’s What You’ll Learn in Just{" "}
        <span className="font-bold">4 Hours</span>
      </p>

      <div className="mt-8 bg-dark flex rounded-[20px] py-6 pr-5 items-start gap-5">
        <span className="bg-yellow text-black text-3xl font-bold px-3 py-1 rounded-r-2xl">
          01
        </span>
        <p className="text-lg 2xl:text-head-4">
          <span className="font-bold">
            7 Foundational Activities used by successful entrepreneurs{" "}
          </span>
          which you can COPY to build a Stable and scalable business.
        </p>
      </div>
      <div className="mt-8 bg-dark flex rounded-[20px] py-6 pr-5 items-start gap-5">
        <span className="bg-yellow text-black text-3xl font-bold px-3 py-1 rounded-r-2xl">
          02
        </span>
        <p className="text-lg 2xl:text-head-4">
          <span className="font-bold">3 ingredients you need to focus </span>
          on to build a business that can grow without you.
        </p>
      </div>
      <div className="mt-8 bg-dark flex rounded-[20px] py-6 pr-5 items-start gap-5">
        <span className="bg-yellow text-black text-3xl font-bold px-3 py-1 rounded-r-2xl">
          03
        </span>
        <p className="text-lg 2xl:text-head-4">
          <span className="font-bold">
            How To Build Your Front-Line Leaders:{" "}
          </span>
          Understand the step-by-step process of building your second line of
          leaders that you can implement immediately
        </p>
      </div>
      <div className="mt-8 bg-dark flex rounded-[20px] py-6 pr-5 items-start gap-5">
        <span className="bg-yellow text-black text-3xl font-bold px-3 py-1 rounded-r-2xl">
          04
        </span>
        <p className="text-lg 2xl:text-head-4">
          <span className="font-bold">How to retain employees: </span>
          strategies and systems that you can implement to make sure you create
          an environment for employees to work longer so that you can focus on
          strategic business growth.
        </p>
      </div>

      <Button />
    </section>
  );
};

export default WhatWillYouLearn;
