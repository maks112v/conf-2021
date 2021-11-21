import {
  Page,
  PageDocument,
  PageQuery,
  PagesDocument,
  PagesQuery,
} from '#graphql';
import { graphClient } from '@services/graphcms';
import { FooterSlice } from '@slices/Footer';
import { SliceResolver } from '@slices/Resolver';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FunctionComponent } from 'react';

interface PageBuilderProps extends Page {}

const PageBuilder: FunctionComponent<PageBuilderProps> = ({
  title,
  slices,
}) => {
  console.log(slices);
  return (
    <>
      {/* <Navbar /> */}
      <SliceResolver slices={slices} />
      <FooterSlice />
    </>
  );
};

export default PageBuilder;

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await graphClient.query<PagesQuery>({
    query: PagesDocument,
  });

  return {
    paths: pages?.data?.pages?.map((item) => ({
      params: {
        path: item?.slug?.split('/')?.filter((item) => !!item),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const path = `/${(ctx?.params?.path as [string])?.join('/') || ''}`;

  const res = await graphClient.query<PageQuery>({
    query: PageDocument,
    variables: {
      slug: path,
    },
  });

  return {
    props: {
      ...res?.data?.page,
    },
  };
};
