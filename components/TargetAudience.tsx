import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const TargetAudience = () => {
  return (
    <section className="w-full bg-dark py-4 rounded-[20px]">
      <div className="max-md:mx-10 max-md:my-10 mx-32 my-20">
        <h1 className="text-3xl font-semibold text-center">
          Who this Seminar will Help the Best?
        </h1>
        <div className="flex justify-center mt-1">
          <Image src="/vector1.svg" width={135} height={13} alt="vector" />
        </div>

        <div className="lg:flex items-start gap-5">
          <div className="lg:w-1/2">
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
          </div>

          <div className="lg:w-1/2">
            <p className="text-center font-medium text-xl mt-14 lg:mt-5">
              Don't Join If
            </p>

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

            <div className="lg:flex hidden justify-center">
              <Button />
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
