import { Button } from "panelui-web/button";

export default function Home() {
  return (
    <div
      className={
        "flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      }
    >
      <main
        className={
          "flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"
        }
      >
        <Button>Publish</Button>
        <Button variant="outline">Preview</Button>
        <Button variant="ghost" size="icon" aria-label="Close"></Button>
        <div
          className={
            "flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"
          }
        >
          <h1
            className={
              "max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
            }
          >
            GrindGuide
          </h1>
          <p
            className={
              "max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            }
          >
            Check out the{" "}
            <a
              href={"/privacy"}
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Privacy Policy
            </a>
            . For support email{" "}
            <a
              href={"mailto:topher@bessaapps.com"}
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              topher@bessaapps.com
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          {/*<a*/}
          {/*  className={*/}
          {/*    "flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"*/}
          {/*  }*/}
          {/*  href={"mailto:topher@bessaapps.com"}*/}
          {/*>*/}
          {/*  Download*/}
          {/*</a>*/}
          <a
            className={
              "flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            }
            href={"mailto:topher@bessaapps.com"}
          >
            Get Listed
          </a>
        </div>
      </main>
    </div>
  );
}
