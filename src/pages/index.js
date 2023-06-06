import Link from 'gatsby-link';
import _ from 'lodash';
import * as PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  data: PropTypes.object.isRequired,
};

const Project = ({ node }) => (
  <li className="list-project-item clearfix">
    <Link to={`/projects/${node.id}`}>
      <div className="item-wrapper">
        <img
          width={node.thumbnail.responsiveResolution.width}
          height={node.thumbnail.responsiveResolution.height}
          src={node.thumbnail.responsiveResolution.src}
          srcSet={node.thumbnail.responsiveResolution.srcSet}
          alt={node.title}
        />
        <div className="list-project-title">{node.title}</div>
      </div>
    </Link>
  </li>
);

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'all',
    };
  }

  render() {
    const projectEdges = _.orderBy(
      this.props.data.projects.edges.filter(
        ({ node }) =>
          node.type === this.state.activeFilter ||
          this.state.activeFilter === 'all',
      ),
      [(edge) => edge.node.order],
      ['asc'],
    );

    const types = _.uniq(
      this.props.data.projects.edges.map(({ node }) => node.type),
    ).filter(Boolean);

    return (
      <div className="container">
        <div className="header clearfix">
          <ul className="navigation-left">
            <li>
              <h1>Mohamed Chabane</h1>
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
          <div className="types-filter">
            <span
              className={
                this.state.activeFilter === 'all' ? 'active-filter' : ''
              }
              onClick={() => this.setState({ activeFilter: 'all' })}
              role="button"
            >
              All
            </span>{' '}
            /{' '}
            {types.map((type, index) => (
              <span
                className={
                  this.state.activeFilter === type ? 'active-filter' : ''
                }
                onClick={() => this.setState({ activeFilter: type })}
                role="button"
              >
                {type}
                {index !== types.length - 1 ? ' / ' : ''}
              </span>
            ))}
          </div>
        </div>
        <main className="main">
          <div>
            <ul className="list-project clearfix zoom-in-sm">
              {projectEdges.map(({ node }) => (
                <Project node={node} key={node.id} />
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">
          <h2>© {new Date().getFullYear()} Mohamed Chabane.</h2>
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
          type
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
