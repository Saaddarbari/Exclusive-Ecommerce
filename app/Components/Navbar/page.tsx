"use client"

import Form from 'next/form'
import Link from "next/link";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  return (
   <nav className=" top-0 z-30 w-full print:hidden">
      <div className="m-auto flex h-10 w-[100%] items-end justify-between max-sm:flex max-sm:justify-normal md:h-16 mb-5 lg:w-[90%] xl:w-[1300px]">
        <div className="text_shadow font-bold text-black lg:block xl-lg:text-xl xl:text-2xl">
          <h1 className="ml-20 max-sm:mx-[1rem] max-sm:text-[18px] ">
           Exclusive
          </h1>
        </div>
      
          <ul className="cursor-pointer	 flex gap-9 font-[1rem] justify-center items-center text-black max-sm:hidden">
            <li className="hover:underline">
              <Link href="/">
              Home
              </Link>
              </li>
            <li className="hover:underline">
            <Link href="/Signup">
              Contact
              </Link>
              </li>
            <li className="hover:underline">
            <Link href="/About">
              About
              </Link>
              </li>
            <li className="hover:underline">
            <Link href="/Signup">
              Signup
              </Link>
              </li>
          </ul>
          
        <div className='flex gap-4 mr-14 max-sm:gap-0 max-sm:w-20'>
           <Form action="/search" style={{ position: 'relative', width: '300px' }}>
              {/* On submission, the input value will be appended to the URL, e.g. /search?query=abc */}
           <div className="flex gap-[5px] text-[24px]">
               <input name="query"  placeholder="What are you looking for?" 
                className="pt-[5px] pr-[40px] pb-[5px] pl-[15px] w-[300px]
                  bg-[#F5F5F5]
                rounded text-[16px] max-sm:w-[12rem]"
                /> 

               <button type="submit"  className='relative top-[20%] pointer right-[45px] text-[16px] max-sm:right-[35px]'>
                <FontAwesomeIcon icon={faSearch}/>
               </button>
               
              
           </div>
           </Form>
            <button className=' text-[18px]'>
                <FontAwesomeIcon icon={faRegularHeart}  />
               </button>
           <div style={{ position: 'relative',  color: '#333', cursor: 'pointer' ,display: 'flex',justifyContent:'center' ,alignItems:'center', fontSize: '18px' }}>
                <FontAwesomeIcon icon={faShoppingCart} onClick={() => setCartCount(cartCount + 1)} />
                 {cartCount > 0 && (
                  <span className='absolute top-[-8px] right-[-10px] bg-[#ff0000] rounded-2xl text-white px-2 py-1 text-[12px]'>
                    {cartCount}
                  </span>)}
           </div>
       </div>
       </div>
        
        
      <hr />
    </nav>
  );
}
 

   