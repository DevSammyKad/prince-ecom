import { cn } from "../../lib/utils";

const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[18rem] px-2 pb-8 grid-cols-2  lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2 dark:bg-blue-500 dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4",
        className
      )}
    >
      <div className="h-48 w-full overflow-hidden rounded-t-xl">{header}</div>
      <div className="flex-1 text-center transition duration-200">
        {icon && <div className="mb-2">{icon}</div>}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

export { BentoGrid, BentoGridItem };
