import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class ServicesStyleOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="layanan" className="choose-ue-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Keahlian kami?</span>
            <h2>{this.props.headingProduct}</h2>
            <p>{this.props.contentProduct}</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {this.props.refProductPoints.map((data) => (
              <div key={data.id} className="col-lg-4 col-sm-6">
                <div className="single-features">
                  {/* <i className="flaticon-cloud-computing-1"></i> */}
                  <Image src={data.imageService.url} height={100} width={105} />
                  <h3>{data.nameService}</h3>
                  <p>{data.descriptionService.text}</p>

                  <Link href="/service-details">
                    <a className="read-more-icon">
                      <span className="flaticon-right-arrow"></span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesStyleOne;
