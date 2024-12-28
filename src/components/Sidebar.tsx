"use client";

import {
  HomeIcon,
  UserIcon,
  CogIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: HomeIcon },

  { href: "/dashboard/events", label: "Events", icon: CalendarDaysIcon },
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
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (response.ok) {
      router.push("/login");
    } else {
      console.error("Failed to logout");
    }
  };

  return (
    <div className='w-64 bg-white border-r shadow-lg'>
      <h1 className='text-xl font-semibold p-6 bg-foreground text-white'>
        Thrive Family Chapel
      </h1>
      <nav>
        <ul>
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
          <li
            className='p-4 hover:bg-gray-700 flex items-center cursor-pointer'
            onClick={handleLogout}
          >
            <ArrowRightOnRectangleIcon className='h-5 w-5 mr-2' />
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
}
