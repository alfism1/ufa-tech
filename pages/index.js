import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import PartnerSlider from '../components/Common/PartnerSlider';
import About from '../components/Home/About';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Services from '../components/Home/Services';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import WhatWeOffer from '../components/Home/WhatWeOffer';
import CaseStudies from '../components/Home/CaseStudies';
import Testimonials from '../components/Common/Testimonials';
import Faq from '../components/Home/Faq';
import News from '../components/Common/News';
import Footer from '../components/Layouts/Footer';

class Index5 extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MainBanner />
        <PartnerSlider />
        <About />
        <WhyChooseUs />
        <Services />
        <MakeYourBusiness />
        <WhatWeOffer />
        <CaseStudies />
        <Testimonials />
        <Faq />
        <News />
        <Footer />
      </>
    );
  }
}

export default Index5;