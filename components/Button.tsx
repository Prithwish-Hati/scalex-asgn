import Image from "next/image"
import Link from "next/link"

const Button = () => {
  return (
    <div className="flex justify-center">
          <Link
            href="/"
            className="lg:flex hidden items-center gap-10 mt-16 bg-blue rounded-[20px] p-4 shadow-3xl w-fit"
          >
            <p className="text-xl font-semibold ml-10">JOIN NOW FOR ₹99</p>
            <Image
              src="right-arrow.svg"
              alt="arrow"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>
        </div>
  )
}

export default Button