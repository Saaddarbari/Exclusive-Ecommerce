import Image from "next/image";
import Link from "next/link";
import ImgSlider from "./Components/ImageSlider/page";

export default function Home() {
  return (
    <main>
    <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
     <div className="w-1/4 flex justify-end border-r-2 border-inherit max-sm:hidden">
        <ul className="leading-8 tracking-wider cursor-pointer my-8 pr-3 ">
          <li>
            <div className="relative">
              <select className="appearance-none w-full bg-transparent pr-20 cursor-pointer">
                <option value="woman's fashion">Woman&#39;s Fashion</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <span>&gt;</span>
              </div>
            </div>
          </li>
          <li>
            <div className="relative">
              <select className="appearance-none w-full bg-transparent pr-20 cursor-pointer">
                <option value="mens's fashion">Mens&#39;s Fashion</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <span>&gt;</span>
              </div>
            </div>
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby&#39;s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

     <div className="w-3/4 max-sm:w-full">
        <div className="w-[892px] h-[344px] max-sm:w-full max-sm:translate-x-[0px] max-sm:translate-y-[0px] bg-black translate-x-[50px] translate-y-[50px] text-white flex">
          <div className="w-[50%] my-16 ">
            <div className="mx-[4rem] max-sm:mx-0">
           <div className="flex items-center gap-5">
              <Image
                alt="Saaddarbari"
                width="30"
                height="39"
                src="/1200px-Apple_gray_logo 1.png"
              />
              <p className="max-sm:text-[15px]">iPhone 14 Series</p>
            </div>
            <h1 className="text-[3rem] max-sm:text-[2rem] font-semibold flex items-center">Up to 10% <br />
              off Voucher</h1>

            <span className=" underline	underline-offset-8 flex gap-3 items-center ">
              <Link href="/" className="text-[1.25rem] max-sm:text-[1rem]">Shop Now</Link>
              <Image
                alt="Saaddarbari"
                width="25"
                height="25"
                src="/Vector.png"
              />
            </span>
          </div>
          </div>
          <div className="w-[50%] ">
            <Image
              alt="Saaddarbari"
              width="496"
              height="352"
              src="/iphone.png"
              className="max-sm:h-[452px]"
            />
          </div>
        </div>
      </div>
    </section>

    <section  className="m-auto  w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden my-20 border-b py-16">
      <div className="flex max-sm:ml-4">
        <div className="bg-[#DB4444] border-none rounded h-[3rem] w-[1.55rem] mr-5"></div>
        <div className="text-[#DB4444] font-medium flex items-center">Today&#39;s </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="max-sm:ml-4 text-2xl font-medium tracking-wider mt-5">Flash Sales</h1>
        <div className="flex mr-6">
         <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/LeftArrow.png"
              />
          <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/RightArrow.png"
              />
         </div>
      </div>
      <div>
      <ImgSlider />
      </div>
    </section>
    
    <section  className="m-auto w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden my-20 border-b py-16">
      <div className="flex max-sm:ml-4">
        <div className="bg-[#DB4444] border-none rounded h-[3rem] w-[1.55rem] mr-5"></div>
        <div className="text-[#DB4444] font-medium flex items-center">Categories</div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className=" max-sm:ml-4 text-2xl font-medium tracking-wider mt-5">Browse By Category</h1>
        <div className="flex mr-6">
         <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/LeftArrow.png"
              />
          <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/RightArrow.png"
              />
         </div>
      </div>

      <div className="grid grid-rows-1 grid-cols-6 gap-5 max-sm:gap-2 max-sm:mx-5 items-center mt-10 max-sm:grid-rows-3 max-sm:grid-cols-2">
        <div className="h-44 w-48 border border-zinc-400 rounded max-sm:h-32 max-sm:w-36 group hover:hover:bg-[#DB4444] content-center">
        <div className="max-sm:mx-10 mx-16 group-hover:invert">
        <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/Category-CellPhone.png"
              />
              <span>Phones</span>
        </div>
        </div>  
        <div className="h-44 w-48 border border-zinc-400 rounded max-sm:h-32 max-sm:w-36 group hover:hover:bg-[#DB4444] content-center	">
        <div className="max-sm:mx-10 mx-16 group-hover:invert">
        <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/Category-Computer.png"
              />
               <span>Computers</span>
        </div>
        </div>  
        <div className="h-44 w-48 border border-zinc-400 rounded max-sm:h-32 max-sm:w-36 group hover:hover:bg-[#DB4444] content-center	">
        <div className="max-sm:mx-10 mx-16 group-hover:invert">
        <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/Category-SmartWatch.png"
              />
               <span>SmartWatch</span>
        </div>
        </div>  
        <div className="h-44 w-48 border border-zinc-400 rounded max-sm:h-32 max-sm:w-36 group hover:hover:bg-[#DB4444] content-center	">
        <div className="max-sm:mx-10 mx-16 group-hover:invert">
        <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/Category-Camera.png"
              />
               <span>Camera</span>
            </div>
        </div>  
        <div className="h-44 w-48 border border-zinc-400 rounded max-sm:h-32 max-sm:w-36 group hover:hover:bg-[#DB4444] content-center	">
          <div className="max-sm:mx-10 mx-16 group-hover:invert">
            <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/Category-HeadPhone.png"
              />
               <span>HeadPhones</span>
            </div>
        </div>  
        <div className="h-44 w-48 border border-zinc-400 rounded max-sm:h-32 max-sm:w-36 group hover:hover:bg-[#DB4444] content-center	">
        <div className="max-sm:mx-10 mx-16 group-hover:invert">
        <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/Category-Gamepad.png"
              />
               <span>Gaming</span>
               </div>
        </div>  

      </div>
      </section>

      <section className="m-auto w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
      <div className="flex max-sm:ml-4">
        <div className="bg-[#DB4444] border-none rounded h-[3rem] w-[1.55rem] mr-5"></div>
        <div className="text-[#DB4444] font-medium flex items-center">This month</div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="max-sm:ml-4 text-2xl font-medium tracking-wider mt-5">Best Selling Products</h1>
        <div className="flex mr-6">
        <div className="w-full flex justify-center">
        <button className="px-6 py-4 mb-9 bg-red-600 text-white rounded text-[15px]">
            View All 
        </button>
         </div>
      </div>
      </div>
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

      <section className="m-auto w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden my-24 max-sm:mt-0">
        <div className="w-[95%] h-full max-sm:w-full bg-black text-white flex my-6 ml-7 max-sm:ml-0">
          <div className="w-full xs:h-[500px] h-[400px] mt-20 relative">
            <Image 
            alt="" 
            width="1170" 
            height="500" 
            className="w-full h-full object-cover absolute top-0 right-0 -z-10" 
            src="/Ellipse 23.png"
            />
            <div className="w-full h-full flex justify-end items-center md:px-20 px-4">
              <div className="flex flex-col justify-between h-full py-20 absolute bottom-10 sm:left-10 left-5 z-10">
                <div className="flex flex-col gap-5">
                  <span className="text-[#00FF66] font-medium">Categories</span>
                  <h1 className="md:text-6xl text-5xl text-white">Enhance Your<br /> Music Experience</h1>
                  </div>
                  <button className="px-8 py-3 bg-[#00FF66] text-white rounded-sm w-fit xs:mt-0 mt-8">Buy Now</button>
                  </div><div className="md:w-1/2 md:h-full w-full h-[80%] z-0 md:py-0 md:px-0 py-20">
                  <Image 
                  alt="" 
                  width="600" 
                  height="500" 
                  className="w-full h-full object-contain" 
                  src="/speaker.png"
                  />
                  </div>
                  </div>
                  </div>
      </div>
      </section>
      
      <section className="m-auto w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden mb-10">
      <div className="flex max-sm:ml-4">
        <div className="bg-[#DB4444] border-none rounded h-[3rem] w-[1.55rem] mr-5"></div>
        <div className="text-[#DB4444] font-medium flex items-center">Our Products</div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className=" max-sm:ml-4 text-2xl font-semibold tracking-wider mt-5">Explore Our Products</h1>
        <div className="flex mr-6">
         <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/LeftArrow.png"
              />
          <Image
                alt="Saaddarbari"
                width="40"
                height="49"
                src="/RightArrow.png"
              />
         </div>
      </div>
      <div className="my-10 grid grid-rows-2 grid-cols-4 gap-5 max-sm:gap-2 max-sm:mx-5 items-center max-sm:grid-rows-2 max-sm:grid-cols-2">
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
        <div className="w-full flex justify-center">
        <button className="px-4 py-4 mx-10 bg-red-600 text-white w-[12rem] h-3rem rounded text-[15px]">
            View All Product 
        </button>
        </div>
      </section>
       
      <section className="m-auto w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
      <div className="flex max-sm:ml-4">
        <div className="bg-[#DB4444] border-none rounded h-[3rem] w-[1.55rem] mr-5"></div>
        <div className="text-[#DB4444] font-medium flex items-center">Our Products</div>
      </div>
      <div>
      <h1 className=" max-sm:ml-4 text-2xl font-semibold tracking-wider mt-5">New Arrival</h1>
      </div>

      <div className="md:grid grid-cols-4 grid-rows-2 w-full md:h-[700px] xl:gap-6 sm:gap-4 gap-3 py-10 text-[#FAFAFA]">
        <div className="col-span-2 row-span-2 bg-black pt-4 relative md:w-full md:h-full w-full h-96">
          <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3">
            <h1 className="text-3xl font-medium">PlayStation 5</h1>
            <span>Black and White version of the PS5<br /> coming out on sale.</span>
            <span className="border-b font-medium w-fit">Shop Now</span>
          </div>
          <Image
                alt="Saaddarbari"
                width="600"
                height="600"
                src="/ps5.png"
              />
        </div>
        <div className="col-span-2 row-span-1 bg-black pt-4 relative md:w-full md:h-full w-full h-96">
          <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3">
            <h1 className="text-3xl font-medium">Women&#39;s Collections</h1>
            <span>Featured woman collections that <br />give you another vibe.</span>
            <span className="border-b font-medium w-fit">Shop Now</span>
          </div>
          <Image
                alt="Saaddarbari"
                width="432"
                height="286"
                src="/attractive-woman-wearing-hat-posing-black-background 1.png"
                className="relative left-44 top-0 max-sm:left-10"
              />
        </div>
        <div className="col-span-1 row-span-1 bg-black pt-4 relative md:w-full md:h-full w-full h-96">
          <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3">
            <h1 className="text-3xl font-medium">Speakers</h1>
            <span>Amazon wireless speakers</span>
            <span className="border-b font-medium w-fit">Shop Now</span>
          </div>
          <Image
                alt="Saaddarbari"
                width="190"
                height="221"
                src="/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                className="relative left-20 top-3"

              />
        </div>
        <div className="col-span-1 row-span-1 bg-black pt-4 relative md:w-full md:h-full w-full h-96">
          <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3">
            <h1 className="text-3xl font-medium">Perfume</h1>
            <span>GUCCI INTENSE OUD EDP</span>
            <span className="border-b font-medium w-fit">Shop Now</span>
          </div>
          <Image
                alt="Saaddarbari"
                width="201"
                height="203"
                src="/652e82cd70aa6522dd785109a455904c.png"
                className="relative left-20 top-3"
              />
        </div>
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