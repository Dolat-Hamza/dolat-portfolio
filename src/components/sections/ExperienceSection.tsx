'use client';

import React from 'react';
import { Card, Typography, Timeline, Tag, Row, Col, Divider, Progress } from 'antd';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode, 
  FaUsers, 
  FaRocket,
  FaTrophy,
  FaChartLine,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';

const { Title, Paragraph, Text } = Typography;

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Mobiz Inc',
      location: 'Islamabad, Pakistan',
      period: 'July 2024 - Present',
      duration: '6+ months',
      type: 'Full-time',
      status: 'current',
      description: 'Leading frontend development initiatives and implementing cutting-edge web solutions with a focus on performance and user experience.',
      achievements: [
        'Developed responsive web applications using React.js and Next.js',
        'Implemented AI integration features for enhanced user experiences',
        'Optimized application performance resulting in 40% faster load times',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AI Integration', 'Performance Optimization'],
      impact: {
        performance: 40,
        projects: 8,
        teamSize: 5
      }
    },
    {
      title: 'Design Engineer',
      company: 'CARE Pvt. Ltd',
      location: 'Islamabad, Pakistan',
      period: 'August 2022 - August 2024',
      duration: '2 years',
      type: 'Full-time',
      status: 'completed',
      description: 'Bridged the gap between design and development, creating intuitive user interfaces and implementing design systems.',
      achievements: [
        'Designed and developed user-centric web interfaces',
        'Created comprehensive design systems and component libraries',
        'Improved user engagement by 35% through UX optimizations',
        'Collaborated with designers to translate mockups into functional code',
        'Implemented responsive designs across multiple platforms'
      ],
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Figma', 'Design Systems', 'UX/UI Design'],
      impact: {
        engagement: 35,
        components: 50,
        platforms: 3
      }
    }
  ];

  const stats = [
    { 
      label: 'Years of Experience', 
      value: '3+', 
      icon: <FaCalendarAlt />,
      description: 'Professional development experience',
      color: 'var(--primary)'
    },
    { 
      label: 'Projects Completed', 
      value: '50+', 
      icon: <FaRocket />,
      description: 'Successful project deliveries',
      color: 'var(--accent)'
    },
    { 
      label: 'Technologies Mastered', 
      value: '20+', 
      icon: <FaCode />,
      description: 'Modern web technologies',
      color: 'var(--primary)'
    },
    { 
      label: 'Team Collaborations', 
      value: '15+', 
      icon: <FaUsers />,
      description: 'Cross-functional partnerships',
      color: 'var(--accent)'
    }
  ];

  const highlights = [
    {
      icon: <FaTrophy />,
      title: 'Performance Optimization',
      description: 'Achieved 40% faster load times through advanced optimization techniques',
      metric: '40% Faster'
    },
    {
      icon: <FaChartLine />,
      title: 'User Engagement',
      description: 'Improved user engagement through strategic UX enhancements',
      metric: '35% Increase'
    },
    {
      icon: <FaLightbulb />,
      title: 'AI Integration',
      description: 'Successfully implemented AI-powered features in web applications',
      metric: '10+ Features'
    },
    {
      icon: <FaHandshake />,
      title: 'Team Leadership',
      description: 'Mentored junior developers and led cross-functional initiatives',
      metric: '5+ Mentees'
    }
  ];

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
    <section 
      id="experience" 
      className="min-h-screen py-20 px-4 md:px-8"
      style={{ background: 'var(--background)' ,display : 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
    >
      <div className="">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <Title 
              level={1} 
              className="font-display text-5xl md:text-7xl mb-6"
              style={{ color: 'var(--foreground)', margin: 0 }}
            >
              <span className="text-gradient">Experience</span>
            </Title>
            <Paragraph 
              className="text-xl md:text-2xl  leading-relaxed"
              style={{ color: 'var(--secondary)', fontSize: '1.25rem' }}
            >
              My professional journey in frontend development, building innovative solutions 
              and contributing to impactful projects.
            </Paragraph>
          </motion.div>

          {/* Professional Stats */}
          <motion.div variants={itemVariants} className="mb-20">
            <Row gutter={[32, 32]}>
              {stats.map((stat, index) => (
                <Col key={index} xs={12} lg={6}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <Card 
                      className="text-center h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
                      style={{ 
                        background: 'var(--muted)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div 
                        className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                          color: 'white'
                        }}
                      >
                        {stat.icon}
                      </div>
                      <Title 
                        level={2} 
                        className="font-display mb-2"
                        style={{ color: 'var(--foreground)', fontSize: '2.5rem', margin: 0 }}
                      >
                        {stat.value}
                      </Title>
                      <Text 
                        className="block text-lg font-semibold mb-2"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {stat.label}
                      </Text>
                      <Text 
                        className="text-sm"
                        style={{ color: 'var(--secondary)' }}
                      >
                        {stat.description}
                      </Text>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} style={{
            padding: '2rem',
            borderRadius: '12px',

          }} className="mb-20">
            <Title 
              level={2} 
              className="text-center font-display mb-12 text-4xl"
              style={{ color: 'var(--foreground)' }}
            >
              Key Achievements
            </Title>
            <Row gutter={[32, 32]}>
              {highlights.map((highlight, index) => (
                <Col key={index} xs={24} sm={12} lg={6}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card 
                      className="text-center h-full border-0 shadow-md hover:shadow-lg transition-all duration-300"
                      style={{ 
                        background: 'var(--background)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div 
                        className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center text-xl"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                          color: 'white'
                        }}
                      >
                        {highlight.icon}
                      </div>
                      <Title 
                        level={4} 
                        className="font-display mb-3"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {highlight.title}
                      </Title>
                      <Paragraph 
                        className="mb-4 text-sm"
                        style={{ color: 'var(--secondary)' }}
                      >
                        {highlight.description}
                      </Paragraph>
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                          color: 'white',
                          padding: '0.25rem 0.5rem'
                        }}
                      >
                        {highlight.metric}
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          {/* Professional Journey Timeline */}
          <motion.div variants={itemVariants} className="mb-20">
            <Title 
              level={2} 
              className="text-center font-display mb-12 text-4xl"
              style={{ color: 'var(--foreground)' }}
            >
              Professional Journey
            </Title>
            
            <Card 
              className="border-0 shadow-xl"
              style={{ 
                background: 'var(--background)',
                borderColor: 'var(--border)'
              }}
            >
              <Timeline
                mode="left"
                className="custom-timeline"
                items={experiences.map((exp, index) => ({
                  dot: (
                    <div 
                      className="w-6 h-6 rounded-full border-4 shadow-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: exp.status === 'current' ? 'var(--accent)' : 'var(--primary)',
                        borderColor: 'var(--background)',
                        boxShadow: exp.status === 'current' ? '0 0 10px rgba(38, 99, 235, 0.5)' : '0 0 5px rgba(59, 130, 246, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: exp.status === 'current' ? 'pointer' : 'default'
                      }}
                    >
                      {exp.status === 'current' && (
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      )}
                    </div>
                  ),
                  children: (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        className="ml-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{ 
                          background: 'var(--muted)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Title 
                                level={3} 
                                className="font-display mb-0"
                                style={{ color: 'var(--foreground)' }}
                              >
                                {exp.title}
                              </Title>
                              {exp.status === 'current' && (
                                <div 
                                  className="px-3 py-1 rounded-full text-xs font-bold"
                                  style={{
                                    padding: '0.25rem 0.5rem',
                                    margin: '0 0 0 4px',
                                    background: 'linear-gradient(135deg, var(--accent), var(--primary))',
                                    color: 'white'
                                  }}
                                >
                                  Current
                                </div>
                              )}
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-4">
                              <div className="flex items-center space-x-2">
                                <FaBriefcase style={{ color: 'var(--primary)' }} />
                                <Text 
                                  strong 
                                  className="text-lg"
                                  style={{ color: 'var(--foreground)', marginLeft: '0.25rem' }}
                                >
                                  {exp.company}
                                </Text>
                              </div>
                              <div className="flex items-center space-x-2">
                                <FaMapMarkerAlt style={{ color: 'var(--secondary)',marginLeft: '0.25rem' }} />
                                <Text style={{ color: 'var(--secondary)', marginLeft: '0.25rem' }}>
                                  {exp.location}
                                </Text>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-start lg:items-end space-y-2">
                            <div 
                              className="px-4 py-2 rounded-lg text-sm font-semibold"
                              style={{ 
                                background: 'var(--background)',
                                color: 'var(--primary)',
                                border: '1px solid var(--border)',
                                padding: '0.25rem 0.5rem',
                              }}
                            >
                              {exp.type}
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaCalendarAlt style={{ color: 'var(--secondary)' }} />
                              <Text style={{ color: 'var(--secondary)' }}>
                                {exp.period}
                              </Text>
                            </div>
                            <Text 
                              className="text-sm font-medium"
                              style={{ color: 'var(--primary)' }}
                            >
                              {exp.duration}
                            </Text>
                          </div>
                        </div>

                        <Divider style={{ borderColor: 'var(--border)' }} />

                        {/* Description */}
                        <Paragraph 
                          className="text-lg leading-relaxed mb-6"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {exp.description}
                        </Paragraph>

                        {/* Impact Metrics */}
                        {exp.impact && (
                          <div className="mb-6">
                            <Text 
                              strong 
                              className="block mb-4 text-lg"
                              style={{ color: 'var(--foreground)' }}
                            >
                              Impact & Results:
                            </Text>
                            <Row gutter={[16, 16]}>
                              {Object.entries(exp.impact).map(([key, value]) => (
                                <Col key={key} xs={24} sm={8}>
                                  <div className="text-center">
                                    <div 
                                      className="text-2xl font-bold mb-1"
                                      style={{ color: 'var(--primary)' }}
                                    >
                                      {value}{key === 'performance' || key === 'engagement' ? '%' : '+'}
                                    </div>
                                    <Text 
                                      className="text-sm capitalize"
                                      style={{ color: 'var(--secondary)' }}
                                    >
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </Text>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </div>
                        )}

                        <Divider style={{ borderColor: 'var(--border)' }} />

                        {/* Achievements */}
                        <div className="mb-6">
                          <Text 
                            strong 
                            className="block mb-4 text-lg"
                            style={{ color: 'var(--foreground)' }}
                          >
                            Key Achievements:
                          </Text>
                          <ul style={{ listStyle: 'disc inside', paddingLeft: '1rem', margin: 0 }}>
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '0.75rem',
                                  marginBottom: '0.5rem'
                                }}
                              >
                                <div
                                  style={{
                                    width: '0.5rem',
                                    height: '0.5rem',
                                    borderRadius: '9999px',
                                    marginTop: '0.5rem',
                                    flexShrink: 0,
                                    background: 'var(--primary)'
                                  }}
                                />
                                <Text style={{ color: 'var(--foreground)' }}>
                                  {achievement}
                                </Text>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <Text 
                            strong 
                            className="block mb-4 text-lg"
                            style={{ color: 'var(--foreground)' }}
                          >
                            Technologies Used:
                          </Text>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                            padding: '0.5rem',
                          }} className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <div
                                key={idx}
                                className="px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
                                style={{ 
                                  background: 'var(--background)',
                                  color: 'var(--foreground)',
                                  border: '1px solid var(--border)',
                                    padding: '0.25rem 0.5rem',
                                }}
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                }))}
              />
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} style={{
            margin: '2rem',
          }} className="text-center">
            <Card 
              className="border-0 shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, var(--muted), var(--background))',
                borderColor: 'var(--border)'
              }}
            >
              <Title 
                level={2} 
                className="font-display mb-6 text-3xl"
                style={{ color: 'var(--foreground)' }}
              >
                Ready to Work Together?
              </Title>
              <Paragraph 
                className="text-xl mb-8  leading-relaxed"
                style={{ color: 'var(--secondary)' }}
              >
                I&apos;m always excited to take on new challenges and contribute to innovative projects. 
                Let&apos;s discuss how I can help bring your ideas to life.
              </Paragraph>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </motion.button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
