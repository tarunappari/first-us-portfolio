"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from '@/styles/common/Navbar.module.scss'



export function MainNavbar() {
    const navItems = [
        {
            name: "Services",
            link: "/services",
        },
        {
            name: "Who we are",
            link: "/about",
        },
        {
            name: "Careers",
            link: "/careers",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                    <NavbarButton href={'/contact'} variant="secondary">Contact</NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => {
                        const isActive = pathname === item.link;
                        return (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`relative text-neutral-600 dark:text-neutral-300 ${styles.navItem} ${
                                    isActive ? styles.activeNavItem : ""
                                }`}
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        );
                    })}

                    <NavbarButton
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="secondary"
                        className="w-full"
                    >
                        Contact
                    </NavbarButton>

                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}

