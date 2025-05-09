import Image from "next/image";
import Link from "next/link";

export default function Login() {
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
        <div className="  flex flex-col justify-center  md:w-1/2 w-full m-auto xs:px-20 max-sm:px-0 px-20">
            <h1 className="text-[36px] font-medium">Log in to Exclusive</h1>
            <h1 className="text-[16px] font-normal mb-6">Enter your details below</h1>
            <input type="text" placeholder="Email or Phone Number" className="border-b-2 border-[#D9D9D9] my-7 pb-2"/>
            <input type="password" placeholder="Password" className="border-b-2 border-[#D9D9D9] pb-2"/>
          <div className="w-full flex justify-center">
            <button className="px-10 py-3 mr-10 mt-9 bg-red-600 text-white rounded text-[15px]">
            Login 
            </button>
            <div className="text-red-600 mx-10 mt-9 flex items-center">Forget Password?</div>
          </div>
          <div className="mt-5 text-gray-600">Don't have an account 
            <Link href="/Signup" className="underline underline-offset-4"> signup now</Link>
          </div>
        </div>
        </div>
       </main>
    );
  }
  