import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Women Safety Analytics',
    description: 'A real-time threat detection system using YOLOv8 and transfer learning for gender classification, enhancing women\'s safety through surveillance, anomaly detection, and proactive alerts.',
    github: 'https://github.com/ronak-create/Women_Saftey_Analytics-Surakshita',
    demo: 'https://ronakparmarmm.pythonanywhere.com/',
    tags: ['Python', 'YOLOv8', 'AI', 'Flask', 'Android Studio', 'SQLite'],
  },
  {
    title: 'Public Grievance System',
    description: 'A web-based platform to address and manage public grievances efficiently, with a centralized system for lodging complaints regarding various issues.',
    github: 'https://github.com/ronak-create/public-grievance-system',
    demo: '',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'JavaScript', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'International Business Toolkit Platform',
    description: 'A dynamic platform designed to help businesses scale by streamlining operations, connecting with potential partners, and leveraging data-driven insights for growth.',
    github: 'https://github.com/ronak-create/intl-expansion-platform',
    demo: 'https://intl-expansion-platform-qgew.vercel.app/',
    tags: ['React', 'Node.js', 'Analytics', 'MongoDB', 'OpenAi', 'Tailwind CSS', 'Vercel', "GitHub"],
  },
  {
    title: 'Proxy Management System',
    description: 'A system designed to streamline proxy management and leave allocation processes, with role-based access for admins and users to manage proxies and leave requests.',
    github: 'https://github.com/ronak-create/Proxy-Management-System',
    demo: '',
    tags: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Letter Recognition Using ANN/CNN',
    description: 'An optical character recognition (OCR) system using a Convolutional Neural Network (CNN) to identify handwritten letters and numbers with high accuracy.',
    github: 'https://github.com/ronak-create/CNN-Letter_Identification',
    demo: '',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
  },
  {
    title: 'TALKS - Social Media Platform',
    description: 'A platform designed for community engagement, knowledge sharing, and networking, connecting individuals for meaningful interactions and collaboration.',
    github: '',
    demo: 'https://talks.pythonanywhere.com/',
    tags: ['Python', 'Flask', 'WebApp', 'Stripe'],
  },
  {
    title: 'Food Suggestion System',
    description: 'A Flask web app that provides food recommendations based on the current weather conditions of a city using the OpenWeatherMap API.',
    github: 'https://github.com/ronak-create/Food-suggestion-according_to_weather',
    demo: '',
    tags: ['Python', 'Flask', 'OpenWeatherMap API'],
  },
  {
    title: '3D Real-time Weather Application',
    description: 'A Flask-based app that provides real-time weather data, processing and displaying weather conditions with future expansion plans.',
    github: 'https://github.com/ronak-create/Weather-Application',
    demo: '',
    tags: ['Python', 'Flask', 'OpenWeatherMap API'],
  },
  {
    title: 'Multilingual Chatting Application',
    description: 'A full-stack chat application that supports multiple languages, featuring user authentication, real-time messaging, and automatic language translation.',
    github: 'https://github.com/ronak-create/Multilingual-chatting-app',
    demo: '',
    tags: ['Python', 'Flask', 'Socket.io', 'MyMemoryTranslator'],
  },
];

export function Projects() {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);
  return (
    <section className="py-20" ref={featuredProjectsRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/40 border-none hover:bg-black/60 transition-colors">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="group">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="group">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
