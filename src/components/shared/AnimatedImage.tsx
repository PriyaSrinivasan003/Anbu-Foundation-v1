import React, { useState, useEffect, useRef } from 'react';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  darkSkeleton?: boolean;
  className?: string;
  containerStyle?: React.CSSProperties;
  enableHoverZoom?: boolean;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  fallbackSrc = '/images/sunset_hero.jpg',
  aspectRatio,
  darkSkeleton = false,
  className = '',
  containerStyle = {},
  enableHoverZoom = false,
  style = {},
  loading = 'lazy',
  ...props
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [src]);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        aspectRatio: aspectRatio,
        ...containerStyle
      }}
      className={`animated-image-wrapper ${className}`}
    >
      {/* Animated Shimmer Skeleton (active only while image is loading) */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className={darkSkeleton ? 'img-skeleton-shimmer-dark' : 'img-skeleton-shimmer'}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      {/* Main Image with Progressive Entrance Animation */}
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`img-load-fade ${isLoaded ? 'is-loaded' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: enableHoverZoom
            ? 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease'
            : 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease',
          ...style
        }}
        {...props}
      />
    </div>
  );
};
