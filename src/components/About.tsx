import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 bg-muted"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-light mb-12 text-center transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          О нас
        </h2>

        <div
          className={`space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground font-light transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p>
            <span className="font-medium text-foreground text-center">Infinity</span> 
            <br />
            <br />
          🏛️ Архитектурный дизайн -
          Современные концепции, уникальные решения.
          <br />
          <br />
          📄 Полный пакет документации -
          От идеи до чертежей.
          <br />
          <br />
          🏗️ Получение разрешения на строительство -
          Все этапы согласования.
          <br />
          <br />
          👷 Авторский надзор -
          Контроль качества и исполнения.
          <br />
          <br />
          📐 Проектирование любых типов объектов -
          Жилые, коммерческие, общественные.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
