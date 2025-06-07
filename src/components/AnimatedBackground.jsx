import { useEffect, useRef } from 'react';

const icons = [
    { src: '/skills/python.png', size: 40, speed: 0.5 },
    { src: '/skills/aws.png', size: 45, speed: 0.7 },
    { src: '/skills/sql.png', size: 35, speed: 0.6 },
    { src: '/skills/react.png', size: 40, speed: 0.8 },
    { src: '/skills/docker.png', size: 38, speed: 0.5 },
    { src: '/skills/git.png', size: 35, speed: 0.7 },
  ];;

function AnimatedBackground() {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let imagesLoaded = 0;
    let allImagesLoaded = false;

    // Set canvas size to parent (home-section)
    const resizeCanvas = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create more particles for a richer effect
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 18; i++) { // 3 of each icon
        const icon = icons[i % icons.length];
        const img = new Image();
        img.src = icon.src;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === 18) {
            allImagesLoaded = true;
            animate();
          }
        };
        img.onerror = () => {
          imagesLoaded++;
          if (imagesLoaded === 18) {
            allImagesLoaded = true;
            animate();
          }
        };
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: icon.size + Math.random() * 10,
          speed: icon.speed + Math.random() * 0.3,
          src: icon.src,
          image: img,
          opacity: 0.25 + Math.random() * 0.15, // More visible
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        // Move particle
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = -particle.size;
          particle.x = Math.random() * canvas.width;
        }
        // Draw particle if loaded, else fallback
        ctx.globalAlpha = particle.opacity;
        if (particle.image.complete && particle.image.naturalWidth !== 0) {
          ctx.drawImage(
            particle.image,
            particle.x,
            particle.y,
            particle.size,
            particle.size
          );
        } else {
          ctx.fillStyle = '#60a5fa44';
          ctx.beginPath();
          ctx.arc(
            particle.x + particle.size / 2,
            particle.y + particle.size / 2,
            particle.size / 2,
            0, 2 * Math.PI
          );
          ctx.fill();
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    // Only start animation after all images loaded
    // (handled in img.onload/img.onerror)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default AnimatedBackground; 