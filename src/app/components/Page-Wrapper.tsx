"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.3 }}>
      {children}
    </motion.div>
  </AnimatePresence>
);
