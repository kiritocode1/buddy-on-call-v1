"use client"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
    {
        question: "How does BuddyOnCall verify its buddies?",
        answer: "Safety is our top priority. All buddies undergo a multi-step verification process, including government ID checks and personal interviews to ensure a respectful and safe environment."
    },
    {
        question: "Is this a dating app?",
        answer: "No. BuddyOnCall is strictly a social hangout and companionship platform. Our goal is to combat loneliness and facilitate activity sharing, not romantic matchmaking."
    },
    {
        question: "What activities can I find a buddy for?",
        answer: "You can find buddies for movies, coffee dates, gym sessions, library visits, concerts, and even companion care for elders. Our activities list is constantly growing based on user demand."
    },
    {
        question: "How much does it cost?",
        answer: "Pricing varies based on the activity and duration. Each buddy profile clearly lists their hourly rates for specific services. There are no hidden fees."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 md:py-32 bg-muted/20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground font-light">Everything you need to know about BuddyOnCall.</p>
                </div>

                <div className="max-w-[700px] mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-b border-border/60 pb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between py-4 text-left group"
                            >
                                <span className="text-lg font-medium group-hover:text-primary transition-colors">{faq.question}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-muted-foreground" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground" />
                                )}
                            </button>

                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-4 text-muted-foreground font-light leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
