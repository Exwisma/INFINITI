import { useEffect, useRef, useState } from "react";
import { Building2, FileText, Landmark, UserCheck, DraftingCompass, Ruler, } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  const services = [
    {
      icon: <DraftingCompass className="w-10 h-10 text-gradient" />,
      title: t("Skills.Card.cardHeader1"),
      description: t("Skills.Card.cardFooter1"),
    },
    {
      icon: <FileText className="w-10 h-10 text-gradient" />,
      title: t("Skills.Card.cardHeader2"),
      description: t("Skills.Card.cardHeader2"),
    },
    {
      icon: <Landmark className="w-10 h-10 text-gradient" />,
      title: t("Skills.Card.cardHeader3"),
      description: t("Skills.Card.cardHeader3"),
    },
    {
      icon: <UserCheck className="w-10 h-10 text-gradient" />,
      title: t("Skills.Card.cardHeader4"),
      description: t("Skills.Card.cardHeader4"),
    },
    {
      icon: <Building2 className="w-10 h-10 text-gradient" />,
      title: t("Skills.Card.cardHeader5"),
      description: t("Skills.Card.cardHeader5"),
    },
    {
      icon: <Ruler className="w-10 h-10 text-gradient" />,
      title: t("Skills.Card.cardHeader6"),
      description: t("Skills.Card.cardHeader6"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 md:py-32 px-6 md:px-12 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-light mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("Skills.ourServices")}
        </h2>

        <div
          className={`grid gap-10 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
