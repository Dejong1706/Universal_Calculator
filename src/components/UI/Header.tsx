"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import Link from "next/link";
import JoinModal from "./Modal/JoinModal";
import LoginModal from "./Modal/LoginModal";

export default function Header() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="w-full h-[4rem] flex justify-between items-center border-b-2 border-[#FF395B]">
      <div className="ml-[3rem]">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="w-[14rem] mr-[3rem] flex justify-around">
        <HeaderButton name="회원가입" onClick={openJoinModal} />
        <HeaderButton name="로그인" onClick={openLoginModal} />
      </div>
      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
}
