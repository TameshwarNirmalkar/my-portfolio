"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo } from "react";

interface ActiveNavI {
  nav_label: string;
  nav_link: string;
  css_name?: string;
}

const ActiveInactiveLink: React.FC<ActiveNavI> = ({ nav_label, nav_link }) => {
  const pathname = usePathname();
  const isActive = pathname === nav_link || (pathname.startsWith(nav_link) && nav_link !== "/");
  return (
    <Link href={nav_link} className={`${isActive ? "text-orange-400" : "text-white"}`}>
      {nav_label}
    </Link>
  );
};

export default memo(ActiveInactiveLink);
