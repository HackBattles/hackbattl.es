import React from 'react';
import graphql from 'graphql-tag';
import PropTypes from 'prop-types';

import Header from '../components/Header';

const Index = ({ data }) => (
  <div className="content">
    <Header
      title={data.site.siteMetadata.title}
      byline={data.site.siteMetadata.description}
    />
    <h2>Upcoming</h2>
    <a href="/fl/gnv/discover-gainesville">Gainesville, FL - August 26, 2017</a>
    <h2>More</h2>
    <p>
      Want to host a HackBattle in your area?<br />
      Visit the <a href="https://github.com/HackBattles/hackbattl.es">HackBattles Github repo</a> for information.
    </p>
  </div>
);

Index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  }),
};

Index.defaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: '',
        description: '',
      },
    },
  },
};

export default Index;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

