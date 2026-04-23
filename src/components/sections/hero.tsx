import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

 <BlurIn delay={0.7}>
  <h1
    className={cn(
      "leading-tight font-bold text-left text-white",
      "text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
    )}
  >
    SURYAKIRAN
  </h1>
</BlurIn>

<BlurIn delay={1}>
  <h2
    className={cn(
      "leading-tight font-bold text-left text-blue-400",
      "text-1xl md:text-2xl lg:text-3xl xl:text-4xl"
    )}
  >
    Full Stack Developer | React & Django
  </h2>
</BlurIn>
<BlurIn delay={1.2}>
  <p
    className={cn(
      "mt-4 text-slate-300 dark:text-slate-300 text-base md:text-lg max-w-lg leading-relaxed"
    )}
  >
    Full Stack Developer focused on building scalable, production-ready web applications with clean and responsive user interfaces.
  </p>
</BlurIn>

<BlurIn delay={1.4}>
  <p
    className={cn(
      "mt-3 text-slate-400 dark:text-slate-400 text-sm md:text-base max-w-lg leading-relaxed"
    )}
  >
    I specialize in React, Angular, and Django, with hands-on experience developing real-world systems like billing platforms and role-based applications, with strong backend integration.
  </p>
</BlurIn>
              </div>

              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href={"/assets/resume.pdf"}
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>

                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Let’s build something great</p>
                    </TooltipContent>
                  </Tooltip>

                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;