import { Github, X, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ronak Parmar. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" onClick={() => handleRedirect('https://github.com/ronak-create')}>
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleRedirect('https://x.com/RonakParmar__')}>
              <X className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleRedirect('https://www.linkedin.com/in/ronak-parmar-200019253/')}>
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
