"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
    return (
        <footer className="py-24 border-t border-border">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-foreground" />
                                <div className="w-2 h-2 rounded-full bg-foreground/40" />
                            </div>
                            <span className="text-lg font-medium tracking-tight">BuddyOnCall</span>
                        </Link>
                        <p className="max-w-sm text-muted-foreground font-light leading-relaxed">
                            Transforming social connections in India through meaningful real-world activity sharing.
                            Because nobody should have to go out alone if they don't want to.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-foreground">Navigation</h4>
                        <nav className="flex flex-col gap-2">
                            {["Activities", "Problem", "Testimonials", "FAQ"].map((item) => (
                                <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-foreground">Contact</h4>
                        <div className="flex flex-col gap-2">
                            <a href="mailto:hello@buddyoncall.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">hello@buddyoncall.com</a>
                            <p className="text-sm text-muted-foreground font-light">New Delhi, India</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between gap-4 items-center">
                    <p className="text-xs text-muted-foreground font-mono">© 2025 BUDDY ON CALL. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground font-mono">PRIVACY POLICY</Link>
                        <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground font-mono">TERMS OF SERVICE</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
