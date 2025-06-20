'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const { Content } = Layout;

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
    
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const heroVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 30 
    },
    animate: { 
      opacity: 1, 
      y: 0
    }
  };

  const letterVariants = {
    initial: { 
      opacity: 0, 
      y: 50 
    },
    animate: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="portfolio"
        variants={pageVariants}
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
        className="min-h-screen"
      >
        <Layout className="min-h-screen">
          <Header isDark={isDark} toggleTheme={toggleTheme} />
          <Content>
            {/* Hero Section */}
            <motion.section 
              id="home" 
              className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
              variants={heroVariants}
              initial="initial"
              animate="animate"
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                  background: `radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)`
                }}
              />
              
              <div className="w-full  relative z-10 flex flex-col items-center justify-center">
                {/* Animated Name */}
                <motion.div 
                  variants={textVariants}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-4 sm:mb-6"
                >
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light font-display overflow-hidden leading-tight"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {"dolat hamza".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="inline-block"
                        whileHover={{ 
                          scale: 1.1, 
                          color: 'var(--accent)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.h1>
                </motion.div>

                {/* Animated Title */}
                <motion.div 
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-6 sm:mb-8"
                >
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    style={{ color: 'var(--secondary)' }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    frontend developer
                  </motion.p>
                </motion.div>

                {/* Animated Description */}
                <motion.div 
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mb-12 sm:mb-16 lg:mb-20"
                >
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-lg lg: leading-relaxed px-4"
                    style={{ color: 'var(--secondary)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    hey 👋 i&apos;m dolat! passionate about creating exceptional digital experiences with modern web technologies. 
                    currently working as a frontend developer at mobiz inc, building innovative solutions with react.js and next.js.
                  </motion.p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                  className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  <motion.div
                    className="w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex justify-center"
                    style={{ borderColor: 'var(--secondary)' }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <motion.div
                      className="w-1 h-2 sm:h-3 rounded-full mt-2"
                      style={{ backgroundColor: 'var(--accent)' }}
                      animate={{ y: [0, 12, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* Animated Sections */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <AboutSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ExperienceSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ProjectsSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactSection />
            </motion.div>
          </Content>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Footer />
          </motion.div>
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}
