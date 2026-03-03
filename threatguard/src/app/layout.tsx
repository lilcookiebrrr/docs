import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import CanvasGrain from '@/components/CanvasGrain';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <CanvasGrain />
        <RootProvider
          search={{
            enabled: true,
          }}
          >
          
          {children}</RootProvider>
      </body>
    </html>
  );
}

