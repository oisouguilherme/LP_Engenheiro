"use client";
import Image from "next/image";
import Logo from "../../assets/logo.png";

import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      id="Nav"
      className="z-50 py-1 px-4 bg-black bg-opacity-80 text-white"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer w-36">
          <LinkScroll to="/">
            <Image src={Logo} alt="Logo Rafaell Costa Amaral" />
          </LinkScroll>
        </div>
        <div className="lg:hidden">
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-0 right-0 bottom-0 bg-black z-40 w-64 transform transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="p-8 space-y-4 text-2xl">
              <li className="cursor-pointer text-white duration-300">
                <Link href="/">Página Inicial</Link>
              </li>
              <li className="cursor-pointer text-white duration-300">
                <LinkScroll to="sobre" smooth={true}>
                  Sobre
                </LinkScroll>
              </li>
              <li className="cursor-pointer text-white duration-300">
                <LinkScroll to="ComoFunciona" smooth={true}>
                  Como funciona
                </LinkScroll>
              </li>
              <li className="cursor-pointer text-white duration-300">
                <LinkScroll to="Projetos" smooth={true}>
                  Projetos
                </LinkScroll>
              </li>
              <li className="cursor-pointer text-white duration-300">
                <Link href="#">Orçamento</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-12 text-center items-center uppercase">
            <li className="cursor-pointer hover:text-orange-500 duration-300">
              <LinkScroll to="/">Página Inicial</LinkScroll>
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300">
              <LinkScroll to="sobre" smooth={true}>
                Sobre
              </LinkScroll>
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300">
              <LinkScroll to="ComoFunciona" smooth={true}>
                Como funciona
              </LinkScroll>
            </li>
            <li className="cursor-pointer  hover:text-orange-500 duration-300">
              <LinkScroll to="Projetos" smooth={true}>
                Projetos
              </LinkScroll>
            </li>
            <li className="bg-laranja-400 hover:bg-orange-500 duration-300 text-white px-8 py-2">
              <Link href="#">Orçamento</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger lg:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
      </div>
    </section>
  );
}
