import { Link } from 'react-router-dom';
import { 
  Heart, 
  Droplet, 
  Cigarette, 
  Scale, 
  Apple, 
  Footprints, 
  Stethoscope, 
  Brain,
  Download,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import heroPrevention from '@/assets/hero-prevention.jpg';

const Prevention = () => {
  const { t } = useLanguage();

  const riskFactors = [
    {
      icon: Heart,
      title: t('prevention.risk.pressure'),
      description: t('prevention.risk.pressure.desc'),
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
    },
    {
      icon: Droplet,
      title: t('prevention.risk.diabetes'),
      description: t('prevention.risk.diabetes.desc'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Cigarette,
      title: t('prevention.risk.smoking'),
      description: t('prevention.risk.smoking.desc'),
      color: 'text-muted-foreground',
      bgColor: 'bg-muted',
    },
    {
      icon: Scale,
      title: t('prevention.risk.obesity'),
      description: t('prevention.risk.obesity.desc'),
      color: 'text-accent-foreground',
      bgColor: 'bg-accent/30',
    },
  ];

  const tips = [
    {
      icon: Apple,
      title: t('prevention.tips.diet'),
      description: t('prevention.tips.diet.desc'),
    },
    {
      icon: Footprints,
      title: t('prevention.tips.exercise'),
      description: t('prevention.tips.exercise.desc'),
    },
    {
      icon: Stethoscope,
      title: t('prevention.tips.checkup'),
      description: t('prevention.tips.checkup.desc'),
    },
    {
      icon: Brain,
      title: t('prevention.tips.stress'),
      description: t('prevention.tips.stress.desc'),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroPrevention} 
            alt="Healthy lifestyle - exercise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Prevention is Key
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('prevention.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t('prevention.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            {t('prevention.risk.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {riskFactors.map((factor, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className={`h-14 w-14 rounded-xl ${factor.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <factor.icon className={`h-7 w-7 ${factor.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">{factor.title}</h3>
                    <p className="text-muted-foreground text-sm">{factor.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            {t('prevention.tips.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="bg-card border-none shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <tip.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-display text-xl">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Download className="h-12 w-12 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold mb-4">
            {t('prevention.download')}
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Get our comprehensive prevention guide with tips tailored for African communities.
          </p>
          <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            <Download className="mr-2 h-4 w-4" />
            {t('common.download')} PDF
          </Button>
        </div>
      </section>

      {/* Next Step */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">Next Step</p>
          <h2 className="font-display text-2xl font-bold mb-6">
            Learn to Recognize Warning Signs
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/recognize">
              {t('nav.recognize')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Prevention;
