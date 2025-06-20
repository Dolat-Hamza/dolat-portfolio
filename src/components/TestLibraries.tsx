'use client';

import React from 'react';
import { Button, Card, Space, Typography } from 'antd';
import { motion } from 'framer-motion';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const { Title, Text } = Typography;

const TestLibraries: React.FC = () => {
  const chartOptions = {
    title: {
      text: 'Skills Proficiency'
    },
    chart: {
      type: 'column',
      height: 300
    },
    xAxis: {
      categories: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind']
    },
    yAxis: {
      title: {
        text: 'Proficiency Level'
      },
      max: 100
    },
    series: [{
      name: 'Skills',
      data: [95, 90, 88, 85, 92],
      color: '#2563eb'
    }],
    credits: {
      enabled: false
    }
  };

  return (
    <div className="p-8 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={1} className="text-center mb-8 font-display">
          Library Integration Test
        </Title>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card title="Ant Design Components" className="h-full">
            <Space direction="vertical" className="w-full">
              <Text>Testing Ant Design UI components:</Text>
              <Button type="primary" size="large">
                Primary Button
              </Button>
              <Button type="default">Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
            </Space>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card title="React Icons" className="h-full">
            <Text className="block mb-4">Testing React Icons library:</Text>
            <div className="flex space-x-4 text-3xl">
              <FaReact className="text-blue-500 hover:scale-110 transition-transform" />
              <SiNextdotjs className="text-black hover:scale-110 transition-transform" />
              <SiTypescript className="text-blue-600 hover:scale-110 transition-transform" />
              <FaNodeJs className="text-green-600 hover:scale-110 transition-transform" />
              <SiTailwindcss className="text-cyan-500 hover:scale-110 transition-transform" />
              <FaGithub className="text-gray-800 hover:scale-110 transition-transform" />
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card title="Highcharts Integration" className="mb-8">
          <Text className="block mb-4">Testing Highcharts data visualization:</Text>
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <Title level={3} className="text-gradient font-display">
          All Libraries Successfully Integrated! 🎉
        </Title>
        <Text className="text-lg">
          Ant Design, Framer Motion, Highcharts, Tailwind CSS, and React Icons are working perfectly together.
        </Text>
      </motion.div>
    </div>
  );
};

export default TestLibraries;
