import { useState, useEffect } from "react";
import logo from "@/assets/logo.png"; // или .svg — добавь сюда свой логотип

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Только логотип */}
        <button
          onClick={() => scrollToSection("home")}
          className="hover:opacity-90 transition-opacity"
        >
          <img
            src={logo}
            alt="Infinity logo"
            className="h-20 w-36 h-auto md:w-44 object-contain"
          />
        </button>

        {/* Навигация */}
        <div className="flex items-center gap-8 md:gap-12 text-sm md:text-base font-light">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:opacity-70 transition-opacity"
          >
            О нас
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:opacity-70 transition-opacity"
          >
            Проекты
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:opacity-70 transition-opacity"
          >
            Контакты
          </button>

          {/* Переключатель языков (без функционала) */}
          <div className="flex items-center gap-2 border-l pl-4 border-gray-300 text-sm">
            <button className="opacity-100 font-semibold hover:opacity-80 transition-opacity">
              RU
            </button>
            <span className="text-gray-400">|</span>
            <button className="opacity-60 hover:opacity-100 transition-opacity">
              UZ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
