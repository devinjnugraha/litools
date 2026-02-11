"use client";

import Cards from "@/components/cards";
import { motion } from "framer-motion";

export default function Tools() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <section className="grid gap-2">
                <h6 className="text-base font-semibold">Explore your tools</h6>
                <Cards />
            </section>
        </motion.div>
    );
}
