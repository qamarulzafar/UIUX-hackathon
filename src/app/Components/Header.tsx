import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TbUserExclamation } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";


const Header = () => {
  return (
    <header className=" w-full h-16 flex justify-evenly items-center px-4 md:px-10">
      {/* Logo */}
      <div></div>

      {/* Navigation Links */}
      <nav className="flex gap-4 md:gap-8 font-sans text-base">
        <Link href="/">Home</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center">
        {/* On md and larger screens, show icons */}
        <div className="hidden md:flex gap-6 text-2xl">
          <Link href='/UserAccount'><TbUserExclamation /></Link>
          <IoIosSearch />
          <CiHeart />
          <Link href='/Cart'><IoCartOutline /></Link>
        </div>

        {/* On smaller screens, show sidebar trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="flex justify-center items-center mt-1">
              <div><FaBars /></div>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              {/* Icons with Labels in the Sidebar */}
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/UserAccount">
                  <div className="flex items-center gap-4 cursor-pointer">
                    <TbUserExclamation className="text-2xl" />
                    <span className="text-lg">User</span>
                  </div>
                </Link>
                <div className="flex items-center gap-4">
                  <IoIosSearch className="text-2xl" />
                  <span className="text-lg">Search</span>
                </div>
                <div className="flex items-center gap-4">
                  <CiHeart className="text-2xl" />
                  <span className="text-lg">Favorites</span>
                </div>
                <Link href='/Cart'>
                <div className="flex items-center gap-4">
                  <IoCartOutline className="text-2xl" />
                  <span className="text-lg">Cart</span>
                </div>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
