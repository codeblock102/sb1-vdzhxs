import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useNavLinkColor() {
  const location = useLocation();
  const [textColor, setTextColor] = useState<string>('text-dark');

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Function to get the background color of the element behind the navbar
    const detectBackgroundColor = () => {
      const elements = document.elementsFromPoint(
        navbar.getBoundingClientRect().left,
        navbar.getBoundingClientRect().bottom
      );

      // Find the first element behind the navbar that isn't the navbar itself
      const elementBehind = elements.find(el => el !== navbar) as HTMLElement;

      if (elementBehind) {
        const style = window.getComputedStyle(elementBehind);
        const backgroundColor = style.backgroundColor;
        setTextColor(getContrastingColor(backgroundColor));
      }
    };

    // Helper function to determine the contrasting text color
    const getContrastingColor = (bgColor: string): string => {
      const match = bgColor.match(/rgba?\((\d+), (\d+), (\d+)/);
      if (!match) return 'text-dark'; // Default text color

      const [, r, g, b] = match.map(Number);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? 'text-dark' : 'text-light';
    };

    // Detect the background color on mount and when the location changes
    detectBackgroundColor();

    // Optional: Re-run detection on scroll for dynamic updates
    const handleScroll = () => detectBackgroundColor();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return { textColor };
}
