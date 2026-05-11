"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const MainNav = ({ data }) => {
    if (!data || data.length === 0) {
        return <span className="text-sm text-muted-foreground">Kategori yok</span>;
    }
    const pathname = usePathname();
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));
    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className={cn("text-sm font-medium transiton-colors hover:text-black", route.active ? "text-black" : "text-neutral-500")}>
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};

export default MainNav;
