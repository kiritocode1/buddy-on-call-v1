"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const testimonials = [
    {
        quote: "Found a companion for my morning walk. Life feels brighter now.",
        author: "Rajesh Kumar",
        role: "Retired Professor",
        company: "Delhi",
    },
    {
        quote: "Actually went to a concert after years. BuddyOnCall is a game changer.",
        author: "Ananya Singh",
        role: "Tech Professional",
        company: "Bangalore",
    },
    {
        quote: "The companionship program for elders is so thoughtful and kind.",
        author: "Priya Sharma",
        role: "NGO Founder",
        company: "Mumbai",
    },
]

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 200 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    const numberX = useTransform(x, [-200, 200], [-20, 20])
    const numberY = useTransform(y, [-200, 200], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            mouseX.set(e.clientX - centerX)
            mouseY.set(e.clientY - centerY)
        }
    }

    const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
    const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    useEffect(() => {
        const timer = setInterval(goNext, 8000)
        return () => clearInterval(timer)
    }, [])

    const current = testimonials[activeIndex]

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-background overflow-hidden relative border-y border-border/40">
            <div ref={containerRef} className="container mx-auto px-4 relative max-w-5xl" onMouseMove={handleMouseMove}>
                {/* Oversized index number */}
                <motion.div
                    className="absolute -left-16 top-1/2 -translate-y-1/2 text-[20rem] md:text-[28rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter"
                    style={{ x: numberX, y: numberY }}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="block"
                        >
                            {String(activeIndex + 1).padStart(2, "0")}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>

                <div className="relative flex">
                    {/* Left column - vertical layout */}
                    <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-border">
                        <motion.span
                            className="text-xs font-mono text-muted-foreground tracking-widest uppercase"
                            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Testimonials
                        </motion.span>

                        <div className="relative h-32 w-px bg-border mt-8">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-primary origin-top"
                                animate={{
                                    height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 md:pl-16 py-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                className="mb-8"
                            >
                                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-4 py-1.5 bg-background/50 backdrop-blur-sm shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {current.company}
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        <div className="relative mb-12 min-h-[160px]">
                            <AnimatePresence mode="wait">
                                <motion.blockquote
                                    key={activeIndex}
                                    className="text-3xl md:text-5xl font-light text-foreground leading-[1.15] tracking-tight"
                                >
                                    {current.quote.split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block mr-[0.3em]"
                                            initial={{ opacity: 0, y: 20, rotateX: 90 }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                rotateX: 0,
                                                transition: {
                                                    duration: 0.5,
                                                    delay: i * 0.05,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -10,
                                                transition: { duration: 0.2, delay: i * 0.02 },
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.blockquote>
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="flex items-center gap-4"
                                >
                                    <motion.div
                                        className="w-12 h-px bg-foreground"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        style={{ originX: 0 }}
                                    />
                                    <div>
                                        <p className="text-lg font-medium text-foreground">{current.author}</p>
                                        <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">{current.role}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex items-center gap-4">
                                <button onClick={goPrev} className="p-4 rounded-full border border-border hover:bg-muted transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </button>
                                <button onClick={goNext} className="p-4 rounded-full border border-border hover:bg-muted transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
