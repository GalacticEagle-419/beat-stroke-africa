import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Clock, Activity, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Stroke Awareness Africa</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/prevention">
                  {t('hero.cta.learn')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/recognize">
                  {t('hero.cta.recognize')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-4 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            {t('stats.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg bg-gradient-to-br from-destructive/10 to-destructive/5">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-destructive/20 flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">400,000+</h3>
                <p className="font-semibold text-foreground mb-1">{t('stats.deaths')}</p>
                <p className="text-sm text-muted-foreground">{t('stats.deaths.desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">80%</h3>
                <p className="font-semibold text-foreground mb-1">{t('stats.preventable')}</p>
                <p className="text-sm text-muted-foreground">{t('stats.preventable.desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">60 min</h3>
                <p className="font-semibold text-foreground mb-1">{t('stats.time')}</p>
                <p className="text-sm text-muted-foreground">{t('stats.time.desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            {t('pillars.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our comprehensive approach to fighting stroke in Africa
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prevent */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/30">
              <CardContent className="pt-8 pb-6">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {t('pillars.prevent.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('pillars.prevent.desc')}
                </p>
                <Button asChild variant="ghost" className="group-hover:text-secondary p-0">
                  <Link to="/prevention" className="flex items-center">
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recognize */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/30">
              <CardContent className="pt-8 pb-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Activity className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {t('pillars.recognize.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('pillars.recognize.desc')}
                </p>
                <Button asChild variant="ghost" className="group-hover:text-primary p-0">
                  <Link to="/recognize" className="flex items-center">
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Care */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent/30">
              <CardContent className="pt-8 pb-6">
                <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <Users className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {t('pillars.care.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('pillars.care.desc')}
                </p>
                <Button asChild variant="ghost" className="p-0">
                  <Link to="/care" className="flex items-center">
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Join the Movement
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're a healthcare provider, community leader, or concerned citizen, 
            you can help save lives by spreading awareness about stroke.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/hospitals">
                Partner Hospitals
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                {t('nav.contact')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
