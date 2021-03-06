import React from 'react';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';
import _ from 'lodash';

const propTypes = {
  data: PropTypes.object.isRequired,
};

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1 },
};

const Project = ({ node }) =>
  <li className="list-project-item clearfix animsition-link">
    <Link to={`/projects/${node.id}`}>
      <div className="item-wrapper">
        <img
          width={node.thumbnail.responsiveResolution.width}
          height={node.thumbnail.responsiveResolution.height}
          src={node.thumbnail.responsiveResolution.src}
          srcSet={node.thumbnail.responsiveResolution.srcSet}
          alt={node.title}
        />
      </div>
      <div className="list-project-title">
        {node.title}
      </div>
    </Link>
  </li>;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { in: false };
  }

  componentDidMount() {
    this.setState({ in: true });
  }

  render() {
    const projectEdges = _.orderBy(
      this.props.data.projects.edges,
      [edge => edge.node.order],
      ['asc'],
    );
    return (
      <div className="container">
        <div className="header clearfix">
          <ul className="navigation-left">
            <li>
              <Link to={`/`}>Mohamed Chabane</Link>
            </li>
            <li>
              <h2>Director</h2>
            </li>
          </ul>
          <ul className="navigation-right">
            <li>
              <h2 href="#">+33 7 81 45 35 94</h2>
            </li>
            <li>
              <a href="mailto:moamedchabane@gmail.com">
                moamedchabane@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <main className="main">
          <div>
            <ul className="list-project clearfix zoom-in-sm">
              {projectEdges.map(({ node }) =>
                <Project node={node} key={node.id} />,
              )}
            </ul>
          </div>
        </main>
        <footer className="footer">
          <h2>
            ©{new Date().getFullYear()} Mohamed Chabane.
          </h2>
        </footer>
      </div>
    );
  }
}

IndexPage.propTypes = propTypes;

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    projects: allContentfulProject {
      edges {
        node {
          id
          title
          order
          thumbnail {
            responsiveResolution(width: 700) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
