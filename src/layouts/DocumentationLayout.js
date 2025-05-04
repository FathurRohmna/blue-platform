import Head from 'next/head';
import { useRouter } from 'next/router';
import { Title } from '@/components/Title';

export default function DocumentationLayout(props) {
  const router = useRouter();

  // Safely handle missing props
  const title =
    props?.layoutProps?.meta?.metaTitle ||
    props?.layoutProps?.meta?.title ||
    'Default Title';

  return (
    <>
      <Title suffix={router.pathname === '/' ? undefined : 'Tailwind CSS'}>
        {title}
      </Title>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary" />
      </Head>
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="relative mx-auto lg:pt-10 px-0 lg:pb-28 pb-16 pt-10 xl:pb-16">
          <div className="relative max-w-5xl w-4/5 mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
