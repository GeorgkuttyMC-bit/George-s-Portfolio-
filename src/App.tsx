/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import AIPoweredWebApps from "./components/AIPoweredWebApps";
import YoutubeVideos from "./components/YoutubeVideos";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";
import { LanguageProvider } from "./context/LanguageContext";
import { VoiceoverProvider } from "./context/VoiceoverContext";

export default function App() {
  return (
    <LanguageProvider>
      <VoiceoverProvider>
        <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-blue-500/30">
          <LanguageToggle />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Portfolio />
          <AIPoweredWebApps />
          <YoutubeVideos />
          <Footer />
        </main>
      </VoiceoverProvider>
    </LanguageProvider>
  );
}
