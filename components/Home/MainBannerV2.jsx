import React from "react";
import styles from "./MainBannerV2.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MainBannerV2 = () => {
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
        <div className={styles.item}>
          <div className={styles.itemBg1} />
          <div className={styles.itemContent}>
            <span>Software Dev. & Dibirand Services</span>
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
            <span>Software Dev. & Dibirand Services</span>
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
            <span>Software Dev. & Dibirand Services</span>
            <h1>World’s Leading Machine Learning Company</h1>
            <p>
              If we drive down the cost of transportation in space, we can do
              great things.
            </p>
          </div>
        </div>
      </Carousel>

      {/* <div className={styles.blocker} /> */}
    </section>
  );
};

export default MainBannerV2;
