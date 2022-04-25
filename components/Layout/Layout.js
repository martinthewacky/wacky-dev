import Head from "next/head";
import { useState } from "react";
import MenuAlt4Icon from "@heroicons/react/solid/MenuAlt4Icon";
import MoonIcon from "@heroicons/react/solid/MoonIcon";
import SunIcon from "@heroicons/react/solid/SunIcon";
import Link from "next/link";

const Layout = ({ children, home }) => {
  const [navMenu, setNavMenu] = useState(true);
  const showNavMenu = () => {
    setNavMenu(true);
    console.log("Nav menu opened");
  };
  const hideNavMenu = () => {
    setNavMenu(false);
    console.log("Nav menu closed");
  };
  return (
    <div className="w-full text-neutral-800">
      <Head>
        <link rel="icon" href="/wacky-dev-logo.svg" />
      </Head>
      <header className="w-full h-16 px-3 border-b border-b-neutral-400 bg-white/80 sticky top-0 backdrop-blur">
        <div className="w-full h-full flex justify-between items-center">
          <div className="">
            {home ? (
              <img
                src="/wacky-dev-logo.svg"
                className="h-10 aspect-square"
                title="Wacky Dev"
              />
            ) : (
              <Link href="/">
                <a>
                  <img
                    src="/wacky-dev-logo.svg"
                    className="h-10 aspect-square"
                    title="Go Back Home"
                  />
                </a>
              </Link>
            )}
          </div>
          <div className="">
            <button
              className="p-4 flex justify-center items-center rounded-xl hover:bg-neutral-800/10"
              onClick={showNavMenu}
            >
              <MenuAlt4Icon width="24" height="24" />
            </button>
          </div>
        </div>
      </header>
      <main className="w-full pb-16">{children}</main>
      <footer className="w-full h-16 px-3 border-t border-t-neutral-400"></footer>
      <style global jsx>{`
        * {
          transition: 0.4s ease;
        }
      `}</style>
    </div>
  );
};

export default Layout;
