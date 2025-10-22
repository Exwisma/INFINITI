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
            <span className="font-medium text-foreground">Infinity</span> —
            современная архитектурная студия, где креативность соединяется с
            инженерной точностью и современными технологиями.
          </p>

          <p>
            Мы предлагаем полный спектр услуг: архитектурное проектирование,
            подготовку всей необходимой документации, получение разрешения на
            строительство и авторский надзор за реализацией проекта.
          </p>

          <p>
            Мы работаем с любыми типами объектов — от жилых домов до
            коммерческих зданий — создавая эстетичные, функциональные и
            вдохновляющие пространства.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
