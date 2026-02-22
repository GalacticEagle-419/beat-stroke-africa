import { Link } from 'react-router-dom';
import { 
  Frown, 
  Hand, 
  MessageCircle, 
  Clock, 
  AlertCircle,
  Eye,
  Navigation,
  Headphones,
  Phone,
  Download,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import heroRecognize from '@/assets/hero-recognize.jpg';

const Recognize = () => {
  const { t } = useLanguage();

  const fastSigns = [
    {
      letter: 'F',
      icon: Frown,
      title: t('recognize.fast.f'),
      description: t('recognize.fast.f.desc'),
      color: 'bg-destructive text-destructive-foreground',
    },
    {
      letter: 'A',
      icon: Hand,
      title: t('recognize.fast.a'),
      description: t('recognize.fast.a.desc'),
      color: 'bg-primary text-primary-foreground',
    },
    {
      letter: 'S',
      icon: MessageCircle,
      title: t('recognize.fast.s'),
      description: t('recognize.fast.s.desc'),
      color: 'bg-secondary text-secondary-foreground',
    },
    {
      letter: 'T',
      icon: Clock,
      title: t('recognize.fast.t'),
      description: t('recognize.fast.t.desc'),
      color: 'bg-accent text-accent-foreground',
    },
  ];

  const otherSigns = [
    { icon: AlertCircle, text: t('recognize.other.confusion') },
    { icon: Eye, text: t('recognize.other.vision') },
    { icon: Navigation, text: t('recognize.other.walking') },
    { icon: Headphones, text: t('recognize.other.headache') },
  ];

  const actions = [
    t('recognize.action.1'),
    t('recognize.action.2'),
    t('recognize.action.3'),
    t('recognize.action.4'),
    t('recognize.action.5'),
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroRecognize} 
            alt="Healthcare professional with patient" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4">
              Act F.A.S.T.
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('recognize.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t('recognize.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* F.A.S.T. Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            {t('recognize.fast.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The F.A.S.T. test helps you quickly identify stroke symptoms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {fastSigns.map((sign, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className={`${sign.color} py-6 text-center`}>
                  <span className="font-display text-5xl font-bold">{sign.letter}</span>
                </div>
                <CardContent className="p-6 text-center">
                  <sign.icon className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-display font-bold text-lg mb-2">{sign.title}</h3>
                  <p className="text-sm text-muted-foreground">{sign.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Warning Signs */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            {t('recognize.other.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {otherSigns.map((sign, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <sign.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <p className="font-medium">{sign.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Phone className="h-8 w-8 text-destructive" />
              <h2 className="font-display text-3xl font-bold">
                {t('recognize.action.title')}
              </h2>
            </div>
            
            <Card className="border-2 border-destructive/20 shadow-lg">
              <CardContent className="p-8">
                <ol className="space-y-4">
                  {actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <p className="text-lg pt-1">{action}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Download className="h-12 w-12 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold mb-4">
            {t('recognize.download')}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Keep this card handy - share it with family and friends. It could save a life.
          </p>
<Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 border-none">
  <a href="/Stroke_Emergency_Action_Card_4x6.pdf" download="Stroke_Emergency_Action_Card_4x6.pdf" target="_blank" rel="noopener noreferrer">
    <Download className="mr-2 h-4 w-4" />
    {t('common.download')} PDF
  </a>
</Button>
        </div>
      </section>

      {/* Next Step */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">Next Step</p>
          <h2 className="font-display text-2xl font-bold mb-6">
            Learn About Patient Care & Recovery
          </h2>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/care">
              {t('nav.care')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Recognize;
