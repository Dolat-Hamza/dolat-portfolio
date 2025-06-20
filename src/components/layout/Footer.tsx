'use client';

import React from 'react';
import { Layout, Typography, Space, Divider, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHeart,
  FaCode,
  FaArrowUp
} from 'react-icons/fa';

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      label: 'GitHub',
      href: 'https://github.com/Dolat-Hamza',
      color: 'var(--foreground)'
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/dolat-hamza',
      color: 'var(--accent)'
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'Email',
      href: 'mailto:dolathamza8019@gmail.com',
      color: 'var(--accent)'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-sm" />,
      text: '+92 331 4332207'
    },
    {
      icon: <FaMapMarkerAlt className="text-sm" />,
      text: 'Islamabad, Pakistan'
    },
    {
      icon: <FaEnvelope className="text-sm" />,
      text: 'dolathamza8019@gmail.com'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <AntFooter 
      className="px-4 md:px-8 py-12"
      style={{ 
        background: 'var(--muted)',
        borderTop: '1px solid var(--border)'
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=""
      >
        <Row gutter={[32, 32]}>
          {/* Brand Section */}
          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center logo-gradient shadow-lg">
                  <FaCode className="text-white text-xl" />
                </div>
                <div>
                  <Title level={4} className="mb-0" style={{ color: 'var(--foreground)' }}>
                    Dolat Hamza
                  </Title>
                  <Text style={{ color: 'var(--secondary)' }}>
                    Frontend Developer
                  </Text>
                </div>
              </div>
              <Text className="block mb-4" style={{ color: 'var(--secondary)' }}>
                Passionate about creating exceptional digital experiences with modern web technologies.
              </Text>
              <Space size="large">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="transition-colors"
                    style={{ color: social.color }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </Space>
            </motion.div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <Title level={5} className="mb-4" style={{ color: 'var(--foreground)' }}>
                Quick Links
              </Title>
              <Space direction="vertical" size="small" className="w-full">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="block transition-colors"
                    style={{ color: 'var(--secondary)' }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        const headerHeight = 80;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerHeight;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </Space>
            </motion.div>
          </Col>

          {/* Contact Info */}
          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <Title level={5} className="mb-4" style={{ color: 'var(--foreground)' }}>
                Get In Touch
              </Title>
              <Space direction="vertical" size="small" className="w-full">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span style={{ color: 'var(--accent)' }}>
                      {info.icon}
                    </span>
                    <Text style={{ color: 'var(--secondary)' }}>
                      {info.text}
                    </Text>
                  </div>
                ))}
              </Space>
            </motion.div>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'var(--border)', margin: '2rem 0' }} />

        {/* Bottom Section */}
        <motion.div variants={itemVariants}>
          <Row justify="space-between" align="middle" className="flex-col md:flex-row">
            <Col xs={24} md={12} className="text-center md:text-left mb-4 md:mb-0">
              <Text style={{ color: 'var(--secondary)' }}>
                © {currentYear} Dolat Hamza. Made with{' '}
                <FaHeart className="inline mx-1" style={{ color: 'var(--accent)' }} />{' '}
                using Next.js, Ant Design &amp; Tailwind CSS
              </Text>
            </Col>
            <Col xs={24} md={12} className="text-center md:text-right">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all"
                style={{ 
                  background: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <FaArrowUp className="text-sm" />
                <span>Back to Top</span>
              </motion.button>
            </Col>
          </Row>
        </motion.div>
      </motion.div>
    </AntFooter>
  );
};

export default Footer;
