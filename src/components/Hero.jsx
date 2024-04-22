import React from "react";

function Hero() {
  return (
    <section className="hero-main relative overflow-x-hidden bg-[#ffbe2d] ">
  
      <div className=" container-wrapper pt-[25%] sm:pt-[6%] ">
        <div>
          <img src="images/hero-txt.png" alt="" className=" mx-auto h-auto sm:h-[300px] w-auto my-[1.5%]" />

         
        </div>
      </div>
      <img src="images/hero.png" alt="" className=" mx-auto h-auto sm:h-[350px]" />
      {/* <img src="images/hero-btn.png" alt="" className="  h-[30px] sm:h-[80px] " /> */}
      <a href="/" className=" mx-auto absolute left-0 right-0 top-[74%] sm:top-[70%] text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[200px] text-center font-bold uppercase"> DexTools</a>
    </section>
  );
}

export default Hero;
