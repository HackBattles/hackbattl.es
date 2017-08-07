import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Header = ({ title, byline }) => (
  <div className="header">
    <h1 className={cn(
      'header__title',
      { 'header__title--with-byline': byline.length })}
    >
      {title}
    </h1>
    {
      byline.length && (
        <p className="header__byline">
          {byline}
        </p>
      )
    }
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  byline: PropTypes.string,
};

Header.defaultProps = {
  byline: '',
};

export default Header;
