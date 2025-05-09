import Link from "next/link";

export default function TopHeader() {
    return (
        <header className="bg-black top-0 z-30 w-full bg-main">
        <div className="m-auto flex h-12 w-[95%] items-center justify-between md:h-10 text-white lg:w-[90%] xl:w-[1300px]">
                <h1 className="text-[13px] ml-[30%] max-sm:hidden">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <span className="mx-3 underline	">
                        <Link href="/">Shop Now</Link>
                    </span>
                </h1>
                <h1 className="text-[13px] ml-[30%] lg:hidden">Summer Sale - OFF 50%!</h1>
                   <select className="bg-black border-none mr-[5%] max-sm:text-[13px]">     
                       <option value="English">English</option>
                       <option value="Urdu">Urdu</option>
                       <option value="spanish">Spanish</option>
                 </select>
        </div>
      </header>
    );
  }
  