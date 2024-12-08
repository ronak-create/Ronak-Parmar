import { Brain, Code, MessageSquare, User, Handshake, ClipboardList, Calendar, Book } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Quick Learner',
    description: 'Rapidly adapts to new technologies and methodologies',
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Problem Solver',
    description: 'Analytical approach to complex technical challenges',
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Communicator',
    description: 'Clear and effective technical communication',
  },
  {
    icon: <User className="h-8 w-8" />,
    title: 'Communication',
    description: 'Ability to effectively convey ideas and collaborate with teams',
  },
  {
    icon: <Handshake className="h-8 w-8" />,
    title: 'Dealing',
    description: 'Skilled in negotiating and managing stakeholder expectations',
  },
  {
    icon: <ClipboardList className="h-8 w-8" />,
    title: 'Project Management',
    description: 'Experienced in leading teams and managing projects to completion',
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Project Planning',
    description: 'Expert in setting goals, timelines, and resources for successful project delivery',
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Full Stack Development',
    description: 'Proficient in both front-end and back-end technologies',
  },
  {
    icon: <Book className="h-8 w-8" />,
    title: 'Literature',
    description: 'Passionate about reading and staying informed through literature',
  },
];

export function About() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground text-center">
            A self-taught developer passionate about creating innovative solutions through code. 
            My journey in technology is driven by curiosity and a constant desire to learn and grow. 
            I specialize in full-stack development and artificial intelligence, bringing ideas to life 
            through clean, efficient code.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-black/40 border-none">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}