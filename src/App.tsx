import { useState } from "react";
import { motion } from "motion/react";

export default function App() {
  const [isHoveredChat, setIsHoveredChat] = useState(false);
  const [isHoveredWork, setIsHoveredWork] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-black font-sans overflow-x-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>
        {/* 50% Black Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center text-center gap-[40px] max-w-4xl">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-5 py-2 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <p className="text-[12px] md:text-[13px] font-medium text-white/60 tracking-wider uppercase">
              Sacrificed a Chicken, It Works Now !
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[48px] md:text-[72px] font-medium leading-[1.1] max-w-[800px] bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)"
            }}
          >
            Sandev Dullewa
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-[18px] font-normal text-white/70 max-w-[750px] mt-[-16px] leading-relaxed"
          >
            Senior Software Engineer | Open Source Enthusiast | Laravel Artisan
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Let's Chat Button */}
            <motion.a 
              href="mailto:devsandinator@gmail.com"
              className="relative group block"
              onMouseEnter={() => setIsHoveredChat(true)}
              onMouseLeave={() => setIsHoveredChat(false)}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="relative p-[2px] rounded-full overflow-hidden bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {/* Shooting Star Border Effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square"
                  style={{
                    background: isHoveredChat 
                      ? "conic-gradient(from 0deg, transparent 40%, #93c5fd 50%, transparent 60%)" 
                      : "conic-gradient(from 0deg, transparent 40%, white 50%, transparent 60%)"
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ 
                    duration: isHoveredChat ? 1.5 : 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                <div className="relative bg-white rounded-full px-[32px] py-[12px] overflow-hidden">
                  {/* Static Glow Effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[12px] bg-gradient-to-b from-white/60 to-transparent blur-[4px]" />
                  
                  {/* Animated Shine Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -skew-x-12 translate-x-[-150%]"
                    whileHover={{ translateX: ["150%", "-150%"] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  
                  <span className="text-black text-[15px] font-base relative z-10">Contact Me</span>
                </div>
              </div>
            </motion.a>

            {/* My Work Button */}
            <motion.a 
              href="https://linktr.ee/sandevdullewa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block"
              onMouseEnter={() => setIsHoveredWork(true)}
              onMouseLeave={() => setIsHoveredWork(false)}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="relative p-[2px] rounded-full overflow-hidden bg-white/5">
                {/* Shooting Star Border Effect - Desynchronized */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square"
                  style={{
                    background: isHoveredWork 
                      ? "conic-gradient(from 0deg, transparent 40%, white 50%, transparent 60%)" 
                      : "conic-gradient(from 0deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)"
                  }}
                  animate={{ rotate: [120, 480] }}
                  transition={{ 
                    duration: isHoveredWork ? 1.8 : 4.5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />

                <div className="relative bg-black/90 backdrop-blur-xl rounded-full px-[32px] py-[12px] overflow-hidden flex justify-center items-center gap-2">
                  {/* Animated Shine Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-150%]"
                    whileHover={{ translateX: ["150%", "-150%"] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  
                  <span className="text-white text-[15px] font-base relative z-10">View Portfolio</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
