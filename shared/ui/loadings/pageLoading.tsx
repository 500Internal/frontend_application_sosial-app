// components/LoadingScreen.tsx
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoading() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 con flex items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          Loading...
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
