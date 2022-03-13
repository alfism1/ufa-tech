import React from "react";
import styles from "./MainBannerV2.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MainBannerV2 = ({ sliderData }) => {
  return (
    <section className={styles.mainBanner}>
      <Carousel
        infiniteLoop
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        className="presentation-mode"
        stopOnHover={true}
        showStatus={false}
        swipeable={false}
      >
        {sliderData.map((slider, i) => {
          return (
            <div key={i} className={styles.item}>
              <div
                className={styles.itemBg1}
                style={{ backgroundImage: `url('${slider.assetSlider.url}')` }}
              />
              <div className={styles.itemContent}>
                <span>Software Dev. & Digibrand Services</span>
                <h1>{slider.headerSlider}</h1>
                <p>{slider.descriptionSlider.text}</p>
              </div>
            </div>
          );
        })}
        {/* <div className={styles.item}>
          <div className={styles.itemBg1} />
          <div className={styles.itemContent}>
            <span>Software Dev. & Digibrand Services</span>
            <h1>Secure IT Solutions For A More Secure Environment</h1>
            <p>
              If we drive down the cost of transportation in space, we can do
              great things.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemBg2} />
          <div className={styles.itemContent}>
            <span>Software Dev. & Digibrand Services</span>
            <h1>Specialized Artificial Intelligence Startup</h1>
            <p>
              If we drive down the cost of transportation in space, we can do
              great things.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemBg3} />
          <div className={styles.itemContent}>
            <span>Software Dev. & Digibrand Services</span>
            <h1>World’s Leading Machine Learning Company</h1>
            <p>
              If we drive down the cost of transportation in space, we can do
              great things.
            </p>
          </div>
        </div> */}
      </Carousel>

      {/* <div className={styles.blocker} /> */}
    </section>
  );
};

export default MainBannerV2;
