import React from "react";
import { HeaderStyle } from "./Header.style";
import { BiSearch } from "react-icons/bi";
import { RiNotification2Line } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={HeaderStyle.container}>
      <div
        className={
          HeaderStyle.div +
          `
          w-[60px]
          sm:w-auto
        `
        }
      >
        <button className={HeaderStyle.btn + `sm:hidden`}>
          <HiMenuAlt1 className={HeaderStyle.iconMenu} />
        </button>
        <div className={HeaderStyle.search}>
          <button className={HeaderStyle.btn}>
            <BiSearch className={HeaderStyle.iconSearch} />
          </button>
          <input
            id="search"
            type="text"
            placeholder="Search"
            className={HeaderStyle.input}
          />
        </div>
      </div>
      <div className={HeaderStyle.div}>
        <Link
          href=""
          className={
            HeaderStyle.div +
            `
            w-[70px]
            sm:w-auto
          `}
        >
          <Image
            src="/user.png"
            width={36}
            height={36}
            alt="Foto de perfil"
            className="rounded-full"
          />
          <p className="sm:block hidden">Hello, Isaías</p>
        </Link>
        <RiNotification2Line className={HeaderStyle.icon} />
      </div>
    </header>
  );
};

export default Header;
