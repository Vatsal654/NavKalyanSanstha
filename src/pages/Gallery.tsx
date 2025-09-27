import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Search } from 'lucide-react'; // Import Search icon

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Child receiving food' },
  { src: '/images/IMG-20200918-WA0011_onjlmn_1601462799.jpg', alt: 'Children eating together' },
  { src: '/images/gallery-2.jpg', alt: 'Child reaching for food' },
  { src: '/images/target-image1.jpg', alt: 'Children celebrating birthday' },
  { src: '/images/20190122164349_838A3181_D5P3M1bwCyu0x7.jpg', alt: 'Volunteer distributing food' },
  { src: '/images/istockphoto-941786374-612x612.jpg', alt: 'Children waiting for food' },
  { src: '/images/malmas-1-1024x683.jpg', alt: 'Donation in temple' },
  { src: '/images/woman-feeding-fresh-green-grass-cow-rural-setting_965060-885.jpg', alt: 'Woman feeding cow' },
  { src: '/images/cow-feeding-her-calf-varanasi-india-ali-kabas.jpg', alt: 'Cow feeding calf' },
  { src: '/images/gallery-3.jpg', alt: 'Food package being handed over' },
  { src: '/images/gallery-4.jpg', alt: 'Another food package being handed over' },
  { src: '/images/hero_2.jpg', alt: 'Kid with food plate' },
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