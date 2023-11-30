import AppearedAt from "@/components/AppearedAt";
import BusinessSuccess from "@/components/BusinessSuccess";
import Hero from "@/components/Hero";
import WorkShop from "@/components/WorkShop";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-[1600px] relative">
      <Hero />

      <WorkShop />

      <AppearedAt />

      <BusinessSuccess />

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
