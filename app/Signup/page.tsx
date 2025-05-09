import Image from "next/image";
import Link from "next/link";

export default function Signup() {
    return (
        <main className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
        <div className="flex max-sm:mx-6 w-full xs:py-20 py-10 ">
        <div className="max-sm:hidden md:w-1/2 w-full">
        <Image
                alt="Saaddarbari"
                width="719"
                height="706"
                src="/loginsignupimg.png"
                className="mr-24 my-14"
              />
        </div>
        <div className="  flex flex-col justify-center md:w-1/2 w-full m-auto xs:px-20 max-sm:px-0 px-20">
            <h1 className="text-[36px] font-medium">Create an account</h1>
            <h1 className="text-[16px] font-normal mb-6">Enter your details below</h1>
            <input type="text" placeholder="Name" className="border-b-2 border-[#D9D9D9] pb-2 mt-6"/>
            <input type="text" placeholder="Email or Phone Number" className="border-b-2 border-[#D9D9D9] my-7 pb-2"/>
            <input type="password" placeholder="Password" className="border-b-2 border-[#D9D9D9] pb-2"/>
          <div className="w-full flex flex-col">
            <button className="px-24 py-3 mt-6 bg-[#DB4444] text-white rounded text-[15px]">
            Create Account
            </button>
            <button className="px-10 py-3 mt-6 bg-none rounded border-[#D9D9D9] border text-black text-[15px]">
            Sign up with Google
            </button>
            <div className="mt-5 mx-20 text-gray-600">Already have an account? 
            <Link href="/login" className="underline underline-offset-4"> Login now</Link>
          </div>
          </div>
        </div>
        </div>
       </main>
    );
  }
  