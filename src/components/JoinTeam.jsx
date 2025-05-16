import lion from "@/assets/lion2.813c8d36.webp";

const JoinTeam = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-[100px]">
      {/* Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.1] uppercase mb-6">
          Wanna <br /> Join <br /> Trionn?
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl  mt-4 lg:mt-8">
          We are always looking for the best
          <br className="hidden md:block" /> talent in the digital jungle.
        </p>
      </div>

      {/* Lion Image Container */}
      <div className="w-full h-[300] min-h-[400px] relative mt-auto pt-[150px]">
        <img 
          src={lion} 
          alt="Lion Logo" 
          className="w-full h-full object-cover object-center"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default JoinTeam;