'use client';

import React, { useState } from 'react';
import { Card, Typography, Tag, Button, Row, Col, Modal, Divider } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode, FaUsers, FaClock, FaAward, FaRocket, FaLightbulb, FaTrophy } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

const { Title, Paragraph, Text } = Typography;

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'ai' | 'fullstack';
  status: 'completed' | 'in-progress' | 'planned';
  duration: string;
  teamSize: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Job Shop Scheduler',
      description: 'Advanced scheduling system for manufacturing operations with real-time optimization and resource management.',
      longDescription: 'A comprehensive job shop scheduling application that optimizes manufacturing workflows, manages resources, and provides real-time insights into production efficiency. Built with modern web technologies and advanced algorithms.',
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=Job+Shop+Scheduler',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Real-time job scheduling and optimization',
        'Resource allocation and management',
        'Interactive Gantt charts and timelines',
        'Performance analytics and reporting',
        'Multi-user collaboration tools'
      ],
      challenges: [
        'Complex algorithm implementation for optimal scheduling',
        'Real-time data synchronization across multiple users',
        'Performance optimization for large datasets'
      ],
      results: [
        'Improved scheduling efficiency by 45%',
        'Reduced production downtime by 30%',
        'Enhanced resource utilization by 35%'
      ],
      githubUrl: 'https://github.com/Dolat-Hamza/job-shop-scheduler',
      category: 'fullstack',
      status: 'completed',
      duration: '6 months',
      teamSize: '4 developers'
    },
    {
      id: '2',
      title: 'Wiser Machines Monitoring',
      description: 'IoT-based machine monitoring system with predictive analytics and real-time alerts for industrial equipment.',
      longDescription: 'An intelligent monitoring system that tracks machine performance, predicts maintenance needs, and provides actionable insights to prevent equipment failures and optimize operations.',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Machine+Monitoring',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'IoT Integration', 'Chart.js', 'WebSocket'],
      features: [
        'Real-time machine status monitoring',
        'Predictive maintenance alerts',
        'Performance analytics dashboard',
        'Historical data visualization',
        'Mobile-responsive interface'
      ],
      challenges: [
        'Integration with various IoT sensors and protocols',
        'Real-time data processing and visualization',
        'Scalable architecture for multiple machines'
      ],
      results: [
        'Reduced unplanned downtime by 40%',
        'Improved maintenance efficiency by 50%',
        'Cost savings of $200K annually'
      ],
      githubUrl: 'https://github.com/Dolat-Hamza/wiser-machines',
      liveUrl: 'https://wiser-machines-demo.vercel.app',
      category: 'web',
      status: 'completed',
      duration: '8 months',
      teamSize: '5 developers'
    },
    {
      id: '3',
      title: 'Claims Guru Integration',
      description: 'AI-powered insurance claims processing system with automated document analysis and fraud detection.',
      longDescription: 'A sophisticated claims processing platform that leverages AI to automate document analysis, detect fraudulent claims, and streamline the entire claims workflow for insurance companies.',
      image: '/images/camera-professional.jpg',
      technologies: ['Next.js', 'TypeScript', 'AI/ML APIs', 'PostgreSQL', 'Tailwind CSS', 'Python'],
      features: [
        'Automated document processing and OCR',
        'AI-powered fraud detection',
        'Workflow automation and routing',
        'Real-time claim status tracking',
        'Advanced reporting and analytics'
      ],
      challenges: [
        'Integration with multiple AI/ML services',
        'Complex business logic implementation',
        'High-security requirements for sensitive data'
      ],
      results: [
        'Reduced claim processing time by 60%',
        'Improved fraud detection accuracy by 85%',
        'Increased customer satisfaction by 40%'
      ],
      category: 'ai',
      status: 'completed',
      duration: '10 months',
      teamSize: '6 developers'
    },
    {
      id: '4',
      title: 'Supply Chain Management Platform',
      description: 'Comprehensive supply chain management system with inventory tracking, vendor management, and analytics.',
      longDescription: 'A full-featured supply chain management platform that provides end-to-end visibility into supply chain operations, from procurement to delivery, with advanced analytics and reporting capabilities.',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Supply+Chain',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker'],
      features: [
        'Inventory management and tracking',
        'Vendor relationship management',
        'Order processing and fulfillment',
        'Supply chain analytics and insights',
        'Multi-location support'
      ],
      challenges: [
        'Complex data relationships and queries',
        'Real-time inventory synchronization',
        'Scalable architecture for global operations'
      ],
      results: [
        'Improved inventory accuracy by 95%',
        'Reduced procurement costs by 25%',
        'Enhanced supplier performance by 30%'
      ],
      githubUrl: 'https://github.com/Dolat-Hamza/supply-chain-platform',
      category: 'fullstack',
      status: 'in-progress',
      duration: '12 months',
      teamSize: '8 developers'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const getTechnologyIcon = (tech: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      'React.js': <SiReact className="text-blue-500" />,
      'Next.js': <SiNextdotjs className="text-black" />,
      'TypeScript': <SiTypescript className="text-blue-600" />,
      'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
      'Node.js': <SiNodedotjs className="text-green-600" />,
      'MongoDB': <SiMongodb className="text-green-500" />
    };
    return icons[tech] || <FaCode className="text-gray-500" />;
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8" style={{ background: 'var(--background)' }}>
      <div className="">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Title 
              level={1} 
              className="font-display text-4xl md:text-6xl mb-6"
              style={{ color: 'var(--foreground)' }}
            >
              Featured Projects
            </Title>
            <Paragraph 
              className="text-lg md:text-xl  leading-relaxed mb-8"
              style={{ color: 'var(--secondary)' }}
            >
              A curated collection of my most impactful work, showcasing innovative solutions, 
              cutting-edge technologies, and measurable results that drive business success.
            </Paragraph>
            
            {/* Project Stats */}
            <Row gutter={[32, 16]} style={{
              marginBottom: '2  rem',
            }} className="mb-12">
              <Col xs={24} sm={8}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: 'var(--primary)' }}
                  >
                    15+
                  </div>
                  <Text style={{ color: 'var(--secondary)' }}>
                    Projects Completed
                  </Text>
                </motion.div>
              </Col>
              <Col xs={24} sm={8}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: 'var(--accent)' }}
                  >
                    8+
                  </div>
                  <Text style={{ color: 'var(--secondary)' }}>
                    Technologies Mastered
                  </Text>
                </motion.div>
              </Col>
              <Col xs={24} sm={8}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: 'var(--primary)' }}
                  >
                    100%
                  </div>
                  <Text style={{ color: 'var(--secondary)' }}>
                    Client Satisfaction
                  </Text>
                </motion.div>
              </Col>
            </Row>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',

          }} className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.div
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type={filter === category.key ? 'primary' : 'default'}
                  onClick={() => setFilter(category.key)}
                  className="px-8 py-3 h-auto font-semibold text-base shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    background: filter === category.key 
                      ? 'linear-gradient(135deg, var(--primary), var(--accent))'
                      : 'var(--background)',
                    color: filter === category.key 
                      ? 'white' 
                      : 'var(--foreground)',
                    border: `1px solid ${filter === category.key ? 'transparent' : 'var(--border)'}`,
                  }}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Row gutter={[32, 32]} style={{
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 16px',
              }}>
                {filteredProjects.map((project, index) => (
                  <Col key={project.id} xs={24} lg={12}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="h-full"
                    >
                      <Card
                        hoverable
                        className="h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, var(--muted) 80%, var(--background) 100%)',
                          borderColor: 'var(--border)',
                          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                          padding: 0,
                          overflow: 'hidden',
                          minHeight: 420,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                        cover={
                          <div className="relative overflow-hidden h-56" style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                            <Image
                              src={project.image}
                              alt={`${project.title} - Professional project showcase`}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-110"
                              style={{ filter: 'brightness(0.95) contrast(1.08)' }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Project';
                              }}
                            />
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.04) 100%)' }} />
                            <div className="absolute top-4 right-4">
                              <Tag
                                className="font-semibold shadow"
                                style={{
                                  background: project.status === 'completed'
                                    ? 'var(--accent)'
                                    : project.status === 'in-progress'
                                    ? 'var(--primary)'
                                    : '#f59e0b',
                                  color: 'white',
                                  border: 'none',
                                  fontSize: 13,
                                  letterSpacing: 1,
                                  padding: '4px 14px',
                                  borderRadius: 8,
                                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)'
                                }}
                              >
                                {project.status.replace('-', ' ').toUpperCase()}
                              </Tag>
                            </div>
                            <div className="absolute bottom-4 left-4">
                              <div className="flex items-center" style={{ gap: 8 }}>
                                <FaRocket style={{ color: 'white' }} />
                                <Text className="text-white font-semibold" style={{ fontSize: 13, letterSpacing: 1 }}>
                                  {project.category.toUpperCase()}
                                </Text>
                              </div>
                            </div>
                          </div>
                        }
                      >
                        <div className="p-5" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                          <Title
                            level={4}
                            className="font-display mb-2"
                            style={{ color: 'var(--foreground)', fontWeight: 800, fontSize: 22, letterSpacing: 0.5, marginBottom: 10 }}
                          >
                            {project.title}
                          </Title>
                          <Paragraph
                            className="mb-4 leading-relaxed"
                            style={{ color: 'var(--secondary)', fontSize: 15, marginBottom: 18, minHeight: 48 }}
                          >
                            {project.description}
                          </Paragraph>
                          <div className="flex items-center justify-between mb-4" style={{ marginBottom: 18 }}>
                            <div className="flex items-center" style={{ gap: 8 }}>
                              <FaClock style={{ color: 'var(--primary)' }} />
                              <Text
                                className="text-sm font-medium"
                                style={{ color: 'var(--secondary)', fontSize: 13 }}
                              >
                                {project.duration}
                              </Text>
                            </div>
                            <div className="flex items-center" style={{ gap: 8 }}>
                              <FaUsers style={{ color: 'var(--primary)' }} />
                              <Text
                                className="text-sm font-medium"
                                style={{ color: 'var(--secondary)', fontSize: 13 }}
                              >
                                {project.teamSize}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-6" style={{ marginBottom: 18 }}>
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                              <div key={idx} className="flex items-center" style={{ background: 'var(--background)', borderRadius: 8, padding: '2px 10px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)', gap: 8 }}>
                                {getTechnologyIcon(tech)}
                                <Tag
                                  className="font-medium"
                                  style={{
                                    background: 'transparent',
                                    color: 'var(--primary)',
                                    border: 'none',
                                    fontSize: 13,
                                    padding: '0 4px',
                                  }}
                                >
                                  {tech}
                                </Tag>
                              </div>
                            ))}
                            {project.technologies.length > 3 && (
                              <Tag
                                style={{
                                  background: 'var(--primary)',
                                  color: 'white',
                                  border: 'none',
                                  fontSize: 13,
                                  borderRadius: 8,
                                  padding: '2px 10px',
                                  fontWeight: 600
                                }}
                              >
                                +{project.technologies.length - 3} more
                              </Tag>
                            )}
                          </div>
                          <div className="flex space-x-3 mt-auto">
                            <Button
                              type="primary"
                              onClick={() => setSelectedProject(project)}
                              className="flex-1 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                              style={{
                                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                                border: 'none',
                                fontWeight: 700,
                                fontSize: 15,
                                borderRadius: 8,
                                padding: '8px 0',
                                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 8
                              }}
                            >
                              <FaLightbulb />
                              View Details
                            </Button>
                            {project.githubUrl && (
                              <Button
                                icon={<FaGithub />}
                                href={project.githubUrl}
                                target="_blank"
                                className="shadow-md hover:shadow-lg transition-all duration-300"
                                style={{
                                  background: 'var(--background)',
                                  color: 'var(--foreground)',
                                  border: '1px solid var(--border)',
                                  borderRadius: 8,
                                  fontSize: 18,
                                  width: 44,
                                  height: 44,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  padding: 0,
                                  gap: 8
                                }}
                              />
                            )}
                            {project.liveUrl && (
                              <Button
                                icon={<FaExternalLinkAlt />}
                                href={project.liveUrl}
                                target="_blank"
                                className="shadow-md hover:shadow-lg transition-all duration-300"
                                style={{
                                  background: 'var(--accent)',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: 8,
                                  fontSize: 18,
                                  width: 44,
                                  height: 44,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  padding: 0,
                                  gap: 8
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </AnimatePresence>

          {/* Project Detail Modal */}
          <Modal
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0' }}>
                <div style={{ flex: 1 }}>
                  <Title
                    level={3}
                    className="font-display mb-0"
                    style={{ color: 'black', margin: 0, fontWeight: 800, fontSize: 28 }}
                  >
                    {selectedProject?.title}
                  </Title>
                  <Text style={{ color: 'var(--secondary)', fontSize: 16, marginTop: 2 }}>
                    {selectedProject?.category.toUpperCase()} Project
                  </Text>
                </div>
                <Tag
                  className="font-semibold shadow"
                  style={{
                    background: selectedProject?.status === 'completed'
                      ? 'var(--accent)'
                      : selectedProject?.status === 'in-progress'
                      ? 'var(--primary)'
                      : '#f59e0b',
                    color: 'white',
                    border: 'none',
                    fontSize: 13,
                    letterSpacing: 1,
                    padding: '4px 14px',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)'
                  }}
                >
                  {selectedProject?.status.replace('-', ' ').toUpperCase()}
                </Tag>
              </div>
            }
            open={!!selectedProject}
            onCancel={() => setSelectedProject(null)}
            footer={null}
            width={900}
            className="project-modal"
            style={{
              background: 'var(--background)',
              borderRadius: 24,
              padding: 0,
              boxShadow: '0 12px 48px 0 rgba(31,38,135,0.18)',
              overflow: 'hidden',
              maxWidth: 900
            }}
            bodyStyle={{
              padding: 0,
              background: 'linear-gradient(135deg, var(--muted) 80%, var(--background) 100%)',
              borderRadius: 24,
              minHeight: 500
            }}
            closeIcon={<span style={{ fontSize: 22, color: 'var(--secondary)' }}>&times;</span>}
            centered
          >
            <div style={{ padding: 32 }}>
              {selectedProject && (
                <div style={{ background: 'var(--background)' }}>
                  <div className="relative w-full h-72 rounded-xl overflow-hidden mb-8 shadow-lg">
                    <Image
                      src={selectedProject.image}
                      alt={`${selectedProject.title} - Detailed project view`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/900x400/2563eb/ffffff?text=Project+Details';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Tag
                            className="font-semibold"
                            style={{
                              background: selectedProject.status === 'completed'
                                ? 'var(--accent)'
                                : selectedProject.status === 'in-progress'
                                ? 'var(--primary)'
                                : '#f59e0b',
                              color: 'white',
                              border: 'none'
                            }}
                          >
                            {selectedProject.status.replace('-', ' ').toUpperCase()}
                          </Tag>
                          <Text className="text-white font-semibold">
                            {selectedProject.category.toUpperCase()}
                          </Text>
                        </div>
                        <div className="flex items-center space-x-4 text-white">
                          <div className="flex items-center" style={{ gap: 8 }}>
                            <FaClock />
                            <span className="font-medium">{selectedProject.duration}</span>
                          </div>
                          <div className="flex items-center" style={{ gap: 8 }}>
                            <FaUsers />
                            <span className="font-medium">{selectedProject.teamSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Paragraph
                    className="text-lg leading-relaxed mb-8"
                    style={{ color: 'var(--foreground)', marginBottom: 24, fontSize: 16,padding: '0 16px' }}
                  >
                    {selectedProject.longDescription}
                  </Paragraph>

                  <Row gutter={[32, 32]} className="mb-8">
                    <Col xs={24} md={12}>
                      <Card
                        className="h-full border-0 shadow-md"
                        style={{
                          background: 'var(--muted)',
                          borderColor: 'var(--border)',
                          borderRadius: 18,
                          padding: '32px 28px',
                          boxShadow: '0 4px 24px 0 rgba(31,38,135,0.08)',
                          minHeight: 320,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <Title
                          level={5}
                          className="font-display mb-4 flex items-center"
                          style={{ color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: 12, fontWeight: 700, fontSize: 20, marginBottom: 22 }}
                        >
                          <FaAward style={{ fontSize: 24, color: 'var(--primary)' }} />
                          Key Features
                        </Title>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '10px 0', borderRadius: 10, transition: 'background 0.2s', background: 'rgba(0,0,0,0.01)', marginBottom: 6 }}>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 18, minHeight: 18, background: 'var(--accent)', borderRadius: '50%', marginTop: 2, boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)' }}>
                                <span style={{ width: 8, height: 8, background: 'white', borderRadius: '50%', display: 'block' }} />
                              </span>
                              <Text style={{ color: 'var(--foreground)', fontSize: 16, lineHeight: 1.7, fontWeight: 500 }}>
                                {feature}
                              </Text>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </Col>
                    <Col xs={24} md={12}>
                      <Card
                        className="h-full border-0 shadow-md"
                        style={{
                          background: 'var(--muted)',
                          borderColor: 'var(--border)',
                          borderRadius: 18,
                          padding: '32px 28px',
                          boxShadow: '0 4px 24px 0 rgba(31,38,135,0.08)',
                          minHeight: 320,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <Title
                          level={5}
                          className="font-display mb-4 flex items-center"
                          style={{ color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: 12, fontWeight: 700, fontSize: 20, marginBottom: 22 }}
                        >
                          <FaCode style={{ fontSize: 24, color: 'var(--primary)' }} />
                          Technical Challenges
                        </Title>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {selectedProject.challenges.map((challenge, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '10px 0', borderRadius: 10, transition: 'background 0.2s', background: 'rgba(0,0,0,0.01)', marginBottom: 6 }}>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 18, minHeight: 18, background: 'var(--primary)', borderRadius: '50%', marginTop: 2, boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)' }}>
                                <span style={{ width: 8, height: 8, background: 'white', borderRadius: '50%', display: 'block' }} />
                              </span>
                              <Text style={{ color: 'var(--foreground)', fontSize: 16, lineHeight: 1.7, fontWeight: 500 }}>
                                {challenge}
                              </Text>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </Col>
                  </Row>

                  <Card
                    className="mb-8 border-0 shadow-md"
                    style={{
                      background: 'var(--muted)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <Title
                      level={5}
                      className="font-display mb-4 flex items-center"
                      style={{ color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <FaTrophy />
                      Results &amp; Impact
                    </Title>
                    <Row gutter={[24, 16]}>
                      {selectedProject.results.map((result, idx) => (
                        <Col key={idx} xs={24} sm={8}>
                          <div className="text-center p-4 rounded-lg" style={{ background: 'var(--background)' }}>
                            <div
                              className="text-2xl font-bold mb-2"
                              style={{ color: 'var(--primary)' }}
                            >
                              {result.match(/\d+/)?.[0] || '✓'}
                              {result.includes('%') ? '%' : result.includes('$') ? 'K' : ''}
                            </div>
                            <Text
                              className="text-sm"
                              style={{ color: 'var(--secondary)' }}
                            >
                              {result.replace(/\d+[%$K]*\s*/, '')}
                            </Text>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Card>

                  <Card
                    className="mb-8 border-0 shadow-md"
                    style={{
                      background: 'var(--muted)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <Title
                      level={5}
                      className="font-display mb-4 flex items-center"
                      style={{ color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <FaCode />
                      Technologies Used
                    </Title>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center" style={{ background: 'var(--background)', borderRadius: 8, padding: '2px 10px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)', gap: 8 }}>
                          {getTechnologyIcon(tech)}
                          <Text
                            className="font-medium"
                            style={{ color: 'var(--foreground)' }}
                          >
                            {tech}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <div className="flex justify-center space-x-4">
                    {selectedProject.githubUrl && (
                      <Button
                        size="large"
                        icon={<FaGithub />}
                        href={selectedProject.githubUrl}
                        target="_blank"
                        className="px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{
                          background: 'var(--foreground)',
                          color: 'var(--background)',
                          border: 'none'
                        }}
                      >
                        View Source Code
                      </Button>
                    )}
                    {selectedProject.liveUrl && (
                      <Button
                        size="large"
                        type="primary"
                        icon={<FaExternalLinkAlt />}
                        href={selectedProject.liveUrl}
                        target="_blank"
                        className="px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                          border: 'none'
                        }}
                      >
                        View Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Modal>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
