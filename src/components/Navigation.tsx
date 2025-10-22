import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-xl md:text-2xl font-light tracking-wider hover:opacity-70 transition-opacity"
        >
          INFINITY
        </button>
        
        <div className="flex gap-8 md:gap-12 text-sm md:text-base font-light">
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:opacity-70 transition-opacity"
          >
            О нас
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:opacity-70 transition-opacity"
          >
            Проекты
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:opacity-70 transition-opacity"
          >
            Контакты
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
