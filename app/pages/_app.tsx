import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import React from 'react';
import { subgraphClient } from '../clients/subgraph';
import { GLOBAL_OG_BANNER, PROD_LINK } from '../constants';
import { AppProvider } from '../contexts/app';
import { ThemedGlobalStyle } from '../theme';

const DEFAULT_TITLE = `721z.dev`;
const DEFAULT_DESCRIPTION = ``;

export default class PobApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const { err } = this.props as any;
    const modifiedPageProps = { ...pageProps, err };
    return (
      <React.Fragment>
        <DefaultSeo
          title={DEFAULT_TITLE}
          description={DEFAULT_DESCRIPTION}
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: PROD_LINK,
            title: DEFAULT_TITLE,
            description: DEFAULT_DESCRIPTION,
            site_name: 'TODO',
            images: [
              {
                url: GLOBAL_OG_BANNER,
                // width: 800,
                // height: 418,
              },
            ],
          }}
          twitter={{
            handle: '@prrfbeauty',
            site: '@prrfbeauty',
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'twitter:image',
              content: GLOBAL_OG_BANNER,
            },
            {
              name: 'twitter:url',
              content: PROD_LINK,
            },
          ]}
        />
        <ThemedGlobalStyle />
        <AppProvider>
          <ApolloProvider client={subgraphClient}>
            {/** Effects are any tasks that strictly only makes state changes to stores */}
            <Component {...modifiedPageProps} />
          </ApolloProvider>
        </AppProvider>
      </React.Fragment>
    );
  }
}
