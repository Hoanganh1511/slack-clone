import Link from "next/link";
import Image from "next/image";
const NotFound = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[80px]">
        <div className="w-[1128px] h-full mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={387}
              height={105}
              alt=""
              className="aspect-[387/105] w-[100px]"
            />
          </Link>
        </div>
      </div>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-[46px] font-regular mb-3">Page not found</h2>
          <p className="text-[18px] max-w-[560px] text-center text-black/55">
            Opps, we can&apos;t seem to find the page you&apos;re looking for.
            Try going back to the previous page or see our{" "}
            <a href="/help" className="inline-block  text-[#0073b1] font-bold ">
              Help Center
            </a>{" "}
            for more information
          </p>
          <Link
            href="/"
            className="mt-8 px-4 py-2 bg-white hover:bg-[#0073b1]/10 hover:underline font-bold text-[#0073b1] border-[1px] border-[#0073b1] rounded-[2px] duration-100"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
