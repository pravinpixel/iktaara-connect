import * as React from "react";
interface TitleProps {
  className: string;
  secondaryClass: string;
}

export default function Title(props: TitleProps) {
  const { className, secondaryClass } = props;

  // const textClasses = `text-${color} font-${fontsize} font-${fontweight} ${lineheight}`;
  return (
    <div>
      <p className={className}>Violin Repairist in Chennai</p>
      <p className={secondaryClass}>120 Reparist available in Chennai</p>
    </div>
  );
}
