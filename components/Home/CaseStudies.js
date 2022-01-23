import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  autoplay: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 30,
  center: false,
  dots: true,
  slidetransition: "linear",
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

class CaseStudies extends Component {
  constructor(props) {
    super(props);
  }

  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <section className="case-area pb-100">
        <div className="container">
          <div className="section-title">
            <span>Case</span>
            <h2>{this.props.cases.headingCase}</h2>
          </div>

          {this.state.display ? (
            <OwlCarousel
              className="case-top-wrap owl-carousel owl-theme"
              {...options}
            >
              {this.props.cases.refCasePoint.map((c) => (
                <div key={c.nameCase} className="case-wrap">
                  <div className="single-case">
                    {/* <img src="/images/cases/case1.png" alt="Image" /> */}
                    <Image
                      priority
                      alt={c.nameCase}
                      src={c.imageCase.url}
                      width={c.imageCase.width}
                      height={c.imageCase.height}
                    />

                    <Link href="/">
                      <a className="link-icon">
                        <i className="bx bx-plus"></i>
                      </a>
                    </Link>
                  </div>

                  <h3>{c.nameCase}</h3>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default CaseStudies;
