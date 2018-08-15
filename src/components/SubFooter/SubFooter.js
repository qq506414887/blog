import React from "react";

import one from "../../images/png/1.png";
import two from "../../images/png/2.png";
import three from "../../images/png/3.png";
import four from "../../images/png/4.png";
import five from "../../images/png/5.png";
import six from "../../images/png/6.png";
import seven from "../../images/png/7.png";
import eight from "../../images/png/8.png";

class SubFooter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero">
          <div className="item">
            <div className="top small">
              <div className="mask">
                <h4>小畅畅是最帅的</h4>
              </div>
              <img src={one} />
            </div>
            <div className="large">
              <div className="mask">
                <h4>小畅畅是最帅的</h4>
              </div>
              <img src={two} />
            </div>
          </div>
          <div className="item">
            <div className="top large">
              <div className="mask">
                <h4>小畅畅是最帅的</h4>
              </div>
              <img src={three} />
            </div>
            <div className="small">
              <div className="mask">
                <h4>小畅畅是最帅的</h4>
              </div>
              <img src={four} />
            </div>
          </div>
          <div className="item">
            <div className="top small">
              <div className="mask">
                <h4>小畅畅是最帅的</h4>
              </div>
              <img src={five} />
            </div>
            <div className="large">
              <div className="mask">
                <h4>小畅畅是最帅的</h4>
              </div>
              <img src={six} />
            </div>
          </div>
          <div className="item">
            <div className="top large">
              <div className="mask">
                <h4>小畅畅是最帅的</h4>
              </div>
              <img src={seven} />
            </div>
            <div className="small">
              <div className="mask">
                <h4>小畅畅是最帅的</h4>
              </div>
              <img src={eight} />
            </div>
          </div>
        </section>
        {/* --- STYLES --- */}
        <style jsx>{`
          .hero {
            display: flex;
          }

          .item {
            width: 25%;
            padding-right: 1vw;

            &:last-child {
              padding-right: 0;
            }

            & > div {
              position: relative;
              width: 100%;
              overflow: hidden;
            }

            & img {
              display: block;
              width: 100%;
              height: 100%;
              transition: all 0.5s;
            }
          }

          .top {
            margin-bottom: 1vw;
          }

          .small {
            height: 90px;
          }

          .large {
            height: 134px;
          }

          .mask {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 0;
            transition: all 0.5s;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

            & h4 {
              font-size: 20px;
              color: #fff;
              padding: 20px;
              font-weight: 300;
            }
          }

          @from-width desktop {
            .small {
              height: 218px;
            }

            .large {
              height: 326px;
            }

            @media (hover: hover) {
              .item > div:hover {
                & img {
                  transform: scale(1.1);
                }

                & .mask {
                  height: 70px;
                }
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default SubFooter;
