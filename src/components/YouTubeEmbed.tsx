import { cn } from '@/lib/utils';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, title, className }: YouTubeEmbedProps) => {
  return (
    <div className={cn('space-y-3', className)}>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted shadow-soft">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Independent YouTube review. No dealership affiliation.
      </p>
    </div>
  );
};

export default YouTubeEmbed;
