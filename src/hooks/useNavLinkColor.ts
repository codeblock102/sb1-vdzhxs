import { useLocation } from 'react-router-dom';

export function useNavLinkColor() {
  const location = useLocation();
  
  const isLightBackground = () => {
    // Pages with light backgrounds
    const lightBgRoutes = ['/', '/about', '/contact','/portfolio','/book'];
    return lightBgRoutes.includes(location.pathname);
  };

  return {
    textColor: isLightBackground() ? 'text-[#00274D]' : 'text-white',
    hoverColor: isLightBackground() ? 'hover:text-[#00A9E0]' : 'hover:text-[#00A9E0]',
    logoTextColor: isLightBackground() ? 'text-[#00274D]' : 'text-white',
    menuIconColor: isLightBackground() ? 'text-[#00274D]' : 'text-white',
    mobileMenuBg: isLightBackground() ? 'bg-white/95' : 'bg-[#00274D]/95'
  };
}