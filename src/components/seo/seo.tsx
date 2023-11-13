import React from 'react';
import {Helmet} from 'react-helmet';
import env from "../../environments";

export default function SEO(props: seo_params) {
  return (
    <Helmet>
      <title>{props.title ? `${props.title} - ` : ''}{env.REACT_APP_WEBSITE_NAME}</title>
      {props.canonical ? <link rel="canonical" href={props.canonical} /> : null}
      {props.description ? <meta name="description" content={props.description} /> : null}
      {props.robots ? <meta name="robots" content={props.robots} /> : null}

      {props?.og?.description ? <meta property="og:description" content={props.og.description} /> : null}
      {props?.og?.locale ? <meta property="og:locale:alternate" content={props.og.localeAlternative} /> : null}
      {props?.og?.localeAlternative ? <meta property="og:locale" content={props.og.locale} /> : null}
      {props?.og?.type ? <meta property="og:type" content={props.og.type} /> : null}

      {props?.og?.type === 'article' ? (
        <React.Fragment>
          {props?.og?.article?.published_time ? <meta property="article:published_time" content={props.og.article.published_time.toJSON()} /> : null}
          {props?.og?.article?.modified_time ? <meta property="article:modified_time" content={props.og.article.modified_time.toJSON()} /> : null}
          {props?.og?.article?.expiration_time ? <meta property="article:expiration_time" content={props.og.article.expiration_time.toJSON()} /> : null}
          {props?.og?.article?.section ? <meta property="article:section" content={props.og.article.section} /> : null}
          {props?.og?.article?.tag ? <meta property="article:tag" content={props.og.article.tag.join(', ')} /> : null}
          {props?.og?.article?.author ? <meta property="article:author" content={props.og.article.author} /> : null}
        </React.Fragment>
      ) : null}

      {props?.og?.type === 'book' ? (
        <React.Fragment>
          {props?.og?.book?.author ? <meta property="book:author" content={props.og.book.author} /> : null}
          {props?.og?.book?.isbn ? <meta property="book:isbn" content={props.og.book.isbn} /> : null}
          {props?.og?.book?.release_date ? <meta property="book:release_date" content={props.og.book.release_date.toJSON()} /> : null}
          {props?.og?.book?.tag ? <meta property="book:tag" content={props.og.book.tag.join(', ')} /> : null}
        </React.Fragment>
      ) : null}

      {props?.og?.type === 'profile' ? (
        <React.Fragment>
          {props?.og?.profile?.first_name ? <meta property="profile:first_name" content={props.og.profile.first_name} /> : null}
          {props?.og?.profile?.last_name ? <meta property="profile:last_name" content={props.og.profile.last_name} /> : null}
          {props?.og?.profile?.username ? <meta property="profile:last_name" content={props.og.profile.username} /> : null}
          {props?.og?.profile?.gender ? <meta property="profile:last_name" content={props.og.profile.gender} /> : null}
        </React.Fragment>
      ) : null}

      {props?.og?.title ? <meta property="og:title" content={props.og.title} /> : null}
      {props?.og?.url ? <meta property="og:url" content={props.og.url} /> : null}
      {props?.og?.audio ? <meta property="og:audio" content={props.og.audio} /> : null}
      {props?.og?.image ? <meta property="og:image" content={props.og.image} /> : null}
      {props?.og?.site_name ? <meta property="og:site_name" content={props.og.site_name} /> : null}
      {props?.og?.updated_time ? <meta property="og:updated_time" content={props.og.updated_time.toJSON()} /> : null}

      {props?.twitter?.card ? <meta name="twitter:card" content={props.twitter.card} /> : null}
      {props?.twitter?.title ? <meta name="twitter:title" content={props.twitter.title} /> : null}
      {props?.twitter?.description ? <meta name="twitter:description" content={props.twitter.description} /> : null}
      {props?.twitter?.site ? <meta name="twitter:site" content={props.twitter.site} /> : null}
      {props?.twitter?.creator ? <meta name="twitter:creator" content={props.twitter.creator} /> : null}
      {props?.twitter?.label1 ? <meta name="twitter:label1" content={props.twitter.label1} /> : null}
      {props?.twitter?.data1 ? <meta name="twitter:data1" content={props.twitter.data1} /> : null}
      {props?.twitter?.label2 ? <meta name="twitter:label2" content={props.twitter.label2} /> : null}
      {props?.twitter?.data2 ? <meta name="twitter:data2" content={props.twitter.data2} /> : null}
    </Helmet>
  );
}
