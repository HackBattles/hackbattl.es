import React from 'react';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';

import Header from '../components/Header';
import GoogleStaticMap from '../components/GoogleStaticMap';

const EventTemplate = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div className="wrapper">
      <div className="content">
        <Helmet title={`HackBattles - ${post.frontmatter.location} - ${post.frontmatter.title}`} />
        <Header
          title={post.frontmatter.title}
          byline={post.frontmatter.location}
        />
        <div className="event__body">
          <div className="event__meta">
            <dl className="event__details">
              <dt>Date:</dt>
              <dd>{post.frontmatter.date}</dd>
              <dt>Time:</dt>
              <dd>{post.frontmatter.time}</dd>
              <dt>Venue:</dt>
              <dd>{post.frontmatter.venue}</dd>
              <dt>Address:</dt>
              <dd>{post.frontmatter.address}</dd>
            </dl>
            <GoogleStaticMap
              address={post.frontmatter.address}
            />
          </div>
          <div
            className="event__content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        { post.frontmatter.registrationUrl && (
          <a
            className="button button--block"
            href={post.frontmatter.registrationUrl}
          >Register Your Team Now!</a>
        )}
      </div>
    </div>
  );
};

export default EventTemplate;

export const pageQuery = graphql`
    query EventByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                location
                address
                date
                time
                registrationUrl
                venue
            }
        }
    }
  `
;
