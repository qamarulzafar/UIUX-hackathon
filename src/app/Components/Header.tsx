import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TbUserExclamation } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-14 bg-[#FBEBB5] flex justify-evenly items-center px-4 md:px-10">
      {/* Logo */}
      <div></div>

      {/* Navigation Links */}
      <nav className="flex gap-4 md:gap-8 font-sans text-base">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center">
        {/* On md and larger screens, show icons */}
        <div className="hidden md:flex gap-6 text-2xl">
          <TbUserExclamation />
          <IoIosSearch />
          <CiHeart />
          <IoCartOutline />
        </div>

        {/* On smaller screens, show sidebar trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="text-2xl">☰</button> {/* Hamburger Icon */}
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              {/* Icons with Labels in the Sidebar */}
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-center gap-4">
                  <TbUserExclamation className="text-2xl" />
                  <span className="text-lg">User</span>
                </div>
                <div className="flex items-center gap-4">
                  <IoIosSearch className="text-2xl" />
                  <span className="text-lg">Search</span>
                </div>
                <div className="flex items-center gap-4">
                  <CiHeart className="text-2xl" />
                  <span className="text-lg">Favorites</span>
                </div>
                <div className="flex items-center gap-4">
                  <IoCartOutline className="text-2xl" />
                  <span className="text-lg">Cart</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
