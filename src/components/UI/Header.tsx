"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="w-full h-[10vh] flex justify-between items-center border-b-2 border-[#FF395B]">
      <div className="ml-[3rem]">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </div>
  );
}
