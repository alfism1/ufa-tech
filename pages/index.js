import React, { useEffect } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import PartnerSlider from "../components/Common/PartnerSlider";
import About from "../components/Home/About";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Services from "../components/Home/Services";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import CaseStudies from "../components/Home/CaseStudies";
import Testimonials from "../components/Common/Testimonials";
import Faq from "../components/Home/Faq";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";

import { getHomeInfo } from "../graphql/home";

function Home({ homeInfo }) {
  useEffect(() => {
    console.log(homeInfo);
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <PartnerSlider />
      <About aboutData={homeInfo.ufaAbouts[0]} />
      <WhyChooseUs whyChooseUsData={homeInfo.ufaWhyChooseUses[0]} />
      {/* <Services /> */}
      {/* <MakeYourBusiness /> */}
      {/* <WhatWeOffer /> */}
      {/* <CaseStudies /> */}
      {/* <Testimonials /> */}
      <Faq faqData={homeInfo.ufaFaqs} />
      {/* <News /> */}
      <Footer />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  try {
    const homeInfo = (await getHomeInfo()) || [];

    return {
      props: { homeInfo },
      revalidate: 10,
    };
  } catch (error) {
    // res.statucCode = 404
    return { props: {} };
  }
}
