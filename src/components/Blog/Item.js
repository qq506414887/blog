import FaAngleRight from "react-icons/lib/fa/angle-right";
import FaCalendar from "react-icons/lib/fa/calendar";
import FaTag from "react-icons/lib/fa/tag";
import FaUser from "react-icons/lib/fa/user";
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
        <div>
          <h1>{title}</h1>
          <p className="meta">
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
          </p>
          <p className="description">{excerpt}</p>
          <Link to={slug} key={slug} className="link">
            阅读更多 <FaAngleRight />
          </Link>
        </div>
        <img src={sizes.src} srcSet={sizes.srcSet} className="img" />
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        :global(.link) {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70%;
          height: 40px;
          border: 1px solid #fff;
          color: #fff;
          margin: 0 ${theme.space.s} 10px;
          transition: all ${theme.time.duration.default};
          font-size: 14px;
        }

        .img {
          width: 100%;
          border-radius: 4px;
        }

        li {
          display: flex;
          flex-direction: column;
          margin: ${`calc(${theme.space.default} * 2) 0 calc(${theme.space.default} * 3)`};
          padding: ${theme.space.inset.s};
          position: relative;
          transition: all ${theme.time.duration.default};
          background: transparent;

          &::after {
            content: "";
            height: 0;
            position: absolute;
            bottom: ${`calc(${theme.space.default} * -1.5)`};
            left: 50%;
            transform: translateX(-50%);
            transition: all ${theme.time.duration.default};
            width: 50%;
          }

          &:first-child {
            &::before {
              content: "";
              height: 0;
              position: absolute;
              top: ${`calc(${theme.space.default} * -1.5)`};
              left: 50%;
              transform: translateX(-50%);
              transition: all ${theme.time.duration.default};
              width: 50%;
            }
          }
        }

        h1 {
          padding: ${theme.space.m} ${theme.space.s} 0;
          line-height: ${theme.blog.h1.lineHeight};
          font-size: 1.3em;
          text-remove-gap: both;
          color: #fff;
          font-weight: 500;

          :global(.arrow) {
            display: none;
          }
        }

        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }

        p {
          line-height: 1.5;
          padding: 10px ${theme.space.s};
          text-remove-gap: both;
          color: #fff;
          font-size: 14px;
        }

        .description {
          padding-bottom: 20px;
        }

        @from-width tablet {
          .img {
            width: 100%;
          }
          li {
            margin: ${`calc(${theme.space.default} * 3) 0 calc(${theme.space.default} * 4)`};
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

          :global(.link) {
            width: 130px;
            height: 44px;
            font-size: 16px;
            margin: ${`0 ${theme.space.default} 0`};
          }
          h1 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
            padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
            transition: all 0.5s;
          }
          .meta {
            padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
          }
          p {
            font-size: 16px;
            padding: ${theme.space.default};
          }
        }
        @from-width desktop {
          .img {
            width: 371px;
            height: 236px;
          }

          li {
            flex-direction: row;
            margin: ${`calc(${theme.space.default} * 4) 0 calc(${theme.space.default} * 5)`};
            padding: 0 0 ${`calc(${theme.space.default} * 2)`};

            &::after {
              bottom: ${`calc(${theme.space.default} * -1.5)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -2.75)`};
              }
            }
          }

          :global(.blogItemLink:first-child) > li::before {
            top: ${`calc(${theme.space.default} * -2.75)`};
          }

          :global(.link) {
            margin: ${`0 calc(${theme.space.default} * 2) 0`};
          }
          h1 {
            font-size: 2.5em;
            padding: ${`calc(${theme.space.default} * 1.2) calc(${theme.space.default} * 2) 0`};
          }
          .meta {
            padding: ${`calc(${theme.space.default} * 1.5) calc(${theme.space.default} * 2)
              calc(${theme.space.default} * 0.5)`};
          }
          p {
            padding: ${`${theme.space.default} calc(${theme.space.default} * 2)`};
          }

          @media (hover: hover) {
            li {
              &:hover {
                :global(.link) {
                  transform: scale(1.1);
                }
              }
            }
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
