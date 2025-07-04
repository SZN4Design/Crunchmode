
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { Upload, Download, Loader2 } from 'lucide-react';

const BackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setOriginalImage(url);
      setProcessedImage(null);
      setError(null);
    }
  };

  const processImage = async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    setError(null);

    try {
      // Load the image
      const response = await fetch(originalImage);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);

      // Remove background
      const processedBlob = await removeBackground(imageElement);
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedUrl);
    } catch (err) {
      console.error('Error processing image:', err);
      setError('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'logo-transparent.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Logo Background Remover</CardTitle>
          <CardDescription>
            Upload your logo image and remove its background to make it transparent
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Section */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <label htmlFor="image-upload" className="cursor-pointer">
              <Button variant="outline" className="mb-2">
                Choose Image
              </Button>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <p className="text-sm text-gray-500">PNG, JPG, or GIF up to 10MB</p>
          </div>

          {/* Image Preview Section */}
          {originalImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Original</h3>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <img
                    src={originalImage}
                    alt="Original"
                    className="max-w-full h-auto mx-auto"
                    style={{ maxHeight: '300px' }}
                  />
                </div>
              </div>

              {processedImage && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Transparent Background</h3>
                  <div className="border rounded-lg p-4 bg-transparent">
                    <div className="bg-checkerboard bg-opacity-20">
                      <img
                        src={processedImage}
                        alt="Processed"
                        className="max-w-full h-auto mx-auto"
                        style={{ maxHeight: '300px' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          {originalImage && (
            <div className="flex gap-4 justify-center">
              <Button
                onClick={processImage}
                disabled={isProcessing}
                className="bg-crunch-blue hover:bg-blue-600"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Remove Background'
                )}
              </Button>

              {processedImage && (
                <Button onClick={downloadImage} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-center p-4 bg-red-50 rounded-lg">
              {error}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BackgroundRemover;
