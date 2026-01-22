"use client";

import { siteConfig } from "@/shared/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../model/nav-items";

export const Logo = () => {
    return (
        <Image src="/cookingBookIcon.png" alt={siteConfig.title} width={26} height={26} priority />
    );
};

export default function Header() {
    const pathname = usePathname();

    const getNavItems = () => {
        return navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
                <NavbarItem key={item.href}>
                    <Link
                        color="foreground"
                        href={item.href}
                        className={`${isActive ? "text-blue-500 font-semibold" : "text-foreground"} p-1 hover:text-blue-600 hover:border hover:border-blue-300 hover:rounded-md transition-colors transition-border duration-200`}
                    >
                        {item.label}
                    </Link>
                </NavbarItem>
            )

        })
    }

    return (
        <Navbar>
            <NavbarBrand>
                <Link href={"/"} className="flex items-center gap-1">
                    <Logo />
                    <p className="font-bold text-inherit">{siteConfig.title}</p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {getNavItems()}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Логин</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Регистрация
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
