"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from  "./navbar.module.css"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Our Projects", href: "#" },
    { label: "Services", href: "#" },
    { label: "Career", href: "#" },
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-lg shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/images/logo.jpg"
              width={48}
              height={48}
              alt="Company Logo"
              className="h-12 w-auto rounded-full transition-transform duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            variants={navVariants}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 font-medium relative group"
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400"
                  transition={{ duration: 0.3 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
            <motion.div variants={itemVariants}>
              <button
                className="relative bg-black text-white font-bold text-base uppercase px-8 py-4 border border-transparent cursor-pointer overflow-hidden group hover:shadow-xl"
                style={{ WebkitMaskImage: "-webkit-radial-gradient(#000, #fff)" }}
              
               
              >
                <span className="relative block overflow-hidden">
                  <span className="block font-bold mix-blend-difference group-hover:animate-move-up-alternate">
                    Contact Us
                  </span>
                </span>
                <span
                  className="absolute inset-0 bg-white transition-clip-path duration-200 ease-in"
                  style={{
                    clipPath:
                      "polygon(100% 0, 100% 100%, 0 100%, 100% 100%)",
                  }}
                  group-hover={{
                    clipPath: "polygon(100% 0, 0% 0%, 0 100%, 100% 100%)",
                  }}
                />
                <motion.svg
                  className="w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div
                className="flex flex-col space-y-4"
                variants={mobileMenuVariants}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 font-medium py-2"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div variants={itemVariants}>
                  <button
className={styles.btn31}                 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className={styles.textContainer}>
                      <span className={styles.text}>
                        Contact Us
                      </span>
                    </span>
                
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    
    </motion.nav>
  );
};

export default Navbar;