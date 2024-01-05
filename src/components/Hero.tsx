export const Hero = () => {
  return (
    <section className="bg-white w-screen min-h-screen rounded-br-3xl rounded-bl-3xl z-20 -mb-8 flex items-center justify-center">
      <div className="max-w-[1440px] relative">
          <div className="font-bold text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[200px]">
              <span className="block">Your cards.</span>
              <span className="block mt-60 sm:mt-48 md:mt-48 lg:mt-52 xl:mt-56 2xl:mt-60 bg-gradient-to-t from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Your app.</span>
          </div>
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 sm:left-1/4 md:left-1/3 lg:left-2/5 xl:left-1/3">
              <img src="/banking-hero-section.png" alt="hero-image" className=" sm:w-56 md:w-72 lg:w-80 xl:w-96 "/>
          </div>
      </div>
    </section>


  );
};
