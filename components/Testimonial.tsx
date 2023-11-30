import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="max-md:mx-10 max-md:my-10 mx-32 my-20">
      <h1 className="text-head-1 text-center">
        Listen from Real Business <br className="hidden lg:block" />
        Owners to find out their <br className="hidden lg:block" />
        breakthrough after <br className="hidden lg:block" />
        attending this seminar
      </h1>
      <div className="flex justify-center -mt-28 lg:-mt-[170px]">
        <Image src="/vector2.svg" width={309} height={13} alt="vector" />
      </div>

      <div className="mt-32 lg:mt-52 lg:flex justify-around">
        <div className="mt-10">
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
      </div>
    </section>
  );
};

export default Testimonial;
