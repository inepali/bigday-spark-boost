import { useEffect, useState } from 'react';
import { processLogoBackgroundRemoval } from '@/utils/backgroundRemoval';
import { useToast } from '@/components/ui/use-toast';

interface LogoProcessorProps {
  onProcessed: (processedUrl: string) => void;
  children: React.ReactNode;
}

const LogoProcessor = ({ onProcessed, children }: LogoProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        const processedUrl = await processLogoBackgroundRemoval();
        onProcessed(processedUrl);
        toast({
          title: "Logo processed",
          description: "Background removed successfully",
        });
      } catch (error) {
        console.error('Failed to process logo:', error);
        toast({
          title: "Processing failed",
          description: "Could not remove background from logo",
          variant: "destructive",
        });
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [onProcessed, toast]);

  if (isProcessing) {
    return (
      <div className="flex items-center">
        <div className="h-12 w-32 bg-accent animate-pulse rounded" />
        <span className="ml-2 text-sm text-muted-foreground">Processing logo...</span>
      </div>
    );
  }

  return <>{children}</>;
};

export default LogoProcessor;