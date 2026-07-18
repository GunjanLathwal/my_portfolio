"use client";

import { motion } from "framer-motion";
import { Download, Maximize, Printer, FileText } from "lucide-react";
import { useState } from "react";

export default function Resume() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          My <span className="text-gradient">Resume</span>
        </motion.h1>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a href="/resume.pdf" download="Gunjan_Lathwal_Resume.pdf" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            <Download className="w-4 h-4" />
            Download PDF
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 hover:bg-card text-foreground font-medium transition-all">
            <Printer className="w-4 h-4" />
            Print
          </a>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 hover:bg-card text-foreground font-medium transition-all"
          >
            <Maximize className="w-4 h-4" />
            Fullscreen
          </button>
        </motion.div>

        {/* Resume Preview - Desktop App Window Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`relative rounded-2xl border border-border bg-card overflow-hidden shadow-2xl transition-all duration-500 ${isFullscreen ? 'fixed inset-4 z-50 mt-0' : 'w-full aspect-[1/1.4] md:aspect-[16/10]'}`}
        >
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 flex justify-center items-center gap-2 text-sm font-medium text-muted-foreground font-mono">
              <FileText className="w-4 h-4" />
              Gunjan_Lathwal_Resume.pdf
            </div>
            {isFullscreen && (
              <button onClick={() => setIsFullscreen(false)} className="text-muted-foreground hover:text-foreground">
                <Maximize className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Window Body (Preview Area) */}
          <div className="w-full h-[calc(100%-3rem)] bg-[#525659] p-4 md:p-8 overflow-y-auto custom-scrollbar flex justify-center">
            {/* The actual resume paper representation */}
            <div className="w-full max-w-[850px] aspect-[1/1.414] bg-white shadow-2xl flex flex-col items-center justify-center p-8 text-black relative">
              <iframe src="/resume.pdf" className="w-full h-full border-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
