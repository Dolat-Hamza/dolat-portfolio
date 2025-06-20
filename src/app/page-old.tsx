'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Header from '@/components/layout/Header';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const { Content } = Layout;

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <Layout className="min-h-screen">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Content>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="">
            <h1 className="text-6xl md:text-8xl font-light mb-4 font-display" style={{ color: 'var(--foreground)' }}>
              dolat hamza
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--secondary)' }}>
              frontend developer
            </p>
            <p className="text-lg mb-12  leading-relaxed" style={{ color: 'var(--secondary)' }}>
              hey 👋 i&apos;m dolat! passionate about creating exceptional digital experiences with modern web technologies. 
              currently working as a frontend developer at mobiz inc, building innovative solutions with react.js and next.js.
            </p>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </Content>
    </Layout>
  );
}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className={`shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'
                }`}>
                  <Title level={3} className={`mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Hello, I&apos;m Dolat Hamza 👋
                  </Title>
                  <Paragraph className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    I&apos;m a passionate Frontend Developer based in <Text strong>Islamabad, Pakistan</Text>, 
                    with over 3 years of experience in building modern web applications. I specialize in 
                    React.js, Next.js, and TypeScript, creating scalable and performant solutions.
                  </Paragraph>
                  <Paragraph className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Currently working as a Frontend Developer at <Text strong>Mobiz Inc</Text>, 
                    where I lead the development of innovative web applications and contribute to 
                    AI integration projects. Previously, I worked as a Design Engineer at 
                    <Text strong> CARE Pvt. Ltd</Text>, focusing on user experience and interface design.
                  </Paragraph>
                  <Paragraph className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    I hold a <Text strong>B.Sc. in Computer Science</Text> from COMSATS University Islamabad 
                    and am constantly learning new technologies to stay at the forefront of web development.
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>

            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Row gutter={[24, 24]}>
                  {[
                    { icon: <FaCode className="text-blue-500" />, title: "3+ Years Experience", desc: "Building scalable web applications" },
                    { icon: <FaRocket className="text-green-500" />, title: "Performance Focused", desc: "Optimizing for speed and UX" },
                    { icon: <FaBrain className="text-purple-500" />, title: "AI Integration", desc: "Implementing intelligent solutions" },
                    { icon: <FaHeart className="text-red-500" />, title: "User-Centric", desc: "Creating intuitive interfaces" }
                  ].map((item, index) => (
                    <Col key={index} xs={24} sm={12}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className={`text-center h-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                          isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'
                        }`}>
                          <div className="text-4xl mb-4 flex justify-center">
                            {item.icon}
                          </div>
                          <Title level={5} className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {item.title}
                          </Title>
                          <Paragraph className={`mb-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item.desc}
                          </Paragraph>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Title level={2} className={`text-4xl md:text-6xl mb-6 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Technical Skills
            </Title>
            <Paragraph className={`text-lg md:text-xl  leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              My toolkit includes a wide range of technologies that I&apos;ve mastered to create 
              exceptional digital experiences and robust web applications.
            </Paragraph>
          </motion.div>

          {Object.entries(skillsData).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Title level={3} className={`text-2xl md:text-3xl mb-8 text-center font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {category}
              </Title>
              
              <Row gutter={[24, 24]}>
                {techs.map((tech: any, index: number) => (
                  <Col key={tech.name} xs={24} sm={12} lg={8} xl={6}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Card className={`text-center h-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'
                      }`}>
                        <div className="text-4xl mb-4 flex justify-center">
                          {tech.icon}
                        </div>
                        <Title level={5} className={`mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {tech.name}
                        </Title>
                        <Progress
                          percent={tech.level}
                          strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                          }}
                          className="mb-3"
                        />
                        <div className="flex justify-between text-sm">
                          <Text className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {tech.years} years
                          </Text>
                          <Text className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {tech.projects} projects
                          </Text>
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Title level={2} className={`text-4xl md:text-6xl mb-6 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Experience
            </Title>
            <Paragraph className={`text-lg md:text-xl  leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              My professional journey in frontend development, building innovative solutions 
              and contributing to impactful projects.
            </Paragraph>
          </motion.div>

          <Row gutter={[32, 32]} className="mb-16">
            {statsData.map((stat, index) => (
              <Col key={index} xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`text-center shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'
                  }`}>
                    <div className="text-3xl mb-3 flex justify-center" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                    <Statistic
                      value={stat.value}
                      suffix={stat.suffix}
                      valueStyle={{ 
                        color: isDark ? '#fff' : '#1f2937',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                      }}
                    />
                    <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className={`shadow-2xl ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'}`}>
              <Title level={3} className={`text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Professional Journey
              </Title>
              
              <Timeline
                mode="left"
                items={experienceData.map((exp, index) => ({
                  dot: (
                    <div 
                      className="w-4 h-4 rounded-full border-4 border-white shadow-lg"
                      style={{ backgroundColor: exp.color }}
                    />
                  ),
                  children: (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className={`ml-4 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isDark ? 'bg-gray-600 border-gray-500' : 'bg-white'
                      }`}>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <Title level={4} className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {exp.title}
                            </Title>
                            <div className="flex items-center space-x-4 mb-2">
                              <div className="flex items-center space-x-1">
                                <FaBriefcase className="text-sm text-blue-500" />
                                <Text strong className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                                  {exp.company}
                                </Text>
                              </div>
                              <div className="flex items-center space-x-1">
                                <FaMapMarkerAlt className="text-sm text-red-500" />
                                <Text className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                  {exp.location}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <Badge color={exp.color} text={exp.type} className="mb-2" />
                            <Text className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              <FaCalendarAlt className="mr-1" />
                              {exp.period}
                            </Text>
                          </div>
                        </div>

                        <Paragraph className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {exp.description}
                        </Paragraph>

                        <div className="mb-4">
                          <Text strong className={`block mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Key Achievements:
                          </Text>
                          <ul className={`list-disc list-inside space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <Text strong className={`block mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Technologies Used:
                          </Text>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Tag key={idx} color="blue" className="mb-1">
                                {tech}
                              </Tag>
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Title level={2} className={`text-4xl md:text-6xl mb-6 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </Title>
            <Paragraph className={`text-lg md:text-xl  leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A showcase of my recent work, demonstrating my skills in modern web development 
              and innovative problem-solving.
            </Paragraph>
          </motion.div>

          <Row gutter={[32, 32]}>
            {projectsData.map((project, index) => (
              <Col key={project.id} xs={24} lg={12}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    className={`h-full shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'
                    }`}
                    cover={
                      <div className="relative h-64 overflow-hidden">
                        <AntImage
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          preview={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge 
                            count={project.category} 
                            style={{ backgroundColor: '#2563eb' }}
                            className="mb-2"
                          />
                          <Title level={4} className="text-white mb-0">
                            {project.title}
                          </Title>
                        </div>
                      </div>
                    }
                    onClick={() => showProjectModal(project)}
                  >
                    <div className="p-2">
                      <Paragraph className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.description}
                      </Paragraph>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Tag key={idx} color="blue" className="text-xs">
                            {tech}
                          </Tag>
                        ))}
                        {project.technologies.length > 3 && (
                          <Tag color="default" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Tag>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <Rate disabled defaultValue={project.rating} className="text-sm" />
                        <div className="flex space-x-2">
                          <Button 
                            type="text" 
                            icon={<FaEye />} 
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              showProjectModal(project);
                            }}
                          >
                            Details
                          </Button>
                          <Button 
                            type="text" 
                            icon={<FaExternalLinkAlt />} 
                            size="small"
                          >
                            Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Title level={2} className={`text-4xl md:text-6xl mb-6 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Let&apos;s Work Together
            </Title>
            <Paragraph className={`text-lg md:text-xl  leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Ready to bring your ideas to life? Let&apos;s discuss your next project 
              and create something amazing together.
            </Paragraph>
          </motion.div>

          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className={`shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'
                }`}>
                  <Title level={3} className={`mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Get In Touch
                  </Title>
                  
                  <div className="space-y-6">
                    {[
                      { 
                        icon: <FaEnvelope className="text-blue-500" />, 
                        label: 'Email', 
                        value: 'dolathamza8019@gmail.com',
                        link: 'mailto:dolathamza8019@gmail.com'
                      },
                      { 
                        icon: <FaLinkedin className="text-blue-600" />, 
                        label: 'LinkedIn', 
                        value: '/in/dolathamza',
                        link: 'https://linkedin.com/in/dolathamza'
                      },
                      { 
                        icon: <FaGithub className="text-gray-800" />, 
                        label: 'GitHub', 
                        value: '/dolathamza',
                        link: 'https://github.com/dolathamza'
                      },
                      { 
                        icon: <FaMapMarkerAlt className="text-red-500" />, 
                        label: 'Location', 
                        value: 'Islamabad, Pakistan',
                        link: null
                      }
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                          isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-2xl flex-shrink-0">{contact.icon}</div>
                        <div className="flex-1">
                          <Text className={`block text-sm uppercase tracking-wide mb-1 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {contact.label}
                          </Text>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              className={`text-lg font-medium hover:text-blue-500 transition-colors ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                              }`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <Text className={`text-lg font-medium ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {contact.value}
                            </Text>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Col>

            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className={`shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'
                }`}>
                  <Title level={3} className={`mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Send Message
                  </Title>
                  
                  <Form layout="vertical">
                    <Form.Item label="Name" required>
                      <Input size="large" placeholder="Your Name" />
                    </Form.Item>
                    <Form.Item label="Email" required>
                      <Input size="large" placeholder="your.email@example.com" />
                    </Form.Item>
                    <Form.Item label="Subject" required>
                      <Input size="large" placeholder="Project Discussion" />
                    </Form.Item>
                    <Form.Item label="Message" required>
                      <TextArea rows={4} placeholder="Tell me about your project..." />
                    </Form.Item>
                    <Form.Item>
                      <Button 
                        type="primary" 
                        size="large" 
                        block
                        icon={<FaArrowRight />}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 h-12 text-lg font-medium"
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        title={selectedProject?.title}
        open={isProjectModalVisible}
        onCancel={() => setIsProjectModalVisible(false)}
        footer={null}
        width={800}
        className={isDark ? 'dark-modal' : ''}
      >
        {selectedProject && (
          <div>
            <AntImage
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <Tabs defaultActiveKey="overview">
              <TabPane tab="Overview" key="overview">
                <div className="space-y-4">
                  <Paragraph className="text-lg">
                    {selectedProject.longDescription}
                  </Paragraph>
                  
                  <div>
                    <Title level={5} className="mb-3">Key Features:</Title>
                    <List
                      dataSource={selectedProject.features}
                      renderItem={(feature: string) => (
                        <List.Item className="border-none px-0 py-2">
                          <div className="flex items-start space-x-3">
                            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                            <Text>{feature}</Text>
                          </div>
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </TabPane>
              
              <TabPane tab="Technologies" key="technologies">
                <div className="space-y-4">
                  <Title level={5}>Technologies Used:</Title>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, idx: number) => (
                      <Tag key={idx} color="blue" className="mb-2 px-3 py-1 text-sm">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Rate disabled defaultValue={selectedProject.rating} className="mb-2" />
                    <Text className="block text-gray-600">
                      Project Rating: {selectedProject.rating}/5
                    </Text>
                  </div>
                </div>
              </TabPane>
            </Tabs>
            
            <div className="flex justify-end space-x-4 mt-6 pt-4 border-t">
              <Button icon={<FaGithub />}>
                View Code
              </Button>
              <Button type="primary" icon={<FaExternalLinkAlt />}>
                Live Demo
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Footer */}
      <footer className={`py-12 px-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className=" text-center">
          <Paragraph className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 developed with ❤️ by dolat hamza
          </Paragraph>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/dolathamza" 
              className={`flex items-center space-x-2 hover:opacity-70 transition-opacity ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/dolathamza" 
              className={`flex items-center space-x-2 hover:opacity-70 transition-opacity ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:dolathamza8019@gmail.com" 
              className={`flex items-center space-x-2 hover:opacity-70 transition-opacity ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
