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
          title="Work — Momo & Théo — Directors"
          meta={[
            {
              name: 'description',
              content:
                "Paris-based Director at L'ordre Co - a French creative collective specializing in music, video, and digital art. Seamlessly blending culture with cutting-edge technology to generate extraordinary and original pieces of art.",
            },
            { name: 'og:locale', content: 'fr_FR' },
            { name: 'og:type', content: 'fr_FR' },
            { name: 'og:title', content: 'Work — Momo & Théo — Directors' },
            {
              name: 'og:description',
              content:
                "Paris-based Director at L'ordre Co - a French creative collective specializing in music, video, and digital art. Seamlessly blending culture with cutting-edge technology to generate extraordinary and original pieces of art.",
            },
            { name: 'og:url', content: 'mohamedandtheo.com' },
            {
              name: 'og:site_name',
              content: 'Work — Momo & Théo — Directors',
            },
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:title',
              content: 'Work — Momo & Théo — Directors',
            },
            {
              name: 'twitter:description',
              content:
                "Paris-based Director at L'ordre Co - a French creative collective specializing in music, video, and digital art. Seamlessly blending culture with cutting-edge technology to generate extraordinary and original pieces of art.",
            },
          ]}
        />
        <div>{this.props.children()}</div>
      </div>
    );
  }
}
