import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  placeholder?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  sizes = '100vw',
  placeholder
}: OptimizedImageProps) {
  // Generate SEO-friendly alt text if not provided
  const generateAltText = (imageSrc: string, customAlt: string) => {
    if (customAlt && customAlt.trim() !== '') {
      return customAlt;
    }
    
    // Extract meaningful alt text from filename
    const filename = imageSrc.split('/').pop()?.split('.')[0] || '';
    const words = filename.split(/[-_]/).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return words || 'Pharmaceutical consulting services image';
  };

  const optimizedAlt = generateAltText(src, alt);

  return (
    <img
      src={src}
      alt={optimizedAlt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : loading}
      sizes={sizes}
      style={{
        backgroundColor: placeholder || '#f3f4f6',
        objectFit: 'cover',
      }}
      onLoad={(e) => {
        // Track image load for analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'image_load', {
            event_category: 'engagement',
            event_label: src,
          });
        }
      }}
      onError={(e) => {
        // Handle image load errors
        const target = e.target as HTMLImageElement;
        if (placeholder) {
          target.src = placeholder;
        }
      }}
    />
  );
}

// Hero Image Component with specific pharmaceutical industry optimization
export function HeroImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`w-full h-auto ${className}`}
      priority={true}
      loading="eager"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    />
  );
}

// Service Icon Component
export function ServiceIcon({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`w-16 h-16 ${className}`}
      width={64}
      height={64}
      loading="lazy"
      sizes="64px"
    />
  );
}

// Team Member Image Component
export function TeamMemberImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`w-32 h-32 rounded-full object-cover ${className}`}
      width={128}
      height={128}
      loading="lazy"
      sizes="128px"
    />
  );
}

// Logo Component
export function Logo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`h-8 w-auto ${className}`}
      priority={true}
      loading="eager"
      sizes="(max-width: 768px) 120px, 200px"
    />
  );
} 