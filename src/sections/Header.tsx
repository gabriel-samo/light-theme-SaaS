import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import ArrowRightIcon from "@/assets/arrow-right.svg";

import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRightIcon className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Customers</a>
              <a href="">Updates</a>
              <a href="">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-medium inline-flex items-center justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
