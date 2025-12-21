"use client"

import { motion } from "framer-motion"
import { Component as RadialIntro } from "@/components/design/radial-intro"

const ORBIT_ITEMS = [
    { id: 1, name: "Walking", src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Coffee", src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Music", src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Chess", src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "Gardening", src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=60" },
]

export function Hero() {
    const line1 = "BuddyOnCall: Transforming Lives"
    const line2 = "& Building Connections in India"

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-50">
                <RadialIntro orbitItems={ORBIT_ITEMS} stageSize={600} imageSize={80} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-4 py-1.5 uppercase tracking-widest bg-background/50 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Social Hangout App
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-8">
                    {line1.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block mr-[0.2em]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                    <br className="hidden md:block" />
                    {line2.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block mr-[0.2em] italic font-serif"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5 + i * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="max-w-[600px] mx-auto text-lg md:text-xl text-muted-foreground font-light mb-12"
                >
                    Overcome loneliness, social isolation, and find companionship.
                    A platform where people can find buddies for selected activities.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="h-14 px-10 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl">
                        Find a Buddy
                    </button>
                    <button className="h-14 px-10 rounded-full border border-border bg-background/50 backdrop-blur-sm font-medium hover:bg-muted/50 transition-all hover:scale-105 active:scale-95">
                        How it works
                    </button>
                </motion.div>
            </div>

            {/* Decorative vertical line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 100 }}
                transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-border to-transparent"
            />
        </section>
    )
}
