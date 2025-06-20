'use client';

import React from 'react';
import { Card, Typography, Tag, Row, Col, Progress, Divider } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaCode, 
  FaRocket, 
  FaBrain, 
  FaHeart, 
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward
} from 'react-icons/fa';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFramer,
  SiJavascript,
  SiGit,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';

const { Title, Paragraph, Text } = Typography;

const AboutSection: React.FC = () => {
  const skills = [
    { 
      name: 'React.js', 
      icon: <SiReact />, 
      level: 95,
      category: 'Frontend'
    },
    { 
      name: 'Next.js', 
      icon: <SiNextdotjs />, 
      level: 90,
      category: 'Frontend'
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript />, 
      level: 88,
      category: 'Language'
    },
    { 
      name: 'JavaScript', 
      icon: <SiJavascript />, 
      level: 92,
      category: 'Language'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss />, 
      level: 92,
      category: 'Styling'
    },
    { 
      name: 'Node.js', 
      icon: <SiNodedotjs />, 
      level: 85,
      category: 'Backend'
    },
    { 
      name: 'Framer Motion', 
      icon: <SiFramer />, 
      level: 80,
      category: 'Animation'
    },
    { 
      name: 'Git', 
      icon: <SiGit />, 
      level: 88,
      category: 'Tools'
    }
  ];

  const achievements = [
    {
      icon: <FaCode />,
      title: "3+ Years Experience",
      description: "Building scalable web applications",
      metric: "50+ Projects"
    },
    {
      icon: <FaRocket />,
      title: "Performance Expert",
      description: "Optimizing applications for speed and user experience",
      metric: "40% Faster"
    },
    {
      icon: <FaBrain />,
      title: "AI Integration",
      description: "Implementing AI-powered features and intelligent solutions",
      metric: "10+ AI Features"
    },
    {
      icon: <FaAward />,
      title: "Quality Focused",
      description: "Creating intuitive interfaces that users love",
      metric: "99% Uptime"
    }
  ];

  const personalInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Islamabad, Pakistan"
    },
    {
      icon: <FaGraduationCap />,
      label: "Education",
      value: "B.Sc. Computer Science"
    },
    {
      icon: <FaCalendarAlt />,
      label: "Experience",
      value: "3+ Years"
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
      id="about" 
      className="min-h-screen py-20 px-4 md:px-8"
      style={{ background: 'var(--background)' }}
    >
      <div className="w-full flex flex-row justify-center items-center">
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
              <span className="text-gradient">About Me</span>
            </Title>
            <Paragraph 
              className="text-xl md:text-2xl  leading-relaxed"
              style={{ color: 'var(--secondary)', fontSize: '1.25rem' }}
            >
              Frontend Developer passionate about creating exceptional digital experiences 
              with cutting-edge technologies and innovative solutions.
            </Paragraph>
          </motion.div>

          {/* Main Content Grid */}
          <Row gutter={[20, 20]} className="mb-20 flex flex-row items-center justify-center ">
            {/* Left Column - Personal Info & Image */}
            <Col xs={24} lg={10}>
              <motion.div variants={itemVariants} className=" flex flex-col  items-center w-full gap-6 ">
                {/* Professional Image */}
                <div className="text-center">
                  <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/camera-professional.jpg"
                      alt="Professional camera representing creativity and technology in development"
                      fill
                      className="object-cover rounded-full"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/400x400/2563eb/ffffff?text=Portfolio';
                      }}
                    />
                  </div>
                </div>

                {/* Personal Information Cards */}
                <div className="flex flex-col gap-6 w-4/5 ">
                  {personalInfo.map((info, index) => (
                    <motion.div
                        className={""}
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        className="border-0 shadow-md hover:shadow-lg transition-all duration-300"
                        style={{ 
                          background: 'var(--muted)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        <div className="flex items-center gap-6">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                            style={{ 
                              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                              color: 'white'
                            }}
                          >
                            {info.icon}
                          </div>
                          <div>
                            <Text 
                              className="text-sm font-medium block"
                              style={{ color: 'var(--secondary)' }}
                            >
                              {info.label}
                            </Text>
                            <Text 
                              className="text-lg font-semibold"
                              style={{ color: 'var(--foreground)' }}
                            >
                              {info.value}
                            </Text>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* Right Column - About Content */}
            <Col xs={24} lg={14}>
              <motion.div variants={itemVariants} className="space-y-8">
                <Card 
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  style={{ 
                    background: 'var(--background)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <Title 
                    level={2} 
                    className="font-display mb-6"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Hello, I&apos;m Dolat Hamza 👋
                  </Title>
                  
                  <div className="space-y-6">
                    <Paragraph 
                      className="text-lg leading-relaxed"
                      style={{ color: 'var(--foreground)' }}
                    >
                      I&apos;m a passionate <Text strong style={{ color: 'var(--primary)' }}>Frontend Developer</Text> based in 
                      Islamabad, Pakistan, with over 3 years of experience in building modern web applications. 
                      I specialize in React.js, Next.js, and TypeScript, creating scalable and performant solutions 
                      that deliver exceptional user experiences.
                    </Paragraph>
                    
                    <Divider style={{ borderColor: 'var(--border)' }} />
                    
                    <Paragraph 
                      className="text-lg leading-relaxed"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Currently working as a <Text strong style={{ color: 'var(--primary)' }}>Frontend Developer at Mobiz Inc</Text>, 
                      where I lead the development of innovative web applications and contribute to AI integration projects. 
                      My expertise spans across modern JavaScript frameworks, responsive design, and performance optimization.
                    </Paragraph>
                    
                    <Divider style={{ borderColor: 'var(--border)' }} />
                    
                    <Paragraph 
                      className="text-lg leading-relaxed"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Previously, I worked as a <Text strong style={{ color: 'var(--primary)' }}>Design Engineer at CARE Pvt. Ltd</Text>, 
                      focusing on user experience and interface design. I hold a B.Sc. in Computer Science from 
                      COMSATS University Islamabad and am constantly learning new technologies to stay at the 
                      forefront of web development.
                    </Paragraph>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Technical Skills Section */}
          <motion.div variants={itemVariants} style={
            { background: 'var(--background)', padding: '2rem', borderRadius: '12px' }
          } className="mb-20">
            <Title 
              level={2} 
              className="text-center font-display mb-12 text-4xl"
              style={{ color: 'var(--foreground)' }}
            >
              Technical Expertise
            </Title>
            
            <Card 
              className="border-0 shadow-xl "
              style={{ 
                background: 'var(--background)',
                borderColor: 'var(--border)',
                padding: '2rem'
              }}
            >
              <Row gutter={[70, 70]} style={{ gap: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {skills.map((skill, index) => (
                  <Col key={skill.name} xs={24} sm={12} lg={8} xl={6}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center px-10"
                    >
                      <div 
                        className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                          color: 'white'
                        }}
                      >
                        {skill.icon}
                      </div>
                      <Text 
                        className="block text-lg font-semibold mb-2"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {skill.name}
                      </Text>
                      <Text 
                        className="block text-sm mb-3"
                        style={{ color: 'var(--secondary)' }}
                      >
                        {skill.category}
                      </Text>
                      <Progress
                        percent={skill.level}
                        showInfo={false}
                        strokeColor={{
                          '0%': 'var(--primary)',
                          '100%': 'var(--accent)',
                        }}
                        trailColor="var(--border)"
                        className="mb-2"
                      />
                      <Text 
                        className="text-sm font-medium"
                        style={{ color: 'var(--primary)' }}
                      >
                        {skill.level}%
                      </Text>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Card>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} style={{
            background: 'var(--background)',
            padding: '1rem',
            marginBottom: '2rem',

          }} className="mb-20">
            <Title 
              level={2} 
              className="text-center font-display mb-12 text-4xl"
              style={{ color: 'var(--foreground)', marginBottom: '2rem' }}
            >
              What I Bring to the Table
            </Title>
            <Row gutter={[32, 32]}>
              {achievements.map((achievement, index) => (
                <Col key={index} xs={24} sm={12} lg={6}>
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
                        className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                          color: 'white'
                        }}
                      >
                        {achievement.icon}
                      </div>
                      <Title 
                        level={4} 
                        className="font-display mb-3"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {achievement.title}
                      </Title>
                      <Paragraph 
                        className="mb-4"
                        style={{ color: 'var(--secondary)' }}
                      >
                        {achievement.description}
                      </Paragraph>
                      <div 
                        className="inline-block  rounded-full text-sm font-bold"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                          color: 'white',
                            padding: '0.5rem 1rem',
                        }}
                      >
                        {achievement.metric}
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          {/* Technologies Section */}
          <motion.div variants={itemVariants} style={{
            background: 'var(--background)',
            padding: '1rem',
            marginBottom: '2rem'
          }} className="text-center">
            <Title 
              level={2} 
              className="font-display mb-12 text-4xl"
              style={{ color: 'var(--foreground)' }}
            >
              Technologies I Work With
            </Title>
            
            <Card 
              className="border-0 shadow-xl"
              style={{ 
                background: 'var(--background)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 
                  'Node.js', 'Framer Motion', 'Ant Design', 'Git', 'CI/CD', 
                  'Android SDK', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="rounded-full text-sm font-semibold cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
                      style={{ 
                        background: 'var(--muted)',
                        color: 'var(--foreground)',
                        border: '1px solid var(--border)'
                    , padding: '0.5rem 1rem', margin: '0.25rem 0'
                    }}
                    >
                      {tech}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
