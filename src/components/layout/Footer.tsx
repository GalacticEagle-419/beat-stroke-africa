import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Stroke<span className="text-primary">Africa</span>
              </span>
            </div>
            <p className="text-sm text-background/70">
              {t('footer.mission')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.quick')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/prevention" className="text-background/70 hover:text-primary transition-colors">
                  {t('nav.prevention')}
                </Link>
              </li>
              <li>
                <Link to="/recognize" className="text-background/70 hover:text-primary transition-colors">
                  {t('nav.recognize')}
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-background/70 hover:text-primary transition-colors">
                  {t('nav.care')}
                </Link>
              </li>
              <li>
                <Link to="/hospitals" className="text-background/70 hover:text-primary transition-colors">
                  {t('nav.hospitals')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/prevention" className="text-background/70 hover:text-primary transition-colors">
                  {t('prevention.download')}
                </Link>
              </li>
              <li>
                <Link to="/recognize" className="text-background/70 hover:text-primary transition-colors">
                  {t('recognize.download')}
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-background/70 hover:text-primary transition-colors">
                  {t('care.download')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.connect')}</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
