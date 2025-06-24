import { cn } from "@/lib/utils";
import {
  IconUsers,
  IconCode,
  IconShield,
  IconTrendingUp,
} from "@tabler/icons-react";
import styles from "@/styles/landingpage/InfoGrid.module.scss";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Build Your Tech Team",
      description:
        "Access top IT talent with flexible staffing solutions tailored to your business goals.",
      icon: <IconUsers />,
    },
    {
      title: "Develop Your Software",
      description:
        "Custom software and app development that drives efficiency and innovation.",
      icon: <IconCode />,
    },
    {
      title: "Secure Your Infrastructure",
      description:
        "End-to-end IT support, cloud services, and cybersecurity to protect and scale your business.",
      icon: <IconShield />,
    },
    {
      title: "Transform Your Business",
      description: "Strategic IT consulting and digital transformation services that future-proof your operations.",
      icon: <IconTrendingUp />,
    },
  ];
  return (
    <div className={`grid grid-cols-2 relative z-10 py-10 max-w-6xl mx-auto ${styles.infoContainer}`}>
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col  p-10 relative group/feature",
        // Plus-shaped border: right border for left column (index 0, 2)
        (index === 0 || index === 2) && "border-r border-neutral-300 dark:border-neutral-700",
        // Plus-shaped border: bottom border for top row (index 0, 1)
        (index === 0 || index === 1) && "border-b border-neutral-300 dark:border-neutral-700"
      )}>
      {/* Hover gradient effect for top row */}
      {(index === 0 || index === 1) && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {/* Hover gradient effect for bottom row */}
      {(index === 2 || index === 3) && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold relative mb-2  z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className={`group-hover/feature:translate-x-2 transition duration-200 inline-block ${styles.cardTitle}`}>
          {title}
        </span>
      </div>
      <p
        className={`text-sm text-neutral-600 dark:text-neutral-300 relative z-10 px-10 ${styles.description} `}>
        {description}
      </p>
    </div>
  );
};
