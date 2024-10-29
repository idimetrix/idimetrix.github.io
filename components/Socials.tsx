import Link from "next/link";
import { SOCIALS } from "@/constants";
import { Social } from "@/types";
import { cn } from "@/utils";
import {FC, HTMLAttributes} from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export const Socials: FC<Props> = ({className, ...rest}) => {
  return (
    <div className={cn("flex items-center gap-5 text-2xl", className)} {...rest}>
      {Object.values(SOCIALS)
        .filter((social) => social.link)
        .map((social) => (
          <Link
            key={social.name}
            title={social.title}
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              social.name === Social.GitHub
                ? "bg-accent rounded-full p-[5px] hover:text-white"
                : "hover:text-accent",
              "transition-all duration-300 hover:scale-110",
            )}
          >
            <social.icon aria-hidden />
            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
    </div>
  );
};
