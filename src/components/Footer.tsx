"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-lightText text-slate-100">
      <Container className="grid grid-cols-6 gap-4">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Kernel Domain Inc.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsReddit />
              </span>
            </a>
          </div>
        </div>
        <div className="flex-col gap-y-4">
         </div>
         <div className="flex-col gap-y-4">
         </div>
         <div className="flex-col gap-y-4">
         </div>
         <div className="flex-col gap-y-4">
         </div>
        <div className="flex-col gap-y-4 justify-items-end"  >
          <p className="text-lg text-black">Links</p> 
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <Link href={"/team"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Team
              </li>
            </Link>
            <Link href={"/news"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Latest News
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
