import Head from 'next/head';
import seo from '../data/seo.json';
import user from '../data/user.json';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta
        name="description"
        content={seo.description}
      />
      <meta
        name="keywords"
        content={seo.keywords.join(', ')}
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta
        property="og:description"
        content={seo.description}
      />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:url" content={seo.siteUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />

    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: seo.title,
};
