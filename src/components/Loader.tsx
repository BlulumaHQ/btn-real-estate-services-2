import { motion, AnimatePresence } from "framer-motion";
import BtnLogo from "@/components/BtnLogo";

interface Props {
  visible: boolean;
}

const Loader = ({ visible }: Props) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <BtnLogo height={56} />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Loader;
