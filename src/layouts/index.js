import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import '../css/reset.css';
import '../css/style.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Helmet
          title="Work — Mohamed&Theo — Directors"
          meta={[
            {
              name: 'description',
              content:
                "Paris-based director duo crafting captivating movies, engaging commercials, and vibrant music videos with a unique blend of passion and enjoyment. Immerse in the world of innovative visual storytelling inspired by the heart of Paris.",
            },
            { name: 'og:locale', content: 'en' },
            { name: 'og:type', content: 'en' },
            { name: 'og:title', content: 'Work — Mohamed&Theo — Directors' },
            {
              name: 'og:description',
              content:
                "Paris-based director duo crafting captivating movies, engaging commercials, and vibrant music videos with a unique blend of passion and enjoyment. Immerse in the world of innovative visual storytelling inspired by the heart of Paris.",
            },
            { name: 'og:url', content: 'mohamedandtheo.com' },
            {
              name: 'og:site_name',
              content: 'Work — Mohamed&Theo — Directors',
            },
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:title',
              content: 'Work — Mohamed&Theo — Directors',
            },
            {
              name: 'twitter:description',
              content:
                "Paris-based director duo crafting captivating movies, engaging commercials, and vibrant music videos with a unique blend of passion and enjoyment. Immerse in the world of innovative visual storytelling inspired by the heart of Paris.",
            },
          ]}
        />
        <div>{this.props.children()}</div>
      </div>
    );
  }
}
