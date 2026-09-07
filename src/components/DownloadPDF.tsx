import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function DownloadPDF() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      onClick={handleDownload}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.7)] transition-all border border-blue-400/30 print:hidden"
    >
      <Download className="w-5 h-5" />
      <span className="hidden sm:inline tracking-wide text-sm">Download PDF</span>
    </motion.button>
  );
}
