import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Building2,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [hospitalForm, setHospitalForm] = useState({
    hospitalName: '',
    country: '',
    city: '',
    contactPerson: '',
    email: '',
    phone: '',
    services: '',
  });

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [hospitalSubmitted, setHospitalSubmitted] = useState(false);

  const africanCountries = [
    'Not in Africa', 'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 
    'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 
    'Congo (Democratic Republic of the)', 'Congo (Republic of the)', 'Ivory Coast', 
    'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 
    'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 
    'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 
    'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'São Tomé and Principe', 'Senegal', 'Seychelles', 
    'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 
    'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
  ].sort();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Forward to contact@strokeafrica.org
    const subject = encodeURIComponent(contactForm.subject || 'New Contact Message');
    const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\nMessage: ${contactForm.message}`);
    window.location.href = `mailto:contact@strokeafrica.org?subject=${subject}&body=${body}`;
    
    // Simulate form submission
    setContactSubmitted(true);
    toast({
      title: t('common.success'),
      description: 'Your message has been sent. We will get back to you soon!',
    });
  };

  const handleHospitalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!hospitalForm.hospitalName.trim() || !hospitalForm.country || !hospitalForm.email.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }
    
    // Forward to contact@strokeafrica.org
    const subject = encodeURIComponent(`New Hospital Application - ${hospitalForm.hospitalName}`);
    const body = encodeURIComponent(`Hospital Name: ${hospitalForm.hospitalName}\nCountry: ${hospitalForm.country}\nCity: ${hospitalForm.city}\nContact Person: ${hospitalForm.contactPerson}\nEmail: ${hospitalForm.email}\nPhone: ${hospitalForm.phone}\nServices: ${hospitalForm.services}`);
    window.location.href = `mailto:contact@strokeafrica.org?subject=${subject}&body=${body}`;
    
    // Simulate form submission
    setHospitalSubmitted(true);
    toast({
      title: t('common.success'),
      description: 'Your hospital registration has been submitted. We will review and contact you soon!',
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center max-w-4xl mx-auto">
            <Card className="text-center border-none shadow-md">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Email</h3>
                <a href="mailto:contact@strokeafrica.org" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@strokeafrica.org
                </a>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>

      
      {/* Forms Section */}
      {/*<section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          {/*<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  {t('contact.form.title')}
                </CardTitle>
                <CardDescription>
                  Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {contactSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                    <Button 
                      className="mt-6" 
                      variant="outline"
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({ name: '', email: '', subject: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')} *</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="john@example.com"
                        maxLength={255}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                      <Input
                        id="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="How can we help?"
                        maxLength={200}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.message')} *</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Your message..."
                        rows={5}
                        maxLength={2000}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Send className="mr-2 h-4 w-4" />
                      {t('contact.form.submit')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Hospital Registration Form */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-secondary" />
                  {t('contact.hospital.title')}
                </CardTitle>
                <CardDescription>
                  {t('contact.hospital.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {hospitalSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-bold mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground">We will review your application and contact you within 5 business days.</p>
                    <Button 
                      className="mt-6" 
                      variant="outline"
                      onClick={() => {
                        setHospitalSubmitted(false);
                        setHospitalForm({ hospitalName: '', country: '', city: '', contactPerson: '', email: '', phone: '', services: '' });
                      }}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleHospitalSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="hospitalName">{t('contact.hospital.name')} *</Label>
                      <Input
                        id="hospitalName"
                        value={hospitalForm.hospitalName}
                        onChange={(e) => setHospitalForm({ ...hospitalForm, hospitalName: e.target.value })}
                        placeholder="Hospital or Institution Name"
                        maxLength={200}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">{t('contact.hospital.country')} *</Label>
                        <Select
                          value={hospitalForm.country}
                          onValueChange={(value) => setHospitalForm({ ...hospitalForm, country: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {africanCountries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">{t('contact.hospital.city')}</Label>
                        <Input
                          id="city"
                          value={hospitalForm.city}
                          onChange={(e) => setHospitalForm({ ...hospitalForm, city: e.target.value })}
                          placeholder="City"
                          maxLength={100}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">{t('contact.hospital.contact')}</Label>
                      <Input
                        id="contactPerson"
                        value={hospitalForm.contactPerson}
                        onChange={(e) => setHospitalForm({ ...hospitalForm, contactPerson: e.target.value })}
                        placeholder="Dr. Jane Smith"
                        maxLength={100}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hospitalEmail">{t('contact.hospital.email')} *</Label>
                        <Input
                          id="hospitalEmail"
                          type="email"
                          value={hospitalForm.email}
                          onChange={(e) => setHospitalForm({ ...hospitalForm, email: e.target.value })}
                          placeholder="contact@hospital.com"
                          maxLength={255}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hospitalPhone">{t('contact.hospital.phone')}</Label>
                        <Input
                          id="hospitalPhone"
                          value={hospitalForm.phone}
                          onChange={(e) => setHospitalForm({ ...hospitalForm, phone: e.target.value })}
                          placeholder="+234 123 456 789"
                          maxLength={20}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="services">{t('contact.hospital.services')}</Label>
                      <Textarea
                        id="services"
                        value={hospitalForm.services}
                        onChange={(e) => setHospitalForm({ ...hospitalForm, services: e.target.value })}
                        placeholder="List your stroke-related services (e.g., Emergency Care, CT Scan, Rehabilitation...)"
                        rows={3}
                        maxLength={1000}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                      <Building2 className="mr-2 h-4 w-4" />
                      {t('contact.hospital.submit')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>*/}
        </div>
      </section>*/}
      
    </Layout>
  );
};

export default Contact;
