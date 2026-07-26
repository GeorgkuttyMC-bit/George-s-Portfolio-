/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-blue-500/30">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Portfolio />
      <Footer />
    </main>
  );
}
