import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import { AppProps } from 'next/app';
import LayoutWrapper from '@/components/LayoutWrapper';import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} font-sans bg-white`}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </div>
  );
}
