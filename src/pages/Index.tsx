import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import AudioPlayer from "@/components/AudioPlayer";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Mic",
      title: "Коммерческая озвучка",
      description: "Реклама, промо-ролики, корпоративные презентации",
    },
    {
      icon: "BookOpen",
      title: "Аудиокниги",
      description: "Художественная литература, документальные книги, образовательные материалы",
    },
    {
      icon: "Tv",
      title: "Озвучивание видео",
      description: "YouTube, обучающие курсы, документальные фильмы",
    },
    {
      icon: "Radio",
      title: "Радиореклама",
      description: "Джинглы, радиоролики, подкасты",
    },
    {
      icon: "Film",
      title: "Дубляж и войсовер",
      description: "Перевод и озвучка иностранного контента",
    },
    {
      icon: "Gamepad2",
      title: "Игры и анимация",
      description: "Персонажи игр, анимационные проекты, интерактивный контент",
    },
  ];

  const portfolio = [
    {
      type: "audio",
      title: "Коммерческая реклама - Премиум бренд",
      description: "30-секундный рекламный ролик для премиального автомобильного бренда",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      type: "video",
      title: "Корпоративная презентация",
      description: "Озвучка презентации для международной компании",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    },
    {
      type: "audio",
      title: "Аудиокнига - Детектив",
      description: "Фрагмент из аудиокниги в жанре детектив",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-heading font-bold text-primary">
            Голос Профи
          </h2>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Главная
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              Обо мне
            </a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">
              Портфолио
            </a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Услуги
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Ваш голос для любого проекта
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональная озвучка для рекламы, аудиокниг, видео и корпоративных проектов. 
                Более 10 лет опыта работы в индустрии.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="#contact">Заказать озвучку</a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#portfolio" className="flex items-center gap-2">
                    <Icon name="Play" size={20} />
                    Послушать примеры
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6da55f12-0ad4-4d9e-9002-7e70aece3fd1/files/220ef686-d7e8-4b65-a08c-7212ad17c720.jpg"
                alt="Профессиональный диктор"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
            Обо мне
          </h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Я профессиональный диктор с более чем 10-летним опытом работы в индустрии озвучивания. 
                Моя карьера началась с работы на радио, где я оттачивал технику голоса и учился работать 
                с различными форматами контента.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                За годы работы я озвучил сотни проектов - от коммерческой рекламы до аудиокниг, 
                от корпоративных презентаций до документальных фильмов. Каждый проект уникален, 
                и я подхожу к нему с максимальной ответственностью и профессионализмом.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">500+</div>
                  <div className="text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">10+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                      <Icon name={item.type === "audio" ? "Volume2" : "Video"} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {item.type === "audio" ? (
                    <AudioPlayer src={item.src} title={item.title} />
                  ) : (
                    <VideoPlayer src={item.src} title={item.title} poster={item.poster} />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Это лишь небольшая часть моих работ. Свяжитесь со мной для получения полного портфолио.
            </p>
            <Button className="bg-accent hover:bg-accent/90">
              <a href="#contact">Запросить полное портфолио</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Icon name={service.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-heading font-semibold mb-6">Свяжитесь со мной</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-accent" />
                  <span>voice@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-accent" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-accent" />
                  <span>Москва, Россия</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>

            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 Голос Профи. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;