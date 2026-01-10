import { Link, type LinkProps } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { addLanguageToPath } from '../utils/languageRouting';

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
}

export default function LocalizedLink({ to, children, ...props }: LocalizedLinkProps) {
  const { language } = useLanguage();

  // Handle external links
  if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }

  // Handle anchor links
  if (to.startsWith('#')) {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }

  const localizedPath = addLanguageToPath(to, language);

  return (
    <Link to={localizedPath} {...props}>
      {children}
    </Link>
  );
}
