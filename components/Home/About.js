import React, { Component } from "react";
import Link from "next/link";

function About({ aboutData }) {
  return (
    <section className="about-area pt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="/images/about-img-three.png" alt="Image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <span>Tentang kita</span>
              <h2>{aboutData.nameAbout}</h2>
              <p>{aboutData.contentAbout}</p>

              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <ul>
                    {aboutData.refAboutPoint.slice(0, 3).map((point) => (
                      <li key={point.id}>
                        <i className="flaticon-checked"></i>
                        {point.nameAboutPoint}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ul>
                    {aboutData.refAboutPoint.slice(3, 6).map((point) => (
                      <li key={point.id}>
                        <i className="flaticon-checked"></i>
                        {point.nameAboutPoint}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <Link href="/about-1">
                <a className="default-btn">Selengkapnya</a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

// import React, { Component } from 'react';
// import Link from 'next/link';

// class About extends Component {
//   render() {
//     return (
//       <section className="about-area pt-100">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <div className="about-img">
//                 <img src="/images/about-img-three.png" alt="Image" />
//               </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="about-content">
//                 <span>Tentang kita</span>
//                 <h2>Anda membutuhkan jasa pengembangan website/aplikasi yang murah, canggih, dan profesional?</h2>
//                 <p>UFA Tech adalah jawaban bagi anda yang membutuhkan IT solution. Kami menyelesaikan setiap proyek dengan perhatian ekstra sesuai kebutuhan pelanggan.</p>
//                 <p>Dengan UFA Tech, anda akan mendapatkan berbagai kelebihan</p>
//                 <div className="row">
//                   <div className="col-lg-6 col-sm-6">
//                     <ul>
//                       <li>
//                         <i className="flaticon-checked"></i>
//                         Fleksibilitas
//                       </li>
//                       <li>
//                         <i className="flaticon-checked"></i>
//                         Garansi hingga 3 bulan
//                       </li>
//                       <li>
//                         <i className="flaticon-checked"></i>
//                         Layanan profesional
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="col-lg-6 col-sm-6">
//                     <ul>
//                       <li>
//                         <i className="flaticon-checked"></i>
//                         Harga yang terjangkau
//                       </li>
//                       <li>
//                         <i className="flaticon-checked"></i>
//                         Kualitas premium
//                       </li>
//                       <li>
//                         <i className="flaticon-checked"></i>
//                         Estetika desain dan tampilan
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <Link href="/about-1">
//                   <a className="default-btn">
//                     Selengkapnya
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default About;
