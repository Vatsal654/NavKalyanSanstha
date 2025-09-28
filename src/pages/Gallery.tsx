import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Search } from 'lucide-react'; // Import Search icon

const images = [
  { src: '/images/donation-receive-1.jpg', alt: 'Person receiving food packet' },
  { src: '/images/birthday-girl-srishti.jpg', alt: 'Girl celebrating birthday' },
  { src: '/images/cake-feeding-children.jpg', alt: 'Woman feeding cake to children' },
  { src: '/images/donation-receive-2.jpg', alt: 'Child receiving food packet' },
  { src: '/images/man-praying-money.jpg', alt: 'Man praying with money' },
  { src: '/images/birthday-girl-cake.jpg', alt: 'Girl with birthday hat and cake' },
  { src: '/images/donation-receive-3.jpg', alt: 'Child reaching for food packet' },
  { src: '/images/cake-cutting-children.jpg', alt: 'Woman cutting cake with children' },
  { src: '/images/donation-receive-1.jpg', alt: 'Person receiving food packet' }, // Repeat to fill
  { src: '/images/birthday-girl-srishti.jpg', alt: 'Girl celebrating birthday' }, // Repeat to fill
  { src: '/images/cake-feeding-children.jpg', alt: 'Woman feeding cake to children' }, // Repeat to fill
  { src: '/images/donation-receive-2.jpg', alt: 'Child receiving food packet' }, // Repeat to fill
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Our Gallery</h1>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Witness the profound impact of your generosity through these heartwarming moments of hope and love. Our gallery showcases the real difference made by our food distribution drives, special events, and community interactions. Click on any image to enlarge and experience the joy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group min-h-[150px] bg-gray-200"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Search className="h-8 w-8 text-white" />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;