import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.prevention': 'Prevention',
    'nav.recognize': 'Recognize & Respond',
    'nav.care': 'Patient Care',
    'nav.hospitals': 'Partner Hospitals',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Together Against Stroke in Africa',
    'hero.subtitle': 'Empowering Sub-Saharan Africa with knowledge to prevent, recognize, and respond to stroke',
    'hero.cta.learn': 'Learn About Prevention',
    'hero.cta.recognize': 'Recognize Warning Signs',
    
    // Stats
    'stats.title': 'Stroke in Africa: The Facts',
    'stats.deaths': 'Annual Deaths',
    'stats.deaths.desc': 'Stroke kills over 400,000 people in Africa each year',
    'stats.preventable': 'Preventable',
    'stats.preventable.desc': 'Up to 80% of strokes can be prevented',
    'stats.time': 'Golden Hour',
    'stats.time.desc': 'Treatment within 60 minutes saves lives',
    
    // Pillars
    'pillars.title': 'Our Three Pillars',
    'pillars.prevent.title': 'Prevent',
    'pillars.prevent.desc': 'Learn how to reduce your risk through healthy lifestyle choices',
    'pillars.recognize.title': 'Recognize & Respond',
    'pillars.recognize.desc': 'Know the warning signs and act FAST when stroke strikes',
    'pillars.care.title': 'Care',
    'pillars.care.desc': 'Support recovery and provide compassionate care for survivors',
    
    // Prevention Page
    'prevention.title': 'Stroke Prevention',
    'prevention.subtitle': 'Most strokes are preventable. Learn how to protect yourself and your loved ones.',
    'prevention.risk.title': 'Understanding Risk Factors',
    'prevention.risk.pressure': 'High Blood Pressure',
    'prevention.risk.pressure.desc': 'The leading cause of stroke. Monitor and manage your blood pressure regularly.',
    'prevention.risk.diabetes': 'Diabetes',
    'prevention.risk.diabetes.desc': 'Uncontrolled diabetes damages blood vessels. Maintain healthy blood sugar levels.',
    'prevention.risk.smoking': 'Smoking & Tobacco',
    'prevention.risk.smoking.desc': 'Smoking doubles your stroke risk. Quitting is the best gift to your health.',
    'prevention.risk.obesity': 'Obesity',
    'prevention.risk.obesity.desc': 'Excess weight strains your heart and blood vessels. Maintain a healthy weight.',
    'prevention.tips.title': 'Prevention Tips',
    'prevention.tips.diet': 'Eat a Balanced Diet',
    'prevention.tips.diet.desc': 'Include plenty of fruits, vegetables, whole grains, and lean proteins. Reduce salt and processed foods.',
    'prevention.tips.exercise': 'Stay Active',
    'prevention.tips.exercise.desc': 'Aim for at least 30 minutes of physical activity daily. Walking, dancing, or farming all count!',
    'prevention.tips.checkup': 'Regular Health Checkups',
    'prevention.tips.checkup.desc': 'Visit a healthcare provider regularly to monitor blood pressure, cholesterol, and blood sugar.',
    'prevention.tips.stress': 'Manage Stress',
    'prevention.tips.stress.desc': 'Practice relaxation techniques, spend time with loved ones, and get enough sleep.',
    'prevention.download': 'Download Prevention Guide',
    
    // Recognize Page
    'recognize.title': 'Recognize & Respond to Stroke',
    'recognize.subtitle': 'Every minute counts. Learn to spot the signs and act FAST.',
    'recognize.fast.title': 'Remember F.A.S.T.',
    'recognize.fast.f': 'Face Drooping',
    'recognize.fast.f.desc': 'Does one side of the face droop? Ask the person to smile.',
    'recognize.fast.a': 'Arm Weakness',
    'recognize.fast.a.desc': 'Is one arm weak or numb? Ask the person to raise both arms.',
    'recognize.fast.s': 'Speech Difficulty',
    'recognize.fast.s.desc': 'Is speech slurred? Ask the person to repeat a simple sentence.',
    'recognize.fast.t': 'Time to Call',
    'recognize.fast.t.desc': 'If you see any of these signs, call for emergency help immediately!',
    'recognize.other.title': 'Other Warning Signs',
    'recognize.other.confusion': 'Sudden confusion or trouble understanding',
    'recognize.other.vision': 'Sudden trouble seeing in one or both eyes',
    'recognize.other.walking': 'Sudden trouble walking, dizziness, or loss of balance',
    'recognize.other.headache': 'Sudden severe headache with no known cause',
    'recognize.action.title': 'What To Do',
    'recognize.action.1': 'Call emergency services immediately',
    'recognize.action.2': 'Note the time symptoms started',
    'recognize.action.3': 'Keep the person calm and comfortable',
    'recognize.action.4': 'Do not give them food or drink',
    'recognize.action.5': 'If unconscious, place in recovery position',
    'recognize.download': 'Download Emergency Action Card',
    
    // Care Page
    'care.title': 'Caring for Stroke Patients',
    'care.subtitle': 'Supporting recovery with love, patience, and proper care.',
    'care.journey.title': 'The Recovery Journey',
    'care.journey.desc': 'Stroke recovery is a marathon, not a sprint. Every patient\'s journey is unique, but with the right support, remarkable progress is possible.',
    'care.physical.title': 'Physical Care',
    'care.physical.mobility': 'Help with mobility exercises as prescribed by healthcare providers',
    'care.physical.prevent': 'Prevent bedsores by repositioning regularly',
    'care.physical.nutrition': 'Ensure proper nutrition and hydration',
    'care.physical.medication': 'Manage medications carefully',
    'care.emotional.title': 'Emotional Support',
    'care.emotional.patience': 'Be patient and understanding',
    'care.emotional.communicate': 'Encourage communication, even if it\'s difficult',
    'care.emotional.celebrate': 'Celebrate small victories',
    'care.emotional.include': 'Include them in family activities',
    'care.caregiver.title': 'For Caregivers',
    'care.caregiver.rest': 'Take care of yourself too - rest is essential',
    'care.caregiver.support': 'Seek support from family, friends, or support groups',
    'care.caregiver.help': 'Don\'t be afraid to ask for help',
    'care.caregiver.learn': 'Learn about stroke to better understand what your loved one is experiencing',
    'care.download': 'Download Caregiver Guide',
    
    // Hospitals Page
    'hospitals.title': 'Partner Hospitals',
    'hospitals.subtitle': 'These healthcare facilities are recognized for their commitment to stroke awareness and care in Africa.',
    'hospitals.badge': 'Stroke Awareness Partner',
    'hospitals.join.title': 'Join Our Network',
    'hospitals.join.desc': 'Is your hospital committed to stroke awareness and care? Apply to become a recognized partner.',
    'hospitals.join.cta': 'Apply for Recognition',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? Want to partner with us? We\'d love to hear from you.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.hospital.title': 'Hospital Registration',
    'contact.hospital.desc': 'Apply for your hospital to be recognized as a Stroke Awareness Partner.',
    'contact.hospital.name': 'Hospital Name',
    'contact.hospital.country': 'Country',
    'contact.hospital.city': 'City',
    'contact.hospital.contact': 'Contact Person',
    'contact.hospital.email': 'Contact Email',
    'contact.hospital.phone': 'Phone Number',
    'contact.hospital.services': 'Stroke Services Offered',
    'contact.hospital.submit': 'Submit Application',
    
    // Footer
    'footer.mission': 'Empowering Sub-Saharan Africa with knowledge to prevent, recognize, and respond to stroke.',
    'footer.quick': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2026 Stroke Awareness Africa. All rights reserved.',
    
    // Common
    'common.learn_more': 'Learn More',
    'common.download': 'Download',
    'common.submit': 'Submit',
    'common.success': 'Success!',
    'common.error': 'Error',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.prevention': 'Prévention',
    'nav.recognize': 'Reconnaître & Réagir',
    'nav.care': 'Soins aux Patients',
    'nav.hospitals': 'Hôpitaux Partenaires',
    'nav.contact': 'Nous Contacter',
    
    // Hero
    'hero.title': 'Ensemble Contre l\'AVC en Afrique',
    'hero.subtitle': 'Donner à l\'Afrique subsaharienne les connaissances pour prévenir, reconnaître et réagir à l\'AVC',
    'hero.cta.learn': 'En Savoir Plus sur la Prévention',
    'hero.cta.recognize': 'Reconnaître les Signes d\'Alerte',
    
    // Stats
    'stats.title': 'L\'AVC en Afrique: Les Faits',
    'stats.deaths': 'Décès Annuels',
    'stats.deaths.desc': 'L\'AVC tue plus de 400 000 personnes en Afrique chaque année',
    'stats.preventable': 'Évitable',
    'stats.preventable.desc': 'Jusqu\'à 80% des AVC peuvent être évités',
    'stats.time': 'Heure d\'Or',
    'stats.time.desc': 'Un traitement dans les 60 minutes sauve des vies',
    
    // Pillars
    'pillars.title': 'Nos Trois Piliers',
    'pillars.prevent.title': 'Prévenir',
    'pillars.prevent.desc': 'Apprenez à réduire votre risque grâce à un mode de vie sain',
    'pillars.recognize.title': 'Reconnaître & Réagir',
    'pillars.recognize.desc': 'Connaissez les signes d\'alerte et agissez VITE lors d\'un AVC',
    'pillars.care.title': 'Soigner',
    'pillars.care.desc': 'Soutenez la récupération et prodiguez des soins compatissants aux survivants',
    
    // Prevention Page
    'prevention.title': 'Prévention de l\'AVC',
    'prevention.subtitle': 'La plupart des AVC sont évitables. Apprenez à vous protéger et à protéger vos proches.',
    'prevention.risk.title': 'Comprendre les Facteurs de Risque',
    'prevention.risk.pressure': 'Hypertension Artérielle',
    'prevention.risk.pressure.desc': 'La principale cause d\'AVC. Surveillez et gérez votre tension artérielle régulièrement.',
    'prevention.risk.diabetes': 'Diabète',
    'prevention.risk.diabetes.desc': 'Le diabète non contrôlé endommage les vaisseaux sanguins. Maintenez une glycémie saine.',
    'prevention.risk.smoking': 'Tabagisme',
    'prevention.risk.smoking.desc': 'Fumer double votre risque d\'AVC. Arrêter est le meilleur cadeau pour votre santé.',
    'prevention.risk.obesity': 'Obésité',
    'prevention.risk.obesity.desc': 'L\'excès de poids sollicite votre cœur et vos vaisseaux sanguins. Maintenez un poids santé.',
    'prevention.tips.title': 'Conseils de Prévention',
    'prevention.tips.diet': 'Mangez Équilibré',
    'prevention.tips.diet.desc': 'Incluez beaucoup de fruits, légumes, grains entiers et protéines maigres. Réduisez le sel et les aliments transformés.',
    'prevention.tips.exercise': 'Restez Actif',
    'prevention.tips.exercise.desc': 'Visez au moins 30 minutes d\'activité physique par jour. La marche, la danse ou le jardinage comptent!',
    'prevention.tips.checkup': 'Bilans de Santé Réguliers',
    'prevention.tips.checkup.desc': 'Consultez régulièrement un professionnel de santé pour surveiller la tension, le cholestérol et la glycémie.',
    'prevention.tips.stress': 'Gérez le Stress',
    'prevention.tips.stress.desc': 'Pratiquez des techniques de relaxation, passez du temps avec vos proches et dormez suffisamment.',
    'prevention.download': 'Télécharger le Guide de Prévention',
    
    // Recognize Page
    'recognize.title': 'Reconnaître & Réagir à l\'AVC',
    'recognize.subtitle': 'Chaque minute compte. Apprenez à repérer les signes et agissez VITE.',
    'recognize.fast.title': 'Rappelez-vous V.I.T.E.',
    'recognize.fast.f': 'Visage Affaissé',
    'recognize.fast.f.desc': 'Un côté du visage s\'affaisse-t-il? Demandez à la personne de sourire.',
    'recognize.fast.a': 'Incapacité du Bras',
    'recognize.fast.a.desc': 'Un bras est-il faible ou engourdi? Demandez à la personne de lever les deux bras.',
    'recognize.fast.s': 'Trouble de la Parole',
    'recognize.fast.s.desc': 'La parole est-elle confuse? Demandez à la personne de répéter une phrase simple.',
    'recognize.fast.t': 'Temps d\'Appeler',
    'recognize.fast.t.desc': 'Si vous voyez l\'un de ces signes, appelez les urgences immédiatement!',
    'recognize.other.title': 'Autres Signes d\'Alerte',
    'recognize.other.confusion': 'Confusion soudaine ou difficulté à comprendre',
    'recognize.other.vision': 'Trouble soudain de la vision d\'un ou des deux yeux',
    'recognize.other.walking': 'Difficulté soudaine à marcher, vertiges ou perte d\'équilibre',
    'recognize.other.headache': 'Mal de tête sévère et soudain sans cause connue',
    'recognize.action.title': 'Que Faire',
    'recognize.action.1': 'Appelez les services d\'urgence immédiatement',
    'recognize.action.2': 'Notez l\'heure d\'apparition des symptômes',
    'recognize.action.3': 'Gardez la personne calme et confortable',
    'recognize.action.4': 'Ne lui donnez pas à manger ni à boire',
    'recognize.action.5': 'Si inconsciente, placez-la en position latérale de sécurité',
    'recognize.download': 'Télécharger la Carte d\'Action d\'Urgence',
    
    // Care Page
    'care.title': 'Soins aux Patients Victimes d\'AVC',
    'care.subtitle': 'Soutenir la récupération avec amour, patience et soins appropriés.',
    'care.journey.title': 'Le Parcours de Récupération',
    'care.journey.desc': 'La récupération après un AVC est un marathon, pas un sprint. Le parcours de chaque patient est unique, mais avec le bon soutien, des progrès remarquables sont possibles.',
    'care.physical.title': 'Soins Physiques',
    'care.physical.mobility': 'Aidez avec les exercices de mobilité prescrits par les soignants',
    'care.physical.prevent': 'Prévenez les escarres en repositionnant régulièrement',
    'care.physical.nutrition': 'Assurez une nutrition et hydratation appropriées',
    'care.physical.medication': 'Gérez les médicaments avec soin',
    'care.emotional.title': 'Soutien Émotionnel',
    'care.emotional.patience': 'Soyez patient et compréhensif',
    'care.emotional.communicate': 'Encouragez la communication, même si c\'est difficile',
    'care.emotional.celebrate': 'Célébrez les petites victoires',
    'care.emotional.include': 'Incluez-les dans les activités familiales',
    'care.caregiver.title': 'Pour les Aidants',
    'care.caregiver.rest': 'Prenez soin de vous aussi - le repos est essentiel',
    'care.caregiver.support': 'Cherchez du soutien auprès de la famille, des amis ou des groupes de soutien',
    'care.caregiver.help': 'N\'ayez pas peur de demander de l\'aide',
    'care.caregiver.learn': 'Informez-vous sur l\'AVC pour mieux comprendre ce que vit votre proche',
    'care.download': 'Télécharger le Guide de l\'Aidant',
    
    // Hospitals Page
    'hospitals.title': 'Hôpitaux Partenaires',
    'hospitals.subtitle': 'Ces établissements de santé sont reconnus pour leur engagement envers la sensibilisation et les soins de l\'AVC en Afrique.',
    'hospitals.badge': 'Partenaire Sensibilisation AVC',
    'hospitals.join.title': 'Rejoignez Notre Réseau',
    'hospitals.join.desc': 'Votre hôpital est-il engagé dans la sensibilisation et les soins de l\'AVC? Postulez pour devenir un partenaire reconnu.',
    'hospitals.join.cta': 'Postuler pour la Reconnaissance',
    
    // Contact Page
    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Vous avez des questions? Vous voulez collaborer avec nous? Nous serions ravis de vous entendre.',
    'contact.form.title': 'Envoyez-nous un Message',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Adresse Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Votre Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.hospital.title': 'Inscription d\'Hôpital',
    'contact.hospital.desc': 'Postulez pour que votre hôpital soit reconnu comme Partenaire Sensibilisation AVC.',
    'contact.hospital.name': 'Nom de l\'Hôpital',
    'contact.hospital.country': 'Pays',
    'contact.hospital.city': 'Ville',
    'contact.hospital.contact': 'Personne de Contact',
    'contact.hospital.email': 'Email de Contact',
    'contact.hospital.phone': 'Numéro de Téléphone',
    'contact.hospital.services': 'Services AVC Offerts',
    'contact.hospital.submit': 'Soumettre la Candidature',
    
    // Footer
    'footer.mission': 'Donner à l\'Afrique subsaharienne les connaissances pour prévenir, reconnaître et réagir à l\'AVC.',
    'footer.quick': 'Liens Rapides',
    'footer.resources': 'Ressources',
    'footer.connect': 'Connectez-vous',
    'footer.copyright': '© 2026 Sensibilisation AVC Afrique. Tous droits réservés.',
    
    // Common
    'common.learn_more': 'En Savoir Plus',
    'common.download': 'Télécharger',
    'common.submit': 'Soumettre',
    'common.success': 'Succès!',
    'common.error': 'Erreur',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'fr' ? 'fr' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
