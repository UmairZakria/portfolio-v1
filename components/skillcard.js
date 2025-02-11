const Skillcard = ({ skill }) => {
    return (
      <div
        className="relative bg-[#242422] size-[120px] md:size-[180px] py-4 flex justify-center gap-4 flex-col items-center rounded-full 
        shadow-[inset_0_0px_20px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-500 
        hover:shadow-[inset_0_0px_20px_rgba(0,0,0,0.8),_0_0_25px_#4CAF50]"
      >
        {/* Border Animation Elements */}
        <div className="absolute -inset-1 border-b-2 border-t-4 border-lok rounded-full animate-spinslow" />
        <div className="absolute inset-2 border-l-4 border-r-2 border-blue-400 rounded-full animate-spinslow" />
  
        <img className="size-[30px] md:size-[48px]" src={skill.icon} alt={skill.name} />
        <h2 className="font-normal md:font-semibold md:text-lg">{skill.name}</h2>
      </div>
    );
  };

export default Skillcard