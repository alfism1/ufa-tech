import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-top-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <Link href="/">
                    <a className="navbar-brand d-flex align-items-center mt-2">
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

                  <p>{this.props.about.contentAbout}</p>

                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Digi Brand
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Sistem informasi
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Website
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Mobile application
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Links</h3>

                  <ul>
                    <li>
                      <a href="#">
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#tentang">
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Tentang Kami
                      </a>
                    </li>
                    <li>
                      <a href="#layanan">
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Layanan
                      </a>
                    </li>
                    <li>
                      <a href="#faqs">
                        <i className="right-icon bx bx-chevrons-right"></i>
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Information</h3>

                  <ul className="information">
                    <li className="address">
                      <i className="flaticon-call"></i>
                      <span>Phone</span>
                      {
                        this.props.contact.filter(
                          (c) => c?.nameContact == "Phone"
                        )[0]?.typeContact
                      }
                    </li>

                    <li className="address">
                      <i className="flaticon-envelope"></i>
                      <span>Email</span>
                      {
                        this.props.contact.filter(
                          (c) => c?.typeContact == "Email"
                        )[0]?.nameContact
                      }
                    </li>

                    <li className="address">
                      <i className="flaticon-maps-and-flags"></i>
                      <span>Alamat</span>
                      Jakarta, Indonesia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-shape">
            <img src="/images/shape/footer-shape-one.png" alt="Image" />
            <img src="/images/shape/footer-shape-two.png" alt="Image" />
          </div>
        </footer>

        {/* Footer Bottom Area   */}
        <footer className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="copy-right">
                  <p>
                    Copyright &copy; {currentYear} UfaTech. All Rights Reserved
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="privacy">
                  <ul>
                    <li>
                      <Link href="/terms-conditions">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="designed">
                  <p>
                    Designed By{" "}
                    <a href="/" target="_blank">
                      UfaTech
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
