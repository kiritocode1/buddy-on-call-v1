"use client"

import { motion } from "framer-motion"

export function Problem() {
    return (
        <section id="problem" className="py-24 md:py-32 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-px w-12 bg-foreground" />
                            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">The Challenge</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-light tracking-tight leading-tight"
                        >
                            Loneliness is a silent crisis affecting millions in India.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed font-light"
                        >
                            From young adults in new cities to elders living alone, the need for meaningful
                            human connection has never been greater. Traditional social apps focus on
                            infinite scrolling; we focus on real-world presence.
                        </motion.p>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 bg-background border border-border/50 rounded-3xl shadow-sm relative z-10"
                        >
                            <p className="text-xl md:text-2xl font-light leading-relaxed italic text-foreground/80 mb-8">
                                "BuddyOnCall is set to revolutionize the way young adults and elders in India overcome loneliness,
                                social isolation, and the need for companionship."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-primary font-bold">B</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Our Vision</p>
                                    <p className="text-xs text-muted-foreground tracking-wide font-mono">EST. 2025 • INDIA</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background decorative element */}
                        <div className="absolute -top-4 -right-4 w-full h-full border border-primary/10 rounded-3xl -z-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}
