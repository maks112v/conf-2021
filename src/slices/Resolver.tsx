import { PageSlices } from '#graphql';
import { NextSeo } from 'next-seo';
import React, { FunctionComponent } from 'react';
import { HeroSlice } from './Hero';
import { ScheduleSlice } from './Schedule';
import { SpeakersSlice } from './Speakers';
import { ThemeSlice } from './Theme';

interface SliceResolverProps {
  slices: PageSlices[];
}

export const SliceResolver: FunctionComponent<SliceResolverProps> = ({
  slices,
}) => {
  return (
    <>
      {slices?.map((slice) => {
        switch (slice?.__typename) {
          case 'HeroSlice':
            return <HeroSlice />;
          case 'SeoSlice':
            return (
              <NextSeo
                title={slice?.title || ''}
                openGraph={{
                  images: slice?.images?.map((item) => ({
                    url: item?.url as string,
                    width: item?.width as number,
                    height: item?.height as number,
                  })),
                }}
              />
            );
          case 'SpeakersSlice':
            return <SpeakersSlice {...slice} />;
          case 'ScheduleSlice':
            return <ScheduleSlice {...slice} />;
          case 'ThemeSlice':
            return <ThemeSlice {...slice} />;
          default:
            return null;
        }
      })}
    </>
  );
};
