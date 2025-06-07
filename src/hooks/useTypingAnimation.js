import { useState, useEffect } from 'react';

const phrases = [
  "Financial Technology & Analytics 📊",
  "Machine Learning 🤖",
  "Generative AI 💻"
];

export function useTypingAnimation() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        // Pause at the end of typing
        setSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setSpeed(100);
      } else {
        // Type or delete
        setText(isDeleting 
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1)
        );
        setSpeed(isDeleting ? 50 : 100);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting, speed]);

  return text;
} 