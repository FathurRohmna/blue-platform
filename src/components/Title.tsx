import Head from 'next/head';
import { ReactNode } from 'react';

interface TitleProps {
  suffix?: string;
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ suffix, children }) => {
  const title = children + (suffix ? ` - ${suffix}` : '');

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Head>
  );
};
