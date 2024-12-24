"use client";

import {
  HomeIcon,
  UserIcon,
  CogIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
  { href: "/dashboard/members", label: "Members", icon: UserIcon },
  { href: "/dashboard/collections", label: "Collections", icon: BanknotesIcon },
  {
    href: "/dashboard/approvals",
    label: "Approvals",
    icon: ClipboardDocumentCheckIcon,
  },
  { href: "/dashboard/settings", label: "Settings", icon: CogIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='w-64 bg-white border-r shadow-lg'>
      <h1 className='text-xl font-semibold p-6 bg-foreground text-white'>
        Thrive Family Chapel
      </h1>
      <nav>
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx("flex items-center p-4 hover:bg-gray-100", {
              "bg-background text-primary": pathname === href,
            })}
          >
            <Icon className='w-6 h-6 mr-3' />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
