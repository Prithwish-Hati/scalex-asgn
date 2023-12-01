import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="Home"
      className="max-md:mx-10 max-md:my-10 mx-32 my-20 lg:flex lg:mx-20 lg:my-1 lg:gap-3 lg:items-center lg:justify-center"
    >
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <div className="absolute max-md:right-2 max-md:top-0 right-20 top-10">
            <Image
              src="/yellow-triangle.svg"
              alt="vector"
              width={33}
              height={33}
            />
          </div>
          <div className="flex justify-center">
            <div className="bg-dark rounded-[20px] px-5 py-4 w-fit lg:mt-12 lg:px-10">
              <p className="text-head-4 text-center">
                <strong>
                  Business Breakthrough Seminar <br />
                  <span className="text-yellow font-semibold">4 Hour </span>
                </strong>
                Online
              </p>
            </div>
          </div>
          <div className="absolute max-md:left-5 left-20 top-36">
            <Image
              src="/blue-triangle.svg"
              alt="vector"
              width={33}
              height={33}
            />
          </div>
        </div>

        <h2 className="mt-7 text-head-1 text-center font-bold lg:mt-16">
          Learn the Right Strategies of <br className="hidden lg:block" />
          <span className="text-yellow">Growing Your Business </span> to{" "}
          <br className="hidden lg:block" />
          Multiple Crores
        </h2>

        <p className="mt-7 text-head-4 font-semibold text-center lg:mt-10">
          End day to day firefighting in business
        </p>

        {/* Desktop CTA */}
        <Button />
      </div>

      <div className="w-full lg:w-6/12">
        <div className="flex justify-center mt-12">
          <Image
            src="/hero-image.svg"
            alt="hero image"
            width={420}
            height={283}
            className="object-contain lg:w-[80%]"
          />
        </div>
        <div className="p-5 bg-dark rounded-[20px] lg:px-10">
          <h3 className="text-head-2 text-center ">
            Asia's Leading Business
            <br className="hidden lg:block" />
            Success Coach
          </h3>
          <p className="text-center my-3 text-head-4">
            Trained over <strong>1,00,00 </strong>Business Owners in Last{" "}
            <strong>16 Years</strong>
          </p>
          <div className="bg-dark rounded-[20px] py-3 px-4 my-3 lg:mt-4">
            <div className="flex justify-center">
              <Image
                src="/rating.svg"
                width={115}
                height={25}
                alt="rating"
                className="lg:w-[30%]"
              />
            </div>
            <p className="text-center mt-2 2xl:text-head-4">
              <span className="font-bold">70,000+ </span>People Rated My
              Programs with <span className="font-bold">4.96 </span>Stars
            </p>
          </div>
        </div>
      </div>
      {/* CTA Button */}
      <div className="flex lg:hidden items-center justify-between mt-11 bg-blue rounded-[20px] p-4 max-md:gap-10 gap-24 shadow-3xl">
        <Link href="/" className="text-xl font-semibold ml-10">
          JOIN NOW FOR ₹99
        </Link>
        <Image
          src="right-arrow.svg"
          alt="arrow"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
