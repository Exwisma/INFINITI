import { useEffect, useRef, useState } from "react";
import projectResidential from "../assets/infiniti-img/infiniti-img15.jpg";
import projectOffice from "../assets/infiniti-img/infiniti-img9.jpg";
import projectVilla from "../assets/infiniti-img/infiniti-img4.jpg";
import projectConcept from "../assets/infiniti-img/infiniti-img3.jpg";
import projectApartment from "../assets/infiniti-img/infiniti-img14.jpg";
import projectCultural from "../assets/infiniti-img/infiniti-img19.jpg";
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 1,
    image: projectResidential,
  },
  {
    id: 2,
    image: projectOffice,
  },
  {
    id: 3,
    image: projectVilla,
  },
  {
    id: 4,
    image: projectConcept,
  },
  {
    id: 5,
    image: projectApartment,
  },
  {
    id: 6,
    image: projectCultural,
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation()
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="projects" 
      className="py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`text-4xl md:text-5xl font-light mb-16 text-center transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
         {t("Project.project")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-secondary aspect-square">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>
              
              <h3 className="mt-4 text-lg md:text-xl font-light tracking-wide text-foreground group-hover:text-foreground/70 transition-colors">
                {/* {project.title} */}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
