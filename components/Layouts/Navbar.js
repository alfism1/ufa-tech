import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import Image from "next/image";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area fixed-top">
          <nav className="navbar navbar-expand-md">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand d-flex justify-content-center align-items-center">
                  {/* LOGO */}
                  {/* <img src="/images/white-logo.png" alt="logo" /> */}
                  <Image
                    src="/images/white-logo.png"
                    width={130}
                    height={40}
                    layout="intrinsic"
                  />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#tentang" className="nav-link">
                      Tentang
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#layanan" className="nav-link">
                      Layanan
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#faqs" className="nav-link">
                      FAQs
                    </a>
                  </li>

                  {/* <li className="nav-item">
                    <a className="nav-link">Team</a>
                  </li> */}

                  <li className="nav-item">
                    <a
                      target={"_blank"}
                      href="https://api.whatsapp.com/send?phone=6281296589616"
                      className="nav-link"
                    >
                      Hubungi kami
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
