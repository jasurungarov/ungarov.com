import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import MobileSidebar from '@/components/mobile-sidebar';
import Footer from '@/components/footer';
import { Toaster } from "sonner"


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jasur Ungarov | Software Engineer',
  description: 'Personal portfolio and resume of Jasur Ungarov, a software engineer specializing in web development.',
  icons: { icon: '/pngwing.com (3).png'},
  openGraph: {
		description:
			'Personal portfolio and resume of Jasur Ungarov, a software engineer specializing in web development.',
		type: 'website',
		url: 'https://ungarov.uz',
		locale: 'en_US',
		images: ['/photo_2025-05-06_08-15-39.jpg'],
		countryName: 'Kyrgyzstan',
		siteName: 'Jasur Ungarov Portfolio',
		emails: 'jasurungarov17@gmail.com',
	},
	keywords:
		'Jasur Ungarov, Ungarov web, Ungarov Jasur, Jasur web, Kyrgyzstan tech, web development, software engineer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
          disableTransitionOnChange
        >
          <div className="bg-background text-foreground min-h-screen">
            <div className="flex flex-col md:flex-row">
              <Sidebar />
              <MobileSidebar />
              <div className="pb-[80px] flex-1 md:ml-[300px] p-4">
                <Navbar />
                <main className="mt-4 rounded-2xl shadow-[0_0_50px_rgba(255,0,0,0.3)]">{children}
                </main>
                <Toaster richColors  position="top-center" />
                <Footer/>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}