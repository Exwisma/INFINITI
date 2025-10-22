import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Instagram, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "" });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 md:py-32 px-6 md:px-12 bg-muted"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-4xl md:text-5xl font-light mb-16 text-center transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Контакты
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-light mb-8">Свяжитесь с нами</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-light">
                  Имя
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 bg-background border-border focus:border-foreground transition-colors"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-base font-light">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 bg-background border-border focus:border-foreground transition-colors"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-light tracking-wide py-6"
              >
                Отправить
              </Button>
            </form>
          </div>
          
          <div 
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-light mb-8">Наши контакты</h3>
            
            <div className="space-y-6 text-muted-foreground font-light">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <p>info@infinity.uz</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MessageCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Telegram</p>
                  <p>infiniti_project_group</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Instagram</p>
                  <p>infiniti_project_group</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Адрес</p>
                  <p>Toshkent shahar, Olmazor tumani, Nurafshon ko'chasi 41 uy adawmasam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
