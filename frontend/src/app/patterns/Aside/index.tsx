import React from "react";
import { AsideStyle } from "./Aside.style";
import Link from "next/link";
import { BsGrid, BsCalendar4 } from "react-icons/bs";
import { IoDocumentTextOutline, IoAnalyticsOutline } from "react-icons/io5";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Aside = () => {
  return (
    <aside id="aside" className={AsideStyle.container}>
      <div className="h-[60px] bg-purple-300 "></div>
      <nav>
        <ul className={AsideStyle.nav}>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <BsGrid className={AsideStyle.icon} />
              Overview
            </Link>
          </li>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <BsCalendar4 className={AsideStyle.icon} />
              Tasks
            </Link>
          </li>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <IoDocumentTextOutline className={AsideStyle.icon} />
              Documents
            </Link>
          </li>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <MdOutlineStickyNote2 className={AsideStyle.icon} />
              Notes
            </Link>
          </li>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <IoAnalyticsOutline className={AsideStyle.icon} />
              Output
            </Link>
          </li>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <BiSupport className={AsideStyle.icon} />
              Support
            </Link>
          </li>
        </ul>
      </nav>
      <span className={AsideStyle.div}></span>
      <nav>
        <ul className={AsideStyle.nav}>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <span
                className={`${AsideStyle.circle} ${"bg-yellow-400"}`}
              ></span>
              Projects
            </Link>
          </li>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <span className={`${AsideStyle.circle} ${"bg-red-400"}`}></span>
              Business
            </Link>
          </li>
          <li className={AsideStyle.item}>
            <Link className={AsideStyle.link} href={""}>
              <span className={`${AsideStyle.circle} ${"bg-green-400"}`}></span>
              Personal
            </Link>
          </li>
          <li className={AsideStyle.item}>
            <button className={AsideStyle.link}>
              <IoMdAdd className={AsideStyle.icon} />
              Add new
            </button>
          </li>
        </ul>
      </nav>
      <span className={AsideStyle.div}></span>
      <nav>
        <ul className={AsideStyle.navNetwork}>
          <li>
            <Link href={"https://www.instagram.com/dev.isaias/"} target="_blank">
              <BsInstagram className={AsideStyle.icon} />
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/isaiasramosdeoliveira"} target="_blank">
              <BsGithub className={AsideStyle.icon} />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/isa%C3%ADas-ramos-ab015a248"} target="_blank"
            >
              <BsLinkedin className={AsideStyle.icon} />
            </Link>
          </li>
        </ul>
      </nav>
      <span className={AsideStyle.signature}>Isaías Ramos - 2023</span>
    </aside>
  );
};

export default Aside;
