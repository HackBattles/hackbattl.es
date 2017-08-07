import React from 'react';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';

import Header from '../components/Header';

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
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
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
            }
        }
    }
  `
;