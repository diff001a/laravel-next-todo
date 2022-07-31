import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({
  title,
  description = 'Todo App with Authentication made with Laravel and Next.js.',
  imageUrl,
  imageWidth,
  imageHeight,
  children,
}) => {
  const siteName = 'Todo App (Laravel and Next.js)';
  if (title === undefined) {
    title = siteName;
  } else {
    title = `${title} - ${siteName}`;
  }
  const router = useRouter();
  const width = imageWidth ? imageWidth : 1280;
  const height = imageHeight ? imageHeight : 640;
  const url = process.browser ? location.href : '';
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0,maximum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : ''}
      {imageUrl ? (
        <meta property="og:image:width" content={String(width)} />
      ) : (
        ''
      )}
      {imageUrl ? (
        <meta property="og:image:height" content={String(height)} />
      ) : (
        ''
      )}
      {children}
    </Head>
  );
};

export default Meta;
