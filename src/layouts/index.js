import React from 'react';
import PropTypes from 'prop-types';
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
          title="Work — Mohamed Chabane — Director"
          meta={[
            {
              name: 'description',
              content:
                "Director based in Paris, currently work at L'ordre Co ; a french collective specialising in music, video and digital art. Fusing culture and technology to create original works.",
            },
            { name: 'og:locale', content: 'fr_FR' },
            { name: 'og:type', content: 'fr_FR' },
            { name: 'og:title', content: 'Work — Mohamed Chabane — Director' },
            {
              name: 'og:description',
              content:
                "Director based in Paris, currently work at L'ordre Co ; a french collective specialising in music, video and digital art. Fusing culture and technology to create original works.",
            },
            { name: 'og:url', content: 'mohamedchabane.com' },
            {
              name: 'og:site_name',
              content: 'Work — Mohamed Chabane — Director',
            },
            { name: 'og:image', content: 'img/og-image.jpg' },
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:title',
              content: 'Work — Mohamed Chabane — Director',
            },
            {
              name: 'twitter:description',
              content:
                "Director based in Paris, currently work at L'ordre Co ; a french collective specialising in music, video and digital art. Fusing culture and technology to create original works.",
            },
            { name: 'twitter:image', content: 'img/og-image.jpg' },
          ]}
        />
        <div>
          {this.props.children()}
        </div>
      </div>
    );
  }
}
