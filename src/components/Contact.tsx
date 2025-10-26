import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Send , Instagram, MapPin } from "lucide-react";
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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.phone) {
    toast.error("Пожалуйста, заполните все поля");
    return;
  }

  const BOT_TOKEN = "8374164866:AAEknfXChlRMd0BvdX3xbyCzg1dP0qXXlns"; // ⚠️ сюда вставляешь токен
  const CHAT_ID = "758234437"; // твой chat_id
  const message =  `📩 Yangi so‘rov:\n👤 Ism: ${formData.name}\n📞 Telefon raqami: ${formData.phone}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();

    if (data.ok) {
      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "" });
    } else {
      toast.error("Ошибка при отправке. Попробуйте позже.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Ошибка соединения. Попробуйте позже.");
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
                  name="name"
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
                  name="phone"
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
                <a href="tel:+998888848844"><Phone className="w-5 h-5 mt-1 flex-shrink-0" /></a>
                <div>
                  <a href="tel:+998888848844">
                    <p className="font-medium text-foreground mb-1">Телефон</p>
                    <p>+998 88 884 88 44</p>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <a href="https://t.me/infiniti_project_group"
                target="_blank"
                rel="noopener noreferrer">
              <Send className="w-5 h-5 mt-1 flex-shrink-0" /></a>
                <div>
                <a href="https://t.me/infiniti_project_group"
                   target="_blank"
                   rel="noopener noreferrer">
                    <p className="font-medium text-foreground mb-1">Telegram</p>
                    <p>@infiniti_project_group</p>
                </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
               <a  href="https://instagram.com/infiniti_project_group"
                  target="_blank"
                  rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mt-1 flex-shrink-0" /></a>
                <div>
                 <a  href="https://instagram.com/infiniti_project_group"
                  target="_blank"
                  rel="noopener noreferrer">
                   <p className="font-medium text-foreground mb-1">Instagram</p>
                   <p>infiniti_project_group</p>
                 </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
               <a  href="https://maps.google.com/?q=Toshkent%20shahar,%20Olmazor%20tumani,%20Nurafshon%20ko'chasi%2041"
                   target="_blank"
                   rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" /></a>
                <div>
                  <a href="https://maps.google.com/?q=Toshkent%20shahar,%20Olmazor%20tumani,%20Nurafshon%20ko'chasi%2041"
                   target="_blank"
                   rel="noopener noreferrer">
                    <p className="font-medium text-foreground mb-1">Адрес</p>
                    <p>Toshkent shahar, Olmazor tumani, Nurafshon ko'chasi 41 uy adawmasam</p>
                  </a>
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
