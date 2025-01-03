"use client";

import { useUser } from "@clerk/nextjs";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeButton = () => {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <div className="mt-10 text-center flex items-center justify-center">
          <Link
            href={"/dashboard"}
            className="px-8 py-3 text-white rounded-lg text-lg font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center gap-2 "
          >
            <span>Start Creating Now</span>
            <MoveRight />
          </Link>
        </div>
      ) : (
        <div className="mt-10 text-center flex items-center justify-center">
          <Link
            href={"/dashboard"}
            className="px-8 py-3 text-white rounded-lg text-lg font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center gap-2 "
          >
            <span>Start Creating Now</span>
            <MoveRight />
          </Link>
        </div>
      )}
    </>
  );
};

export default HomeButton;
