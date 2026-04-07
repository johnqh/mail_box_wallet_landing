import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Footer from './Footer';
import { PageConfigProvider } from '../context/PageConfigProvider';

interface ScreenContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Page layout shell wrapping all routes at the route level.
 * Provides PageConfigProvider so child pages can use useSetPageConfig
 * for layout overrides.
 */
export default function ScreenContainer({ children, className = '' }: ScreenContainerProps) {
  return (
    <PageConfigProvider>
      <ScreenContainerInner className={className}>{children}</ScreenContainerInner>
    </PageConfigProvider>
  );
}

function ScreenContainerInner({ children, className = '' }: ScreenContainerProps) {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isHomePage = pathParts.length <= 1;

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col ${className}`}>
      <TopBar />
      <div className="flex-1">{children}</div>
      <Footer variant={isHomePage ? 'full' : 'compact'} />
    </div>
  );
}
