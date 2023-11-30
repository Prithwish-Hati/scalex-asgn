import Image from "next/image";

const AppearedAt = () => {
  return (
    <section className="max-md:mx-10 max-md:my-10 mx-32 my-12 lg:flex flex-col justify-center items-center">
      <div className="bg-yellow w-fit pt-2 pb-1 px-5 rounded-t-[10px]">
        <p className="text-black text-center font-extrabold">FEATURED IN</p>
      </div>

      <div className="flex justify-between rounded-[20px] bg-dark py-9 px-6 w-fit gap-32">
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
  );
};

export default AppearedAt;
