import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4 gridContainer",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      "bentoCard group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "border border-cyan-500/20 hover:border-cyan-400/40",
      "transform-gpu transition-all duration-300",
      "after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:bg-gradient-to-t after:from-black after:to-transparent after:opacity-60",
      className
    )}
  >
    <div
      className={`bentoImgContainer absolute inset-0 overflow-hidden rounded-xl`}
    >
      {background}
      <div className={`bentoImgContainerForLight absolute inset-0  z-10`} />
    </div>

    <div className="pointer-events-none z-20 flex transform-gpu flex-col justify-end h-full p-6 transition-all duration-300">
      <div className="transform-gpu transition-all duration-300 group-hover:-translate-y-2">
        <Icon className="h-11 w-10 mb-4 transition-all duration-300 ease-in-out group-hover:scale-110 drop-shadow-lg" />
        <h3 className="text-xl font-semibold text-white bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-2">
          {name}
        </h3>
        <p className="text-slate-300 leading-relaxed text-sm">{description}</p>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#050505]-500/5" />
  </div>
);

export { BentoCard, BentoGrid };
