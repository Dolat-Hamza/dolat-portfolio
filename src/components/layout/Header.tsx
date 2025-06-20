  'use client';

  import React, { useState, useEffect } from 'react';
  import { Layout, Menu, Button, Space, Drawer, Typography } from 'antd';
  import { motion, AnimatePresence } from 'framer-motion';
  import {
    FaSun,
    FaMoon,
    FaHome,
    FaUser,
    FaBriefcase,
    FaProjectDiagram,
    FaEnvelope,
    FaBars,
    FaTimes,
    FaCode
  } from 'react-icons/fa';

  const { Header: AntHeader } = Layout;
  const { Text } = Typography;

  interface HeaderProps {
    isDark: boolean;
    toggleTheme: () => void;
  }

  const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const menuItems = [
      {
        key: 'home',
        icon: <FaHome className="text-base" />,
        label: 'Home',
      },
      {
        key: 'about',
        icon: <FaUser className="text-base" />,
        label: 'About',
      },
      {
        key: 'experience',
        icon: <FaBriefcase className="text-base" />,
        label: 'Experience',
      },
      {
        key: 'projects',
        icon: <FaProjectDiagram className="text-base" />,
        label: 'Projects',
      },
      {
        key: 'contact',
        icon: <FaEnvelope className="text-base" />,
        label: 'Contact',
      },
    ];

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);

        const sections = ['home', 'about', 'experience', 'projects', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const handleMenuClick = (key: string) => {
      const element = document.getElementById(key);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    };

    const headerVariants = {
      initial: { y: -100, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1
      }
    };

    const logoVariants = {
      hover: {
        scale: 1.05,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }
    };

    return (
      <motion.div
        variants={headerVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <AntHeader
          className={`px-4 md:px-8 transition-all duration-300 flex items-center justify-center ${
            isScrolled 
              ? 'header-glass-scrolled' 
              : 'header-glass'
          } border-b backdrop-blur-sm`}
          style={{ height: '80px', lineHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div className="w-full max-w-7xl flex items-center justify-between mx-auto h-full" style={{ padding: '0 12px' }}>
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => handleMenuClick('home')}
              style={{ minWidth: 220, justifyContent: 'flex-start' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center logo-gradient shadow-lg">
                <FaCode className="text-white text-xl" />
              </div>
              <div className="hidden sm:block">
                <Text className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  Dolat Hamza | Frontend Developer
                </Text>
              </div>
            </motion.div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <Menu
                mode="horizontal"
                selectedKeys={[activeSection]}
                className={`border-none ${
                  isDark ? 'bg-transparent' : 'bg-transparent'
                }`}
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 16
                }}
                items={menuItems.map(item => ({
                  ...item,
                  className: `px-4 py-2 mx-1 rounded-lg transition-all duration-200`
                }))}
                onClick={({ key }) => handleMenuClick(key)}
              />
            </div>

            {/* Right Side Actions */}
            <Space size="middle" className="flex items-center justify-end" style={{ minWidth: 180 }}>
              {/* Theme Toggle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={toggleTheme}
                  icon={
                    isDark
                      ? <FaSun className="text-yellow-400" />
                      : <FaMoon />
                  }
                  className="theme-button shadow-md"
                  size="large"
                  shape="circle"
                />
              </motion.div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setIsMobileMenuOpen(true)}
                    icon={<FaBars />}
                    className="theme-button shadow-md"
                    size="large"
                    shape="circle"
                  />
                </motion.div>
              </div>
            </Space>
          </div>
        </AntHeader>

        {/* Mobile Menu Drawer */}
        <Drawer
          title={
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center logo-gradient">
                <FaCode className="text-white" />
              </div>
              <div>
                <div className="font-bold" style={{ color: 'var(--foreground)' }}>
                  Dolat Hamza
                </div>
                <div className="text-sm" style={{ color: 'var(--secondary)' }}>
                  Frontend Developer
                </div>
              </div>
            </div>
          }
          placement="right"
          onClose={() => setIsMobileMenuOpen(false)}
          open={isMobileMenuOpen}
          width={300}
          closeIcon={<FaTimes style={{ color: 'var(--foreground)' }} />}
        >
          <div className="space-y-2">
            {menuItems.map((item) => (
              <motion.div
                key={item.key}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type={activeSection === item.key ? 'primary' : 'text'}
                  icon={item.icon}
                  onClick={() => handleMenuClick(item.key)}
                  className="w-full justify-start h-12 text-left"
                  size="large"
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </Drawer>
      </motion.div>
    );
  };

  export default Header;
