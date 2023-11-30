import Image from "next/image";
import CountDown from "./CountDown";

const WorkShop = () => {
  return (
    <section className="max-md:mx-10 max-md:my-10 mx-32 my-12 lg:mx-20">
      <h1 className="text-center text-head-1">Why attend this workshop?</h1>
      <div className="flex justify-center">
        <Image src="/vector1.svg" width={135} height={13} alt="vector" />
      </div>

      <div className="lg:flex lg:gap-3 lg:items-center lg:justify-between">
        <div className=" mt-9 p-8 bg-dark rounded-[20px] text-lg h-fit">
          <div className="my-4 flex items-start gap-4">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p>
              You Unlock{" "}
              <span className="font-bold">
                Secrets To Create Time & Wealth{" "}
              </span>
              In Business
            </p>
          </div>
          <div className="my-4 flex items-start gap-4">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p>
              You Will Learn Strong Foundational Activities To Win in Your
              Business
            </p>
          </div>
          <div className="my-4 flex items-start gap-4">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p>
              Fastrack your Business Growth with{" "}
              <span className="font-bold">Increased Revenue & Cashflow</span>
            </p>
          </div>
          <div className="mt-4 flex items-start gap-4">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p>
              <span className="font-bold">
                More Profit, More Freedom, More Scale{" "}
              </span>
              is Guaranteed if you follow the Exact Steps covered in the Seminar
            </p>
          </div>
        </div>

        <div className="max-md:mx-10 max-md:my-10 mx-32 my-20">
          <p className="text-xl font-bold text-center">
            STARTS ON 13th April 2023 (9:30AM)
          </p>
          <p className="text-center mt-2 text-lg">Language - Basic English</p>
          <p className="mt-6 text-center text-lg font-semibold">
            Register in Next 15:00 Mins
          </p>

          <CountDown />

          <p className="text-center mt-6">
            To Unlock Bonuses Worth{" "}
            <span className="text-green font-bold">₹6,487</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkShop;
