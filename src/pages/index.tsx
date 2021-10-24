import { FooterSlice } from '@slices/Footer';
import { HeroSlice } from '@slices/Hero';
import { IntroVideoSection } from '@slices/Intro';
import { TeamSlice } from '@slices/Team';
import { NextSeo } from 'next-seo';
import React, { FunctionComponent, useState } from 'react';

const HomePage: FunctionComponent = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <>
      <NextSeo
        title={`God & Me | Conference 2021 | Harrisonburg, VA`}
        titleTemplate=''
        openGraph={{
          images: [
            {
              url: '/meta.png',
              width: 1583,
              height: 1080,
            },
          ],
        }}
      />
      <HeroSlice hasAnimated={hasAnimated} setHasAnimated={setHasAnimated} />
      <IntroVideoSection />
      <TeamSlice />
      <FooterSlice />
    </>
  );
};

export default HomePage;
