import { Mail, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Contact() {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-black/40 border-none">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                </div>
                <Textarea placeholder="Your message" className="min-h-[150px]" />
                <Button className="w-full group" onClick={() => handleRedirect('mailto:ronakparmar2428@gmail.com')}>
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
              <div className="mt-8 flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleRedirect('mailto:ronakparmar2428@gmail.com')}
                >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleRedirect('https://www.linkedin.com/in/ronak-parmar-200019253/')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
