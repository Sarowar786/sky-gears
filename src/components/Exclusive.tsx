import Image from "next/image";
import image from "@/assets/images/image.jpg";

export default function Exclusive() {
  return (
    <div className="bg-btnColor w-full  mt-5 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src={image}
            height={50}
            width={800}
            className="w-full max-h-[403px]"
            alt="image"
          ></Image>
        </div>
        <div className="lg:pl-9 px-4 py-10 md:py-0 flex flex-col items-start justify-center gap-4 bg-btnColor ">
          <p className="text-white text-3xl md:text-2xl lg:text-4xl font-semibold ">
            Get Exclusive Custom Parts
          </p>
          <p className="text-white lg:w-[458px] md:w-[350px]  text-base font-normal">Sky Gears has been the supplier that aircraft builders, owners, pilots, and aviation businesses have depended on since 1965. We carry a wide selection of aircraft parts.</p>
          <button className="px-6 py-3 rounded-[4px] text-black bg-white w-[130px] h-[48px]">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
