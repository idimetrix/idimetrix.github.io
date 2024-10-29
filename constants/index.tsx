import type { IconType } from "react-icons";
import {
  RiCalendarLine,
  RiEarthLine,
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiNpmjsLine,
  RiPhoneLine,
  RiTelegramLine,
  RiTwitterLine,
} from "react-icons/ri";
import { Social } from "@/types";

export const WEBSITE = {
  name: "Dmitrii Selikhov",
  author: "Dmitrii Selikhov",
  tagline: "CTO, Software Architect, Technical Lead, 3X Founder.",
  description:
    "CTO, Software Architect, Technical Lead, 3X Founder. Linking companies with top tech talents.",
  keywords: [""],
  about: "",
};

export const SOCIALS: Record<
  Social,
  { name: string; title: string; icon: IconType; link: string }
> = {
  [Social.Email]: {
    name: "Email",
    title: `Email ${WEBSITE.author}`,
    icon: RiMailLine,
    link: "mailto:dmitrii.selikhov@gmail.com",
  },
  [Social.Phone]: {
    name: "Phone",
    title: `Call ${WEBSITE.author}`,
    icon: RiPhoneLine,
    link: "tel:+18299576440",
  },
  [Social.Facebook]: {
    name: "Facebook",
    title: `${WEBSITE.author} on Facebook`,
    icon: RiFacebookLine,
    link: "",
  },
  [Social.Instagram]: {
    name: "Instagram",
    title: `${WEBSITE.author} on Instagram`,
    icon: RiInstagramLine,
    link: "",
  },
  [Social.Twitter]: {
    name: "Twitter",
    title: `${WEBSITE.author} on Twitter`,
    icon: RiTwitterLine,
    link: "https://x.com/idimetrix",
  },
  [Social.LinkedIn]: {
    name: "LinkedIn",
    title: `${WEBSITE.author} on LinkedIn`,
    icon: RiLinkedinLine,
    link: "https://www.linkedin.com/in/dimetrix",
  },
  [Social.Telegram]: {
    name: "Telegram",
    title: `${WEBSITE.author} on Telegram`,
    icon: RiTelegramLine,
    link: "https://t.me/dmitrii_selikhov",
  },
  [Social.Npm]: {
    name: "NPM",
    title: `${WEBSITE.author} on NPM`,
    icon: RiNpmjsLine,
    link: "https://www.npmjs.com/~dimetrix",
  },
  [Social.Website]: {
    name: "Website",
    title: `Visit ${WEBSITE.author}’s Website`,
    icon: RiEarthLine,
    link: "https://dmitrii-selikhov.vercel.app",
  },
  [Social.Calendly]: {
    name: "Calendly",
    title: `Schedule with ${WEBSITE.author} on Calendly`,
    icon: RiCalendarLine,
    link: "https://calendly.com/dmitry-selikhov",
  },
  [Social.GitHub]: {
    name: "GitHub",
    title: `${WEBSITE.author} on GitHub`,
    icon: RiGithubLine,
    link: "https://github.com/idimetrix",
  },
};

export * from "./variants";
