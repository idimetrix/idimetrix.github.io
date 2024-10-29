import { FC, HTMLAttributes } from "react";
import { Sora } from "next/font/google";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { WEBSITE } from "@/constants";
import { cn } from "@/utils";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

type Props = HTMLAttributes<HTMLDivElement>;

export const Layout: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <main
      className={cn(
        `page bg-site text-white bg-cover bg-no-repeat font-sora relative`,
        sora.variable,
        className,
      )}
      {...rest}
    >
      <Head>
        <title>{`${WEBSITE.name} | ${WEBSITE.tagline}`}</title>
        <meta name="description" content={WEBSITE.description} />
        <meta name="keywords" content={WEBSITE.keywords.join(", ")} />
        <meta name="author" content={WEBSITE.author} />
        <meta name="theme-color" content={WEBSITE.color} />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {children}
    </main>
  );
};
