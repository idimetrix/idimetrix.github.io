import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

type Props = HTMLAttributes<HTMLDivElement>;

export const Logotype: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={cn("text-3xl", className)} {...rest}>
      <span className="font-bold">
        <span className="">[</span>
        <span className="">dmitrii</span>
        <span className="">]</span>
      </span>{" "}
      <span className="">selikhov</span>{" "}
      <span className="text-accent font-bold">.</span>
    </div>
  );
};
