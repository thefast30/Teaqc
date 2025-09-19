import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Heart, 
  Users, 
  Brain, 
  MessageCircle, 
  Instagram, 
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import Autoplay from "embla-carousel-autoplay";

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = (url: string) => {
    // Dispara evento de conversão do Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17515713674/BGWLCPPOr5AbElqpkqBB',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
    
    // Redireciona após pequeno delay para garantir o disparo
    setTimeout(() => {
      window.open(url, '_blank');
    }, 300);
  };

  const services = [
    {
      icon: Brain,
      title: "Metodologia Personalizada",
      description: "Adaptação individualizada para cada criança, respeitando seu tempo e suas necessidades únicas.",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Users,
      title: "Equipe Especializada", 
      description: "Profissionais altamente qualificados, com experiência no desenvolvimento infantil e neurodivergência.",
      gradient: "from-accent-blue to-accent-blue-light"
    },
    {
      icon: Heart,
      title: "Atividades Terapêuticas",
      description: "Capoeira adaptada, música, movimento e brincadeiras estruturadas para promover aprendizado.",
      gradient: "from-secondary to-secondary-light"
    }
  ];

  const benefits = [
    "Ambiente seguro e acolhedor",
    "Desenvolvimento motor e emocional",
    "Metodologias comprovadas",
    "Acompanhamento individualizado",
    "Atividades lúdicas e terapêuticas",
    "Profissionais especializados"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Desenvolvimento Especializado
            </Badge>
            <img 
              src="/lovable-uploads/teaqc.png" 
              alt="TEAQC Logo"
              className="w-32 h-24 lg:w-40 lg:h-32 object-contain mx-auto"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="flex items-center gap-6 text-left">
                <img 
                  src="https://i.imgur.com/KFvSsQk.png" 
                  alt="Laço do autismo - símbolo de conscientização"
                  className="w-24 h-28 lg:w-32 lg:h-36 object-contain flex-shrink-0"
                />
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="block">TEAQC</span>
                  <span className="block text-2xl lg:text-4xl font-medium opacity-90">
                    Um Caminho Inspirador para o Desenvolvimento Infantil
                  </span>
                </h1>
              </div>

              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                Oferecemos um ambiente <strong>seguro</strong> e <strong>acolhedor</strong>, 
                com estratégias especializadas e um olhar humanizado para desenvolver as 
                habilidades motoras, emocionais e sociais de <strong>crianças autistas</strong>.
              </p>

              <div className="flex justify-center sm:justify-start">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8 py-6"
                  onClick={() => handleWhatsAppClick('https://api.whatsapp.com/send?phone=5581992090302&text=Olá%2C%20gostaria%20de%20saber%20mais')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Conheça Mais
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm font-medium">Ambiente seguro e acolhedor</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm font-medium">Desenvolvimento motor e emocional</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm font-medium">Metodologias comprovadas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm font-medium">Acompanhamento individualizado</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="TEAQC - Ambiente terapêutico para desenvolvimento infantil"
                  className="rounded-2xl shadow-2xl animate-float"
                />
                <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-full shadow-lg animate-pulse">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section className="py-24 bg-green-400">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/8d339795-4366-4342-a488-74191ddf85ef.png" 
                  alt="Cássio Lucena - Profissional de Educação Física"
                  className="w-80 h-80 object-contain rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="text-white space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  CÁSSIO LUCENA
                </h2>
                <div className="text-lg leading-relaxed space-y-4">
                  <p>
                    Profissional de Educação Física (UPE), é empresário e professor no espaço TEAqc - Capoeira e Psicomotricidade (Recife-PE), especialista em Psicomotricidade Relacional (ÍCONE-PE) e Psicologia e Desenvolvimento Infantil (Metropolitana-PE).
                  </p>
                  <p>
                    Possui formação em SCA - Segurança em Crises Agressivas (Grupo Método-SP), PCM - Professional Crisis Management (Luna Educação-SP), e Análise do Comportamento Aplicada à Intervenção em Pessoas com Desenvolvimento Atípico (UNIC-SP). Trabalha a mais de 10 anos com crianças dentro do Espectro Autista, desenvolvendo projetos na área de Psicomotricidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Nossos Diferenciais
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Excelência no Desenvolvimento Infantil
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combinamos metodologias comprovadas com um olhar humanizado para oferecer 
              o melhor cuidado e desenvolvimento para cada criança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="glass-card hover-lift border-0 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 glass-card rounded-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                    Nosso Ambiente
                  </Badge>
                  <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                    Um ambiente seguro, estruturado e adaptado para que cada criança se sinta acolhida e desenvolva todo o seu potencial!
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Nossos espaços são cuidadosamente planejados para oferecer conforto, segurança e estímulos adequados 
                    para o desenvolvimento de cada criança. Cada detalhe é pensado para criar um ambiente acolhedor e 
                    propício ao aprendizado.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Espaço Seguro</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-foreground font-medium">Materiais Adaptados</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                    <span className="text-foreground font-medium">Ambiente Acolhedor</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Estímulos Adequados</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Carousel 
                  className="w-full max-w-lg mx-auto"
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <img 
                          src="/lovable-uploads/e15cc560-b7bf-4637-8a00-93d27ce77df0.png" 
                          alt="Ambiente terapêutico com equipamentos especializados para desenvolvimento motor"
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <img 
                          src="/lovable-uploads/57e3b5aa-80aa-42cc-b723-c4096370c23c.png" 
                          alt="Espaço amplo e seguro para atividades físicas e psicomotoras"
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <img 
                          src="/lovable-uploads/8d2e0417-9028-4e47-abc2-34a32c6e4661.png" 
                          alt="Sala colorida e estimulante para desenvolvimento sensorial e motor"
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <img 
                          src="/lovable-uploads/b568412c-7a8c-4335-addd-22ce22af9495.png" 
                          alt="Área de organização e armazenamento com móveis coloridos"
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <img 
                          src="/lovable-uploads/3bb79c86-bb5c-431b-8cfb-404af99319f4.png" 
                          alt="Espaço de relaxamento com puffs e área de observação"
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <img 
                          src="/lovable-uploads/2bffb23d-53c0-4274-8d4d-3eee7f5f066e.png" 
                          alt="Área de descanso com puffs coloridos e prateleiras organizacionais"
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Entre em Contato
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
              Pronto para Transformar o Desenvolvimento do Seu Filho?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Nossa equipe está pronta para oferecer todo o suporte e cuidado necessário. 
              Entre em contato e saiba como podemos ajudar.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="glass-card hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-6">
                    Converse diretamente conosco para tirar dúvidas e agendar uma visita.
                  </p>
                  <Button 
                    variant="whatsapp" 
                    className="w-full"
                    onClick={() => handleWhatsAppClick('https://api.whatsapp.com/send?phone=5581992090302&text=Olá%2C%20gostaria%20de%20saber%20mais')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Conversar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-6">
                    Acompanhe nosso dia a dia e veja depoimentos de famílias.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.instagram.com/teaqc_/', '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Seguir @teaqc_
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(81) 99209-0302</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contato@teaqc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Recife, PE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">TEAQC</h3>
            <p className="text-background/80">
              Transformando vidas através do desenvolvimento infantil especializado
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-background hover:text-primary hover:bg-background/10"
              onClick={() => window.open('https://www.instagram.com/teaqc_/', '_blank')}
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-background hover:text-primary hover:bg-background/10"
              onClick={() => handleWhatsAppClick('https://api.whatsapp.com/send?phone=5581992090302')}
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60">
              © 2024 TEAQC. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
