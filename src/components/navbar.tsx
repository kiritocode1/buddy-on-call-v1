"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm bg-background/50 border-b border-border/40"
        >
            <Link href="/" className="flex items-center gap-2">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <div className="w-2 h-2 rounded-full bg-foreground/40" />
                </div>
                <span className="text-lg font-medium tracking-tight">BuddyOnCall</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {["Activities", "Problem", "Testimonials", "FAQ"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link
                    href="/auth/login"
                    className="text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
                >
                    Contact Us
                </Link>
            </div>
        </motion.header>
    )
}
