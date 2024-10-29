import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import { Logotype } from "@/components/Logotype";
import { Socials } from "@/components/Socials";
import { cn } from "@/utils";

type Props = HTMLAttributes<HTMLDivElement>;

export const Header: FC<Props> = ({ className, ...rest }) => {
  return (
    <header
      className={cn(
        "absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]",
        className,
      )}
      {...rest}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href="/">
            <Logotype />
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};
