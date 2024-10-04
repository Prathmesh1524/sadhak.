import Cards from "@/Components/Cards";
import FloatingCards from "@/Components/FlotingCards";
import Heros from "@/Components/Heros";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
          <h1 className=" pt-56 flex text-4xl font-extrabold justify-start pl-32 "> Find Your Dream Job </h1>
          <h2 className="pl-32">Connecting Talent to Opportunities</h2>
   </div>
{/*    
   <div class=" p-4 rounded-xl">
  <div class="text-gray-500 font-poppins font-medium text-lg h-200 p-2.5 flex rounded-md">
    <p className="pt-36 pl-4">Talent</p> 
    <div class="relative overflow-hidden pt-36">
      <span class="block h-full pl-1.5 text-purple-400 animate-spin-loader">buttons</span>
      <span class="block h-full pl-1.5 text-purple-400 animate-spin-loader">forms</span>
      <span class="block h-full pl-1.5 text-purple-400 animate-spin-loader">switches</span>
      <span class="block h-full pl-1.5 text-purple-400 animate-spin-loader">cards</span>
      <span class="block h-full pl-1.5 text-purple-400 animate-spin-loader">buttons</span>
    </div>
  </div>
</div> */}




        <div className="container relative flex justify-end items-end transition-all duration-500 ease-in-out pt-20 hover:gap-20">
          
          <div  data-text="Meet US"
            style={{ "--r": "-15" }}
            className="bg-neutral-300 glass relative w-52 h-72 bg-gradient-to-b from-[#fff2] to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-lg mx-[-45px] backdrop-blur-lg transform rotate-[calc(var(--r)*1deg)] hover:rotate-0 hover:translate-x-[-30px]">
            <div className=" flex justify-center items-center">
              Find the live Jobs and Get you hired
            </div>
          </div>

          <div
            data-text="Code"
            style={{ "--r": "5" }}
            className="bg-slate-300 glass relative w-52 h-72 bg-gradient-to-b from-[#fff2] to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-lg mx-[-45px] backdrop-blur-lg transform rotate-[calc(var(--r)*1deg)] hover:rotate-0 hover:translate-x-[30px]">
            <div className="">
              BOOST YOUR PREPRATION
            </div>
          </div>

          <div
            data-text="Earn"
            style={{ "--r": "25" }}
            className="glass relative w-52 h-72 bg-gradient-to-b from-[#fff2] to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-lg mx-[-45px] backdrop-blur-lg transform rotate-[calc(var(--r)*1deg)] hover:rotate-0 hover:translate-x-[60px]"
          >
            Connect the Recuiters
          </div>
        </div>
     
        <FloatingCards />
        <div className="flex">
          <Cards/>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Testimonials />
        <Heros />
      </div>
    </>
  );
}