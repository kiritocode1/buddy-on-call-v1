"use client"

import { motion } from "framer-motion"
import { Coffee, Film, Dumbbell, Heart, Library, Music } from "lucide-react"

const activities = [
    {
        title: "Movie Outing",
        description: "Catch the latest blockbuster with someone who loves cinema as much as you do.",
        icon: <Film className="w-6 h-6" />,
        size: "large",
        color: "bg-blue-500/10 text-blue-500"
    },
    {
        title: "Coffee & Chat",
        description: "Deep conversations over artisanal brews.",
        icon: <Coffee className="w-6 h-6" />,
        size: "small",
        color: "bg-orange-500/10 text-orange-500"
    },
    {
        title: "Gym Buddy",
        description: "Motivate each other to hit those fitness goals.",
        icon: <Dumbbell className="w-6 h-6" />,
        size: "small",
        color: "bg-green-500/10 text-green-500"
    },
    {
        title: "Elder Companion",
        description: "Thoughtful presence and support for our cherished elders.",
        icon: <Heart className="w-6 h-6" />,
        size: "large",
        color: "bg-red-500/10 text-red-500"
    },
    {
        title: "Library Sessions",
        description: "Focused study or reading in comfortable silence.",
        icon: <Library className="w-6 h-6" />,
        size: "small",
        color: "bg-purple-500/10 text-purple-500"
    },
    {
        title: "Concert Goer",
        description: "Never miss a live show again.",
        icon: <Music className="w-6 h-6" />,
        size: "small",
        color: "bg-yellow-500/10 text-yellow-500"
    }
]

export function Activities() {
    return (
        <section id="activities" className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-[800px] mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest"
                    >
                        Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light tracking-tight mb-6"
                    >
                        Curated Experiences, Personalized Connections.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg font-light"
                    >
                        Choose from a variety of activities and find the perfect buddy to accompany you.
                        Tailored to your interests and pace.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {activities.map((activity, i) => (
                        <motion.div
                            key={activity.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group flex flex-col justify-between p-8 rounded-3xl border border-border/50 bg-background shadow-sm hover:shadow-md transition-all ${activity.size === "large" ? "md:col-span-2" : "md:col-span-1"
                                }`}
                        >
                            <div className={`p-3 rounded-2xl w-fit ${activity.color}`}>
                                {activity.icon}
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{activity.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed font-light">{activity.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
