import { type ReactNode } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

interface ScreenContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ScreenContainer({ children, className = '' }: ScreenContainerProps) {
  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col ${className}`}>
      <TopBar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
