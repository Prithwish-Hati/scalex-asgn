import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const BusinessSuccess = () => {
  return (
    <div className="w-full bg-dark py-4 rounded-[20px]">
      <section className="max-md:mx-10 max-md:my-10 mx-32 my-10">
        <h1 className="text-head-1 text-center">
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

          <div className="mt-9 text-lg lg:w-6/12 2xl:text-head-4">
            <div className="flex items-start gap-4">
              <Image src="/check.svg" width={22} height={22} alt="list-icon" />
              <p>Build Success Mindset to Run Your Business like the Top 1%</p>
            </div>
            <div className="my-4 flex items-start gap-4">
              <Image src="/check.svg" width={22} height={22} alt="list-icon" />
              <p>Improve Your Business with Right Systems & Processes</p>
            </div>
            <div className="my-4 flex items-start gap-4">
              <Image src="/check.svg" width={22} height={22} alt="list-icon" />
              <p>Manage Your Employees like a True Leader</p>
            </div>
            <div className="my-4 flex items-start gap-4">
              <Image src="/check.svg" width={22} height={22} alt="list-icon" />
              <p>
                Make Your Employees Work like True Leaders where They Take
                Ownership & Responsibilities
              </p>
            </div>
            <div className="my-4 flex items-start gap-4">
              <Image src="/check.svg" width={22} height={22} alt="list-icon" />
              <p>
                <span className="font-bold">Most Important! </span>Come from
                Debt to Positive Cashflow, and from Positive Cashflow to High
                Scale Business Growth
              </p>
            </div>
          </div>
        </div>
        <Button />
      </section>
    </div>
  );
};

export default BusinessSuccess;
