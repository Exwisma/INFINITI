import { useEffect, useRef, useState } from "react";
import {  Lightbulb, Ruler, Users} from "lucide-react";
import { useTranslation } from 'react-i18next';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();
  
  const values = [
    {
      icon: <Lightbulb className="w-10 h-10 text-gradient" />,
      title: t('About.Card.cardHeader1'),
      description:
      t('About.Card.cardFooter1'),
    },
    {
      icon: <Ruler className="w-10 h-10 text-gradient" />,
      title: t('About.Card.cardHeader2'),
      description:
       t('About.Card.cardFooter2'),
    },
    {
      icon: <Users className="w-10 h-10 text-gradient" />,
      title: t('About.Card.cardHeader2'),
      description:
       t('About.Card.cardFooter3'),
    },
  ];

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
      className="py-24 md:py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-light mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t('About.about')}
        </h2>

        <p
          className={`max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-16 leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-semibold text-foreground text-gradient">
            Infinity
          </span>{" "}
          — {t('About.description')}
        </p>

        <div
          className={`grid gap-10  lg:grid-cols-3 transition-all duration-1000 delay-400  ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-6">{value.icon}</div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
