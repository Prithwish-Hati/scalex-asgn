import CountDown from "@/components/CountDown";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-[1600px] relative">
      <section
        id="Home"
        className="max-md:mx-10 max-md:my-10 mx-32 my-20 lg:flex lg:mx-20 lg:my-1 lg:gap-3"
      >
        <div className="w-full lg:w-6/12">
          <div className="absolute max-md:right-2 max-md:top-0 right-20 top-10">
            <Image
              src="/yellow-triangle.svg"
              alt="vector"
              width={33}
              height={33}
            />
          </div>
          <div className="flex justify-center">
            <div className="bg-dark rounded-[20px] px-5 py-4 w-fit lg:mt-12">
              <p className="text-center text-xl">
                <span className="font-bold">Business Breakthrough Seminar</span>
                <br />
                <span className="text-yellow font-semibold">4 Hour </span>Online
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

          <h2 className="mt-7 text-3xl/9 text-center font-bold lg:mt-16">
            Learn the Right Strategies of{" "}
            <span className="text-yellow">Growing Your Business </span> to
            Multiple Crores
          </h2>

          <p className="mt-7 text-lg font-semibold text-center lg:mt-16">
            End day to day firefighting in business
          </p>

          <div className="lg:flex hidden items-center justify-between mt-16 bg-blue rounded-[20px] p-4 shadow-3xl ">
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
        </div>
        <div className="w-full lg:w-6/12">
          <div className="flex justify-center mt-12">
            <Image
              src="/hero-image.svg"
              alt="hero image"
              width={420}
              height={283}
              className="object-contain"
            />
          </div>
          <div className="p-5 bg-dark rounded-[20px]">
            <h3 className="font-semibold text-xl text-center">
              Asia's Leading Business Success Coach
            </h3>
            <p className="text-center my-3">
              Trained over <span className="font-bold">1,00,00 </span>Business
              Owners in Last <span className="font-bold">16 Years</span>
            </p>
            <div className="bg-dark rounded-[20px] py-3 px-4 my-3">
              <div className="flex justify-center">
                <Image src="/rating.svg" width={115} height={25} alt="rating" />
              </div>
              <p className="text-center mt-2">
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

      <section className="max-md:mx-10 max-md:my-10 mx-32 my-20 lg:mx-20 ">
        <h1 className="text-3xl font-semibold text-center">
          Why attend this workshop?
        </h1>
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
                is Guaranteed if you follow the Exact Steps covered in the
                Seminar
              </p>
            </div>
            <div className="mt-10 hidden xl:block">
              <div className="bg-yellow w-fit pt-2 pb-1 px-5 rounded-t-[10px] ml-14">
                <p className="text-black text-center font-extrabold">
                  FEATURED IN
                </p>
              </div>
              <div className="flex justify-between rounded-[20px] bg-dark py-9 px-6">
                <Image
                  src="/dailyhunt.svg"
                  width={105}
                  height={27}
                  alt="dailyhunt"
                />
                <Image src="/dna.svg" width={105} height={27} alt="dna" />
                <Image
                  src="/zee-business.svg"
                  width={105}
                  height={27}
                  alt="zee-business"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <Image src="/bar.svg" width={94} height={12} alt="bar" />
              </div>
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

      <section className="max-md:mx-10 max-md:my-10 mx-32 my-20 xl:hidden block">
        <div className="bg-yellow w-fit pt-2 pb-1 px-5 rounded-t-[10px] ml-14">
          <p className="text-black text-center font-extrabold">FEATURED IN</p>
        </div>
        <div className="flex justify-between rounded-[20px] bg-dark py-9 px-6">
          <Image src="/dailyhunt.svg" width={105} height={27} alt="dailyhunt" />
          <Image src="/dna.svg" width={105} height={27} alt="dna" />
          <Image
            src="/zee-business.svg"
            width={105}
            height={27}
            alt="zee-business"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <Image src="/bar.svg" width={94} height={12} alt="bar" />
        </div>
      </section>

      <div className="w-full bg-dark py-4 rounded-[20px]">
        <section className="max-md:mx-10 max-md:my-10 mx-32 my-20">
          <h1 className="text-3xl font-semibold text-center">
            What will Change in Your Business
          </h1>
          <div className="flex justify-center">
            <Image src="/vector1.svg" width={135} height={13} alt="vector" />
          </div>
          <div className="lg:flex lg:items-center">
            <div className="flex justify-center mt-10 lg:w-6/12">
              <Image
                src="/illustration.svg"
                width={341}
                height={300}
                alt="illustration"
              />
            </div>

            <div className="mt-9 text-lg lg:w-6/12">
              <div className="flex items-start gap-4">
                <Image
                  src="/check.svg"
                  width={22}
                  height={22}
                  alt="list-icon"
                />
                <p>
                  Build Success Mindset to Run Your Business like the Top 1%
                </p>
              </div>
              <div className="my-4 flex items-start gap-4">
                <Image
                  src="/check.svg"
                  width={22}
                  height={22}
                  alt="list-icon"
                />
                <p>Improve Your Business with Right Systems & Processes</p>
              </div>
              <div className="my-4 flex items-start gap-4">
                <Image
                  src="/check.svg"
                  width={22}
                  height={22}
                  alt="list-icon"
                />
                <p>Manage Your Employees like a True Leader</p>
              </div>
              <div className="my-4 flex items-start gap-4">
                <Image
                  src="/check.svg"
                  width={22}
                  height={22}
                  alt="list-icon"
                />
                <p>
                  Make Your Employees Work like True Leaders where They Take
                  Ownership & Responsibilities
                </p>
              </div>
              <div className="my-4 flex items-start gap-4">
                <Image
                  src="/check.svg"
                  width={22}
                  height={22}
                  alt="list-icon"
                />
                <p>
                  <span className="font-bold">Most Important! </span>Come from
                  Debt to Positive Cashflow, and from Positive Cashflow to High
                  Scale Business Growth
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center justify-between mt-16 bg-blue rounded-[20px] p-4 max-md:gap-10 gap-10 shadow-3xl w-fit">
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
          </div>
        </section>
      </div>

      <section className="max-md:mx-10 max-md:my-10 mx-32 my-20">
        <h1 className="text-3xl font-semibold text-center">
          Listen from Real Business Owners to find out their breakthrough after
          attending this seminar
        </h1>
        <div className="flex justify-center -mt-28">
          <Image src="/vector2.svg" width={309} height={13} alt="vector" />
        </div>

        <div className="mt-40 flex justify-center">
          <Image
            src="/thumbnail1.svg"
            width={361}
            height={200}
            alt="thumbnail"
            className="object-contain w-full"
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Image
            src="/thumbnail2.svg"
            width={361}
            height={200}
            alt="thumbnail"
            className="object-contain w-full"
          />
        </div>
      </section>

      <div className="w-full bg-dark py-4 rounded-[20px]">
        <section className="max-md:mx-10 max-md:my-10 mx-32 my-20">
          <h1 className="text-3xl font-semibold text-center">
            Who this Seminar will Help the Best?
          </h1>
          <div className="flex justify-center mt-1">
            <Image src="/vector1.svg" width={135} height={13} alt="vector" />
          </div>
          <p className="text-center font-medium text-xl mt-9">
            Any Business Owner (Any Type of Business)
          </p>

          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">
              Directors, Partners, Sole Proprietor Of Companies, LLPs,
              Partnerships etc
            </p>
          </div>
          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">
              Consultants & Professionals Like Architects, Doctors, Lawyers
            </p>
          </div>
          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">
              Business & Startup Founders, Entrepreneurs, CEOs, CMOs, CXOs etc
            </p>
          </div>
          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">
              Owners of Service Based Businesses & Agencies  etc
            </p>
          </div>
          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">
              Retailer, Manufacturers, Distributors, Wholesalers, Franchise
              Owners etc
            </p>
          </div>
          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/check.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">
              SME, MSMEs (Small, Micro, Medium Unit Owners)
            </p>
          </div>

          <p className="text-center font-medium text-xl mt-14">Don't Join If</p>

          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/no.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">You Are Not Serious About Your Business</p>
          </div>
          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/no.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">You Are Not An Action Taker</p>
          </div>
          <div className="my-4 flex items-start gap-4 bg-dark py-4 px-5 rounded-[20px] mt-5">
            <Image src="/no.svg" width={22} height={22} alt="list-icon" />
            <p className="text-xl">You Are Not A Business Owner</p>
          </div>

          <div className="flex items-center justify-end mt-11 bg-blue rounded-[20px] p-4 max-md:gap-10 gap-24 shadow-3xl">
            <Link href="/" className="text-xl font-semibold">
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
      </div>
      <section className="max-md:mx-10 max-md:my-10 mx-32 my-20">
        <h1 className="text-3xl font-semibold text-center">
          What You will Learn in
          <br />4 Hours?
        </h1>
        <div className="flex justify-center mt-1">
          <Image src="/vector1.svg" width={135} height={13} alt="vector" />
        </div>

        <p className="font-medium text-xl text-center mt-10">
          Here’s What You’ll Learn in Just{" "}
          <span className="font-bold">4 Hours</span>
        </p>

        <div className="mt-8 bg-dark flex rounded-[20px] py-6 pr-5 items-start gap-5">
          <span className="bg-yellow text-black text-3xl font-bold px-3 py-1 rounded-r-2xl">
            01
          </span>
          <p className="text-lg">
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
          <p className="text-lg">
            <span className="font-bold">3 ingredients you need to focus </span>
            on to build a business that can grow without you.
          </p>
        </div>
        <div className="mt-8 bg-dark flex rounded-[20px] py-6 pr-5 items-start gap-5">
          <span className="bg-yellow text-black text-3xl font-bold px-3 py-1 rounded-r-2xl">
            03
          </span>
          <p className="text-lg">
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
          <p className="text-lg">
            <span className="font-bold">How to retain employees: </span>
            strategies and systems that you can implement to make sure you
            create an environment for employees to work longer so that you can
            focus on strategic business growth.
          </p>
        </div>
      </section>
    </main>
  );
}
