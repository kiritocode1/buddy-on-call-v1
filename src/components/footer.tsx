"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

const ORBS = [
    { id: 1, size: 120, x: "10%", y: "20%", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60", delay: 0 },
    { id: 2, size: 180, x: "25%", y: "60%", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60", delay: 1 },
    { id: 3, size: 140, x: "45%", y: "30%", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60", delay: 2 },
    { id: 4, size: 220, x: "65%", y: "50%", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60", delay: 0.5 },
    { id: 5, size: 160, x: "85%", y: "25%", src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=60", delay: 1.5 },
    { id: 6, size: 90, x: "40%", y: "75%", src: null, delay: 3 }, // Plain orb
    { id: 7, size: 110, x: "75%", y: "15%", src: null, delay: 4 }, // Plain orb
    { id: 8, size: 200, x: "55%", y: "85%", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60", delay: 2.5 },
]

export function Footer() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    const textY = useTransform(scrollYProgress, [0, 1], [50, -20])
    const containerScale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

    return (
        <footer ref={containerRef} className="relative w-full bg-background px-4 py-8 overflow-hidden">
            {/* Top Interactive Container */}
            <motion.div
                style={{ scale: containerScale }}
                className="relative h-[500px] md:h-[600px] w-full rounded-[3.5rem] bg-slate-950 overflow-hidden group shadow-2xl"
            >
                {/* Floating Orbs Background */}
                <div className="absolute inset-0 pointer-events-none">
                    {ORBS.map((orb) => (
                        <motion.div
                            key={orb.id}
                            className="absolute rounded-full border border-white/10 overflow-hidden"
                            style={{
                                width: orb.size,
                                height: orb.size,
                                left: orb.x,
                                top: orb.y,
                                background: orb.src ? "transparent" : "rgba(255,255,255,0.03)",
                                backdropFilter: "blur(20px)",
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 15, 0],
                            }}
                            transition={{
                                duration: 8 + orb.delay * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: orb.delay,
                            }}
                        >
                            {orb.src && (
                                <motion.img
                                    src={orb.src}
                                    alt="Social Activity"
                                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Logo & Navigation */}
                <div className="absolute top-12 left-12 z-20">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-lg">
                            <div className="w-2 h-2 rounded-full bg-slate-950" />
                        </div>
                    </Link>
                </div>

                <div className="absolute top-12 right-12 z-20 hidden md:flex items-center gap-8">
                    {["Discover", "Activities", "Work", "Contact"].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Central CTA */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-20 bg-primary/10 blur-[100px] rounded-full animate-pulse" />

                        {/* Unique Circle Button from Image */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center text-white group/btn"
                        >
                            <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 group-hover/btn:opacity-100 transition-opacity">Request an</span>
                            <span className="text-xs font-medium tracking-widest mt-1">INTRODUCTION</span>

                            {/* Inner ring */}
                            <div className="absolute inset-2 rounded-full border border-white/5 group-hover/btn:border-white/20 transition-colors" />
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Massive Text Section */}
            <div className="relative mt-12 py-12 select-none overflow-hidden bg-white dark:bg-black h-[30vh] md:h-[40vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <ClientOnlyVideo />
                </div>
                <div className="absolute inset-0 z-10 bg-white dark:bg-black mix-blend-screen dark:mix-blend-multiply flex items-center justify-center">
                    <motion.h2
                        style={{ y: textY }}
                        className="text-[12vw] md:text-[12vw] leading-[0.7] font-black tracking-tighter text-center text-black dark:text-white"
                    >
                        BUDDY &nbsp; ON &nbsp; CALL
                    </motion.h2>
                </div>
            </div>

            {/* Bottom Links */}
            <div className="mt-4 px-8 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Services</Link>
                <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            </div>
        </footer>
    )
}

function ClientOnlyVideo() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
        >
            <source src="/sky.mp4" type="video/mp4" />
        </video>
    );
}
