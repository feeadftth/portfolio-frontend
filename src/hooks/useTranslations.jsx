import { useLanguage } from '../LanguageContext';
import en from '../translations/en.json'
import it from '../translations/it.json';

const translations = { en, it };

export const useTranslation = () => {
    const { language } = useLanguage();
    return translations[language];
};
