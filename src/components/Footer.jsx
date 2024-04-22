import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" mt-0 sm:mt-[-2%] bg-[#ffad2d] pb-10 sm:mb-0 sm:bg-transparent " id="contact">
      <div className=" container-wrapper relative sm:bg-transparent ">
        <img src="images/foot-img.png" alt="" className=" h-full hidden sm:block" />

        <div className=" relative sm:absolute top-10 sm:top-32  px-[8%] mx-auto left-0 right-0 ">
          <div className=" flex justify-between items-center flex-col sm:flex-row">
            <div>
              <img src="images/foot.png" alt="" className=" h-[30px] sm:h-[110px] my-2 sm:my-8 sm:mx-0 mx-auto"  />

              <div className=" flex items-center gap-4 text-white mb-6 ml-5">
              {/* <a
                  href="http://twitter.com/bonked420"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitterX />
                </a>
             
           

                <a
                  href="https://t.me/bonked420" target="_blank"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a> */}
              </div>

            <p>Copyright 2024 Bonked420  All Rights Reserved.</p>
            </div>

            <div className=" mt-[5%]">
              <h1 className=" text-lg sm:text-3xl font-bold mb-4 text-center sm:text-start">
                Don't miss our updates!
              </h1>
              <div className="flex items-center justify-between gap-8 bg-white border-[#000] border-2 rounded-lg px-2 py-2 w-[300px] mx-auto  sm:w-auto">
                <input type="text" />
                <button className=" text-xl bg-black text-white p-2 rounded-md">
                  <IoSend />
                </button>
              </div>

              <div className=" pt-[15%] grid sm:grid-cols-4 grid-cols-2 items-center gap-2 sm:gap-6  sm:justify-normal justify-center mx-auto ">
                <a
                  href="#about"
                  className="text-black font-bold text-lg block "
                >
                  About
                </a>
                <a
                  href="#col"
                  className="text-black font-bold text-lg block "
                >
                 Features
                </a>
             
                <a
                  href="#contact"
                  className="text-black font-bold text-lg "
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
