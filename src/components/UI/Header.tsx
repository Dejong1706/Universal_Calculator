"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  // const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // const openJoinModal = () => setIsJoinModalOpen(true);
  // const closeJoinModal = () => setIsJoinModalOpen(false);

  // const openLoginModal = () => setIsLoginModalOpen(true);
  // const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="w-full h-[10vh] flex justify-between items-center border-b-2 border-[#00C897]">
      <div className="ml-[3rem]">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="mr-[3rem]">
        <ul className="flex font-bold">
          <li className="mr-6 hover:text-[#00C897] cursor-pointer">
            <Link href="/">환율계산기</Link>
          </li>
          <li className="mr-6 hover:text-[#00C897] cursor-pointer">
            <Link href="/BMI">BMI계산기</Link>
          </li>
          <li className="hover:text-[#00C897] cursor-pointer">
            <Link href="/FCfee">피파수수료 계산기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
