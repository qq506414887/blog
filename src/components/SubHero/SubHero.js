import React from "react";
import PropTypes from "prop-types";
import bannerSmall from "../../images/png/banner-small.png";

const Hero = props => {
  const { backgrounds, theme } = props;
  console.log(backgrounds);
  return (
    <React.Fragment>
      <section className="hero">
        <img src={bannerSmall} className="bannerSmall" />
      </section>
      {/* --- STYLES --- */}
      <style jsx>{`
        .bannerSmall {
          width: 73vw;
        }

        .hero {
          align-items: center;
          background-image: url(${backgrounds.subMobile});
          background: no-repeat;
          background-size: 100% 100%;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 90vh;
          height: 100px;
          box-sizing: border-box;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
          margin-top: 10vh;
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            fill: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.subTablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.subDesktop});
            padding-top: 10vw;
            box-sizing: border-box;
          }

          .bannerSmall {
            width: 73vw;
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
