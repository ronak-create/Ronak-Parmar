import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript/TypeScript', level: 85 },
  { name: 'React/Next.js', level: 88 },
  { name: 'Node.js', level: 82 },
  { name: 'Machine Learning', level: 75 },
  { name: 'DevOps', level: 70 },
  { name: 'Java', level: 80 },
  { name: 'C', level: 75 },
  { name: 'Express', level: 80 },
  { name: 'Flask', level: 85 },
  { name: 'UI/UX', level: 75 },
  { name: 'GitHub', level: 90 },
  { name: 'Figma', level: 80 },
  { name: 'Bolt', level: 70 },
  { name: 'Claude', level: 70 },
  { name: 'OpenAI', level: 80 },
  { name: 'MySQL', level: 80 },
  { name: 'SQLAlchemy', level: 75 },
  { name: 'MongoDB', level: 80 },
];

export function Skills() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-2 rounded-lg bg-primary/10 group-hover:scale-105 group-hover:translate-y-1 transition-all ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
