import { useEffect, useRef, useState } from "react";
import { Building2, Lightbulb, Ruler, Users, ShieldCheck, Award } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-10 h-10 text-gradient" />,
    title: "Современные решения",
    description:
      "Мы внедряем инновационные технологии и создаём архитектуру будущего — эстетичную, энергоэффективную и функциональную.",
  },
  {
    icon: <Ruler className="w-10 h-10 text-gradient" />,
    title: "Точность и профессионализм",
    description:
      "Каждый проект разрабатывается с вниманием к деталям и строгим соблюдением стандартов качества.",
  },
  {
    icon: <Users className="w-10 h-10 text-gradient" />,
    title: "Ориентация на клиента",
    description:
      "Мы строим не просто здания — мы создаём комфортное пространство, отражающее индивидуальность заказчика.",
  },
  // {
  //   icon: <ShieldCheck className="w-10 h-10 text-gradient" />,
  //   title: "Надёжность и контроль",
  //   description:
  //     "От концепции до сдачи — мы контролируем каждый этап, гарантируя точность и безопасность.",
  // },
  // {
  //   icon: <Building2 className="w-10 h-10 text-gradient" />,
  //   title: "Полный цикл работ",
  //   description:
  //     "Архитектурное проектирование, документация, согласование и авторский надзор — всё в одном месте.",
  // },
  // {
  //   icon: <Award className="w-10 h-10 text-gradient" />,
  //   title: "Качество и репутация",
  //   description:
  //     "Infinity — это доверие, проверенное годами. Мы гордимся реализованными проектами и довольными клиентами.",
  // },
];

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
      className="py-24 md:py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-light mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          О нас
        </h2>

        <p
          className={`max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-16 leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-semibold text-foreground text-gradient">
            Infinity
          </span>{" "}
          — команда профессионалов, создающая архитектурные и инженерные
          решения, в которых соединяются эстетика, технологии и комфорт.
          Мы проектируем и строим пространства, которые вдохновляют и живут
          десятилетиями.
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
