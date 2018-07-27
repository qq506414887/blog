import FaArrowRight from "react-icons/lib/fa/arrow-right";
import FaCalendar from "react-icons/lib/fa/calendar";
import FaTag from "react-icons/lib/fa/tag";
import FaUser from "react-icons/lib/fa/user";
import Img from "gatsby-image";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const {
    theme,
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        category,
        author,
        cover: {
          children: [{ sizes }]
        }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <li>
        <div className="blogItem">
          <div className="blogItemContent">
            <h1 className="blogItemTitle">{title}</h1>
            {/* <p className="meta">
              <span>
                <FaCalendar size={18} /> {prefix}
              </span>
              <span>
                <FaUser size={18} /> {author}
              </span>
              {category && (
                <span>
                  <FaTag size={18} /> {category}
                </span>
              )}
            </p> */}
            <p className="meta">{excerpt}</p>

            <div className="blogLinkContainer">
              <Link to={slug} key={slug} className="link blogLink">
                阅读更多
              </Link>
            </div>
          </div>
          <div className="blogImageContainer">
            <Img sizes={sizes} />
          </div>
        </div>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        .blogItem {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .blogItemContent {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 100%;
        }
        .blogItemTitle {
          height: 42px;
          font-size: 24px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color: #fff;
        }

        .blogLinkContainer {
          margin-top: 30px;
          padding: 0 10px;
        }

        .link {
          width: 130px;
          height: 44px;
          line-height: 44px;
          border: 1px solid #fff;
          margin-top: 30px;
        }

        :global(.link) {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 128px;
          height: 44px;
          border: 1px solid #fff;
          color: #fff;
          font-size: 14px;
        }

        li {
          border: 1px solid transparent;
          border-radius: ${theme.size.radius.default};
          margin: ${`calc(${theme.space.default} * 2) 0 calc(${
            theme.space.default
          } * 3)`};
          padding: ${theme.space.inset.s};
          position: relative;
          transition: all ${theme.time.duration.default};
          background: transparent;

          :global(.gatsby-image-outer-wrapper) {
            border-radius: ${theme.size.radius.default};
            overflow: hidden;
          }
        
        }

        h1 {
          padding: ${theme.space.m} ${theme.space.s} 0;
          line-height: ${theme.blog.h1.lineHeight};
          font-size: ${theme.blog.h1.size};
          text-remove-gap: both;

          :global(.arrow) {
            display: none;
          }
        }

        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          padding: ${theme.space.m} ${theme.space.s};
          background: transparent;
          color: #fff;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
            color: #fff;
          }
        }

        p {
          line-height: 1.5;
          padding: 0 ${theme.space.s};
          text-remove-gap: both;
        }

        .blogImageContainer {
          margin-top: 20px;
        }

        @from-width tablet {
          li {
            margin: ${`calc(${theme.space.default} * 3) 0 calc(${
              theme.space.default
            } * 4)`};
            padding: ${theme.space.default};

            &::after {
              bottom: ${`calc(${theme.space.default} * -2)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -1.75)`};
              }
            }
          }

          h1 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
            padding: ${`calc(${theme.space.default} * 1.5) ${
              theme.space.default
            } 0`};
            transition: all 0.5s;
          }
          .meta {
            padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
          }
          p {
            padding: 0 ${theme.space.default};
          }
        }
        @from-width desktop {
          li {
            margin: ${`calc(${theme.space.default} * 4) 0 calc(${
              theme.space.default
            } * 5)`};
            padding: 0 0 ${`calc(${theme.space.default} * 2)`};

            &::after {
              bottom: ${`calc(${theme.space.default} * -1.5)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -2.75)`};
              }
            }

            :global(.gatsby-image-outer-wrapper) {
              width: 40vw;
            }
          }

          .blogImageContainer {
            margin-top: 0;
          }

          .blogLinkContainer {
            margin-top: 30px;
            padding: 0 40px;
          }

          :global(.blogItemLink:first-child) > li::before {
            top: ${`calc(${theme.space.default} * -2.75)`};
          }
          h1 {
            font-size: 2.5em;
            padding: ${`calc(${theme.space.default} * 1.2) calc(${
              theme.space.default
            } * 2) 0`};
            padding-top: 0;
          }
          .meta {
            padding: ${`calc(${theme.space.default} * 1.5) calc(${
              theme.space.default
            } * 2)
              calc(${theme.space.default} * 0.5)`};
          }
          p {
            padding: ${`0 calc(${theme.space.default} * 2)`};
          }

          .blogItem {
            flex-direction: row;
          }

          .blogItemContent {
            max-width: 50%;
          }
          .blogItemTitle {
            height: 30px;
            line-height: 1.5;
            font-size: 24px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .blogItemContent {
            max-width: 50%;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Item;
