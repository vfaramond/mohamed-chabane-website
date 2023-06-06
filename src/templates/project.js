import Link from 'gatsby-link';
import moment from 'moment';
import * as PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  data: PropTypes.object.isRequired,
};

class ProjectTemplate extends React.Component {
  renderNextLink() {
    const nextId = this.props.pathContext.nextId;

    if (!nextId) return null;

    return (
      <Link to={`/projects/${nextId}`}>
        <button className="carousel-btn">
          <span className="carousel-btn-label">Next</span>
        </button>
      </Link>
    );
  }

  render() {
    let youtubeVideoId;

    const project = this.props.data.contentfulProject;
    const { title, production, role } = project;

    if (project.youtubeVideoUrl.includes('youtube')) {
      youtubeVideoId = project.youtubeVideoUrl.split('v=')[1];
    }

    const date = moment(project.date);

    return (
      <div className="container">
        <div className="header clearfix">
          <ul className="navigation-left">
            <li>
              <Link to={`/`}>Back</Link>
            </li>
            <li>
              <h2 className="header-title">{title}</h2>
            </li>
          </ul>
          <div className="carousel-pager">{this.renderNextLink()}</div>
        </div>
        <div className="zoom-in-sm">
          <main className="main">
            <ul className="project clearfix">
              <div className="project-item clearfix">
                <div className="iframe-responsive-wrapper">
                  <img
                    className="iframe-ratio"
                    src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7"
                    alt="iframe-ratio"
                  />
                  {youtubeVideoId ? (
                    <iframe
                      title={title}
                      width="1920"
                      height="1080"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1;showinfo=0`}
                      frameBorder="0"
                      allowFullScreen
                    />
                  ) : (
                    <iframe
                      title={title}
                      width="1920"
                      height="1080"
                      frameBorder="0"
                      allowFullScreen
                      src={`${project.youtubeVideoUrl}?autoplay=1`}
                    ></iframe>
                  )}
                </div>
              </div>
            </ul>
          </main>
          <div className="info-box">
            <h2>
              Production:
              <br />
              {production}
            </h2>
          </div>
          <div className="info-box">
            <h2>
              Date:
              <br />
              {date.format('MMMM Y')}
            </h2>
          </div>
          <div className="info-box">
            <h2>
              Role:
              <br />
              {role}
            </h2>
          </div>
        </div>
        <footer className="footer">
          <h2>© {new Date().getFullYear()} Mohamed Chabane.</h2>
        </footer>
      </div>
    );
  }
}

ProjectTemplate.propTypes = propTypes;

export default ProjectTemplate;

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      youtubeVideoUrl
      production
      date
      role
    }
  }
`;
