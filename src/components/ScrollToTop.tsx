"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 bg-bg-secondary/80 backdrop-blur-md border border-border/50 rounded-md font-mono text-xs text-text-muted hover:text-accent-green hover:border-accent-green/50 transition-all duration-300 group shadow-lg shadow-black/20"
                    aria-label="Scroll to top"
                >
                    <span className="text-accent-green animate-pulse">[_]</span>
                    <span className="tracking-widest uppercase">TOP</span>

                    {/* Corner accents for terminal feel */}
                    <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-accent-green/0 group-hover:border-accent-green/50 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-accent-green/0 group-hover:border-accent-green/50 transition-colors" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
