import { DefaultSeo } from 'next-seo';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <DefaultSeo
          titleTemplate={`God & Me`}
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://confva.com/',
            site_name: 'God & Me | Conference 2021',
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.png',
            },
          ]}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
