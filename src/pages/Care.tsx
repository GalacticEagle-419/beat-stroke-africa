import { Link } from 'react-router-dom';
import { 
  Heart, 
  Move, 
  Pill, 
  Utensils,
  MessageSquare,
  PartyPopper,
  Users,
  Smile,
  Coffee,
  HandHeart,
  HelpCircle,
  BookOpen,
  Download,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import heroCare from '@/assets/hero-care.jpg';

const Care = () => {
  const { t } = useLanguage();

  const physicalCare = [
    { icon: Move, text: t('care.physical.mobility') },
    { icon: Heart, text: t('care.physical.prevent') },
    { icon: Utensils, text: t('care.physical.nutrition') },
    { icon: Pill, text: t('care.physical.medication') },
  ];

  const emotionalSupport = [
    { icon: Smile, text: t('care.emotional.patience') },
    { icon: MessageSquare, text: t('care.emotional.communicate') },
    { icon: PartyPopper, text: t('care.emotional.celebrate') },
    { icon: Users, text: t('care.emotional.include') },
  ];

  const caregiverTips = [
    { icon: Coffee, text: t('care.caregiver.rest') },
    { icon: HandHeart, text: t('care.caregiver.support') },
    { icon: HelpCircle, text: t('care.caregiver.help') },
    { icon: BookOpen, text: t('care.caregiver.learn') },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCare} 
            alt="Family supporting stroke survivor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-accent-foreground text-sm font-medium mb-4">
              Recovery & Support
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('care.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t('care.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Recovery Journey */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-none shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold mb-4">
                {t('care.journey.title')}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('care.journey.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Physical Care */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            {t('care.physical.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {physicalCare.map((item, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            {t('care.emotional.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {emotionalSupport.map((item, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Caregivers */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            {t('care.caregiver.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Taking care of yourself is essential to providing the best care for your loved one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {caregiverTips.map((item, index) => (
              <Card key={index} className="border-none shadow-md bg-card">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <p className="font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <Download className="h-12 w-12 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold mb-4">
            {t('care.download')}
          </h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            A comprehensive guide for families caring for stroke survivors at home.
          </p>
<Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-none">
  <a href="/Family_Post_Stroke_Home_Care_Guide.pdf" download="Family_Post_Stroke_Home_Care_Guide.pdf" target="_blank" rel="noopener noreferrer">
    <Download className="mr-2 h-4 w-4" />
    {t('common.download')} PDF
  </a>
</Button>
        </div>
      </section>

      {/* Next Step */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">Find Support</p>
          <h2 className="font-display text-2xl font-bold mb-6">
            View Our Partner Hospitals
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/hospitals">
              {t('nav.hospitals')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      */}
    </Layout>
  );
};

export default Care;
