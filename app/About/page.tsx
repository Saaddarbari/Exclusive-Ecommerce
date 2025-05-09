import Image from "next/image";
import Link from "next/link";
export default function About() {
    return (
        <main>
        <section  className="m-auto w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
        <div className="flex max-sm:mx-6 w-full xs:py-20 pb-10 ">
       <div className=" md:w-1/2 w-full flex flex-col justify-center">
        <h1 className="text-[3.5rem] font-semibold">Our Story</h1>
        <p className="mt-8 w-[27.7rem]">Launced in 2015, Exclusive is South Asia premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /><br />
        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className=" md:w-1/2 w-full">
        <Image
                alt="Saaddarbari"
                width="719"
                height="710"
                src="/652e82cd70aa6522dd785109a455904c.png"
                className="my-14"
              />
        </div>
        </div>
        </section>
        <section  className="m-auto w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
        <div className="grid grid-rows-1 grid-cols-4 gap-5 max-sm:gap-2 max-sm:mx-5 items-center max-sm:grid-rows-2 max-sm:grid-cols-2">
        <Link href="">
            <div className="sm:w-60 sm:h-56 xs:w-52 xs:h-44 w-36 h-40 bg-[#F5F5F5] p-10 relative group">
            <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-full object-contain" 
            src="/gamigconsole.png"
            />
            <div className="w-full h-full absolute top-0 left-0 hidden group-hover:block transition-all">
                <div className="absolute w-full h-8 left-0 bottom-0 justify-center items-center gap-2 bg-black flex cursor-pointer">
                    <div className=" text-white text-center">
                    <h1>Add to Cart</h1>
                    </div>
                </div>
            </div>
             </div>
            <span className="font-medium ml-9 mt-2 xs:text-base text-sm">HAVIT HV-G92 Gamepad</span>
           <br />
           <div className="flex items-center gap-2 xs:text-base text-sm">
            <span className="text-red-500">&#36;100</span>
            <div className="flex gap-1">
                <div className="w-3 h-3 overflow-hidden">
                    <Image 
                    alt="" 
                    width="600" 
                    height="600"  
                    className="w-full h-full object-cover" 
                    src="/star.png"
                    />
                    </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
               </div>
                  <span className="text-zinc-400 text-sm font-medium">(55)</span> 
               </div>
        </Link>
        <Link href="">
            <div className="sm:w-60 sm:h-56 xs:w-52 xs:h-44 w-36 h-40 bg-[#F5F5F5] p-10 relative group">
            <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-full object-contain" 
            src="/keyboard.png"
            />
            <div className="w-full h-full absolute top-0 left-0 hidden group-hover:block transition-all">
                <div className="absolute w-full h-8 left-0 bottom-0 justify-center items-center gap-2 bg-black flex cursor-pointer">
                    <div className=" text-white text-center">
                    <h1>Add to Cart</h1>
                    </div>
                </div>
            </div>
             </div>
            <span className="font-medium ml-9 mt-2 xs:text-base text-sm">AK-900 Wired Keyboard</span>
           <br />
           <div className="flex items-center gap-2 xs:text-base text-sm">
            <span className="text-red-500">&#36;100</span>
            <div className="flex gap-1">
                <div className="w-3 h-3 overflow-hidden">
                    <Image 
                    alt="" 
                    width="600" 
                    height="600"  
                    className="w-full h-full object-cover" 
                    src="/star.png"
                    />
                    </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
               </div>
                  <span className="text-zinc-400 text-sm font-medium">(55)</span> 
               </div>
        </Link>
        <Link href="">
            <div className="sm:w-60 sm:h-56 xs:w-52 xs:h-44 w-36 h-40 bg-[#F5F5F5] p-10 relative group">
            <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-full object-contain" 
            src="/tv.png"
            />
            <div className="w-full h-full absolute top-0 left-0 hidden group-hover:block transition-all">
                <div className="absolute w-full h-8 left-0 bottom-0 justify-center items-center gap-2 bg-black flex cursor-pointer">
                    <div className=" text-white text-center">
                    <h1>Add to Cart</h1>
                    </div>
                </div>
            </div>
             </div>
            <span className="font-medium ml-9 mt-2 xs:text-base text-sm">IPS LCD Gaming Monitor</span>
           <br />
           <div className="flex items-center gap-2 xs:text-base text-sm">
            <span className="text-red-500">&#36;100</span>
            <div className="flex gap-1">
                <div className="w-3 h-3 overflow-hidden">
                    <Image 
                    alt="" 
                    width="600" 
                    height="600"  
                    className="w-full h-full object-cover" 
                    src="/star.png"
                    />
                    </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
               </div>
                  <span className="text-zinc-400 text-sm font-medium">(55)</span> 
               </div>
        </Link>
        <Link href="">
            <div className="sm:w-60 sm:h-56 xs:w-52 xs:h-44 w-36 h-40 bg-[#F5F5F5] p-10 relative group">
            <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-full object-contain" 
            src="/chair.png"
            />
            <div className="w-full h-full absolute top-0 left-0 hidden group-hover:block transition-all">
                <div className="absolute w-full h-8 left-0 bottom-0 justify-center items-center gap-2 bg-black flex cursor-pointer">
                    <div className=" text-white text-center">
                    <h1>Add to Cart</h1>
                    </div>
                </div>
            </div>
             </div>
            <span className="font-medium ml-9 mt-2 xs:text-base text-sm">S-Series Comfort Chair </span>
           <br />
           <div className="flex items-center gap-2 xs:text-base text-sm">
            <span className="text-red-500">&#36;100</span>
            <div className="flex gap-1">
                <div className="w-3 h-3 overflow-hidden">
                    <Image 
                    alt="" 
                    width="600" 
                    height="600"  
                    className="w-full h-full object-cover" 
                    src="/star.png"
                    />
                    </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
                    <div className="w-3 h-3 overflow-hidden">
                        <Image 
                        alt=""
                        width="600" 
                        height="600"  
                        className="w-full h-full object-cover" 
                         src="/star.png"
                        />
                        </div>
               </div>
                  <span className="text-zinc-400 text-sm font-medium">(55)</span> 
               </div>
        </Link>
        </div>
       </section>
     
        <section className="m-auto w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
        <div className="py-20 flex justify-around">
          <div className="flex-col flex">
        <Image
                alt="Saaddarbari"
                width="80"
                height="89"
                src="/service.png"
                className="mx-10 my-5"
              />
              <span className="font-bold">FREE AND FAST DELIVERY</span>
              <span>Free delivery for all orders over $140</span>
        </div>
        <div className="flex-col flex">
        <Image
                alt="Saaddarbari"
                width="80"
                height="89"
                src="/service.png"
                className="mx-10 my-5"
               
              />
              <span className="font-bold">24/7 CUSTOMER SERVICE</span>
              <span>Friendly 24/7 customer support</span>
        </div>
        <div className="flex-col flex">
        <Image
                alt="Saaddarbari"
                width="80"
                height="89"
                src="/service.png"
                className="mx-10 my-5"
              />
              <span className="font-bold">MONEY BACK GUARANTEE</span>
              <span>We reurn money within 30 days</span>
        </div>
        </div>
      </section>
        </main>
        
    );
  }
  