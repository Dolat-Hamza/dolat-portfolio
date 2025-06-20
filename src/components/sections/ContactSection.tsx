'use client';

import React, { useState } from 'react';
import { Card, Typography, Form, Input, Button, message, Row, Col, Space } from 'antd';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaDownload } from 'react-icons/fa';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const ContactSection: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" style={{ color: 'var(--accent)' }} />,
      label: 'Email',
      value: 'dolathamza8019@gmail.com',
      href: 'mailto:dolathamza8019@gmail.com'
    },
    {
      icon: <FaPhone className="text-2xl" style={{ color: 'var(--accent)' }} />,
      label: 'Phone',
      value: '+92 331 4332207',
      href: 'tel:+923314332207'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" style={{ color: 'var(--accent)' }} />,
      label: 'Location',
      value: 'Islamabad, Pakistan',
      href: 'https://maps.google.com/?q=Islamabad,Pakistan'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" style={{ color: 'var(--foreground)' }} />,
      label: 'GitHub',
      value: 'Dolat-Hamza',
      href: 'https://github.com/Dolat-Hamza'
    },
    {
      icon: <FaLinkedin className="text-2xl" style={{ color: 'var(--accent)' }} />,
      label: 'LinkedIn',
      value: 'dolat-hamza',
      href: 'https://linkedin.com/in/dolat-hamza'
    }
  ];

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      message.success('Message sent successfully! I&apos;ll get back to you soon.');
      form.resetFields();
    } catch {
      message.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadResume = () => {
    const resumeUrl = '/resume/Dolat-Hamza-Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Dolat-Hamza-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8" style={{ background: 'var(--background)' }}>
      <div className="">
        <motion.div
            style={{
              margin: '30px auto',
            }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Title level={1} className="font-display text-4xl md:text-6xl mb-4" style={{ color: 'var(--foreground)' }}>
              Get In Touch
            </Title>
            <Paragraph className="text-lg md:text-xl " style={{ color: 'var(--secondary)' }}>
              I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, 
              or just have a chat about technology and development.
            </Paragraph>
          </motion.div>

          <Row gutter={[32, 32]}>
            {/* Contact Information */}
            <Col xs={24} lg={12}>
              <motion.div variants={itemVariants}>
                <Card 
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ 
                    background: 'var(--muted)',
                    borderColor: 'var(--border)',
                    padding: 32,
                    borderRadius: 20,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'
                  }}
                >
                  <Title level={2} className="font-display mb-8" style={{ color: 'var(--foreground)' }}>
                    Contact Information
                  </Title>
                  
                  <Space direction="vertical" size="large" className="w-full">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center p-4 rounded-lg transition-colors block hover:bg-opacity-10"
                        style={{ gap: 20, background: 'rgba(0,0,0,0.01)' }}
                      >
                        <div className="flex-shrink-0" style={{ marginRight: 16 }}>
                          {info.icon}
                        </div>
                        <div>
                          <Text strong className="block mb-1" style={{ color: 'var(--foreground)', fontSize: 16 }}>
                            {info.label}
                          </Text>
                          <Text style={{ color: 'var(--secondary)', fontSize: 15 }}>
                            {info.value}
                          </Text>
                        </div>
                      </motion.a>
                    ))}
                  </Space>

                  <div className="mt-10 pt-8" style={{ borderTop: '1px solid var(--border)', margin: '20px 0 ',padding: '20px 0' }}>
                    <Title level={4} className="font-display mb-4" style={{ color: 'var(--foreground)' }}>
                      Follow Me
                    </Title>
                    <div className="flex gap-6 mt-2">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="transition-colors"
                          aria-label={social.label}
                          style={{ display: 'flex', alignItems: 'center', padding: 8, borderRadius: 8, background: 'rgba(0,0,0,0.03)' }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-8" style={{ borderTop: '1px solid var(--border)', margin: '20px 0' }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={downloadResume}
                      className="flex items-center px-6 py-3 rounded-lg font-medium transition-all"
                      style={{
                        background: 'var(--accent)',
                        color: 'white',
                        gap: 10,
                        fontSize: 16,
                        padding: '12px 20px',
                        margin: ' 20px 0',
                        width: 'fit-content',
                        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                      }}
                    >
                      <FaDownload />
                      <span>Download Resume</span>
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            </Col>

            {/* Contact Form */}
            <Col xs={24} lg={12}>
              <motion.div variants={itemVariants}>
                <Card 
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ 
                    background: 'var(--muted)',
                    borderColor: 'var(--border)',
                    padding: 32,
                    borderRadius: 20,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'
                  }}
                >
                  <Title level={2} className="font-display mb-8" style={{ color: 'var(--foreground)' }}>
                    Send a Message
                  </Title>
                  
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className="space-y-4"
                    style={{ gap: 18 }}
                  >
                    <Form.Item
                      name="name"
                      label="Full Name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                      style={{ marginBottom: 18 }}
                    >
                      <Input 
                        size="large" 
                        placeholder="Your full name"
                        className="rounded-lg"
                        style={{ padding: '12px 16px', fontSize: 15 }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label="Email Address"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                      style={{ marginBottom: 18 }}
                    >
                      <Input 
                        size="large" 
                        placeholder="your.email@example.com"
                        className="rounded-lg"
                        style={{ padding: '12px 16px', fontSize: 15 }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="subject"
                      label="Subject"
                      rules={[{ required: true, message: 'Please enter a subject' }]}
                      style={{ marginBottom: 18 }}
                    >
                      <Input 
                        size="large" 
                        placeholder="What&apos;s this about?"
                        className="rounded-lg"
                        style={{ padding: '12px 16px', fontSize: 15 }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      label="Message"
                      rules={[{ required: true, message: 'Please enter your message' }]}
                      style={{ marginBottom: 18 }}
                    >
                      <TextArea
                        rows={6}
                        placeholder="Tell me about your project, idea, or just say hello!"
                        className="rounded-lg"
                        style={{ padding: '12px 16px', fontSize: 15 }}
                      />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={loading}
                          size="large"
                          icon={<FaPaperPlane style={{ marginRight: 10 }} />}
                          className="w-full h-12 rounded-lg font-medium border-none"
                          style={{ 
                            background: 'var(--accent)',
                            borderColor: 'var(--accent)',
                            fontSize: 16,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 10
                          }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </motion.div>
                    </Form.Item>
                  </Form>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card 
              className="border-0 shadow-lg"
              style={{ 
                background: 'var(--muted)',
                borderColor: 'var(--border)',
                padding: 32,
                borderRadius: 20,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'
              }}
            >
              <Title level={3} className="font-display mb-4" style={{ color: 'var(--foreground)' }}>
                Let&apos;s Build Something Amazing Together
              </Title>
              <Paragraph className="mb-6 " style={{ color: 'var(--secondary)', fontSize: 16 }}>
                Whether you have a project in mind, need technical consultation, or want to discuss
                potential collaboration opportunities, I'd love to hear from you.
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <motion.a
                  href="mailto:dolathamza8019@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 rounded-lg font-medium transition-colors text-white"
                  style={{ background: 'var(--accent)',  fontSize: 16,
                  padding: '12px 20px', width: 'fit-content', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',gap:10 }}
                >
                  <FaEnvelope />
                  <span>Email Me</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/dolat-hamza"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 rounded-lg font-medium transition-colors text-white"
                  style={{ background: 'var(--accent)',  fontSize: 16,
                    padding: '12px 20px', width: 'fit-content', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',gap:10 }}
                >
                  <FaLinkedin />
                  <span>Connect on LinkedIn</span>
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
