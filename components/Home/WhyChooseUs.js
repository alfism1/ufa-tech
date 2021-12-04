import React, { Component } from 'react';

class WhyChooseUs extends Component {
  render() {
    return (
      <section className="choose-ue-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Kenapa memilih kami?</span>
            <h2>Tim kami merupakan para profesional dalam pengembangan Software</h2>
            <p>Dalam proses pengembangan website/aplikasi, kami selalu menggunakan teknologi terbaru, sehingga untuk performa dan kualitas tidak diragukan lagi.</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <ul>
                  <li>
                    <span>01 <i className="flaticon-technical-support"></i></span>
                    <h3>Keamanan</h3>
                    <p>Sistem yang kami buat sangat memperhatikan keamanan, sehingga prosentase kerugian yang dihasilkan sangat minimal.</p>
                  </li>
                  <li className="ml">
                    <span>02 <i className="flaticon-shield"></i></span>
                    <h3>Dukungan Teknis</h3>
                    <p>Kami akan dengan senang hati membantu saat terjadi kendala yang bersifat teknis.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="choose-content">
                <ul>
                  <li className="ml-25">
                    <span>03 <i className="flaticon-support"></i></span>
                    <h3>Harga bersahabat</h3>
                    <p>Harga yang kami tawarkan sangat terjangkau, sehingga anda bisa mendapatkan layanan hebat dengan harga bersahabat.</p>
                  </li>
                  <li>
                    <span>04 <i className="flaticon-technical-support"></i></span>
                    <h3>Teknologi Mutakhir</h3>
                    <p>Perkembangan dunia IT sangatlah cepat, dan kami selalu beradaptasi untuk memberikan hasil yang terbaik.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WhyChooseUs;
