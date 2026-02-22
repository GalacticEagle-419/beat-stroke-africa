import { Link } from 'react-router-dom';
import { 
  Award, 
  MapPin, 
  Phone, 
  Mail,
  Building2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Hospitals = () => {
  const { t } = useLanguage();

  const hospitals = [
    {
      name: 'University Hospital of Brazzaville',
      city: 'Brazzaville',
      country: 'Republic of the Congo',
      phone: '+242 22 282 6149',
      email: '',
      services: ['Emergency Stroke Care', 'Rehabilitation', 'Neurology Department'],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('hospitals.badge')}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('hospitals.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('hospitals.subtitle')}
          </p>
        </div>
      </section>

      {/* Hospital List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {hospitals.map((hospital, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-display text-lg">{hospital.name}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          <span>{hospital.city}, {hospital.country}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                      <Award className="h-3 w-3 mr-1" />
                      Partner
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {hospital.services.map((service, sIndex) => (
                      <Badge key={sIndex} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <a 
                      href={`tel:${hospital.phone}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {hospital.phone}
                    </a>
                    <a 
                      href={`mailto:${hospital.email}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {hospital.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-12 w-12 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold mb-4">
            {t('hospitals.join.title')}
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            {t('hospitals.join.desc')}
          </p>
          <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            <Link to="/contact">
              {t('hospitals.join.cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Hospitals;
