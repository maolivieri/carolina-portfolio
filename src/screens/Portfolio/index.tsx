import { FC, useState } from "react";
import styles from "./styles.module.scss";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ProjectCard } from "../../components/ProjectCard";
import { SliderControl } from "../../components/SliderControl";

const PortfolioScreen: FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: false,
    rubberband: false,
    slides: {
      number: 8,
      origin: "center",
      perView: 1,
    },
    vertical: true,
  });

  return (
    <div className={`keen-slider ${styles.container}`}>
      <div className={styles.textWrapper}>
        <h5 className={styles.header}>{`Creative territory`}</h5>
        <h1 className={styles.title}>My Lab</h1>
      </div>
      <div ref={ref} className={`keen-slider ${styles.body}`}>
        <div className={`keen-slider__slide ${styles.cardContainer}`}>
          <ProjectCard
            content={`Independent experimental UI & UX for an in-venue ordering solution with focus on accessibility. `}
            contentWidth="40%"
            imageWidth="50vw"
            imageRight="-1rem"
            imageBottom="-5rem"
            image="/assets/cards/gullieApp.png"
            imageW={551}
            imageH={630}
            title="Gullie App"
            type="UI | UX"
            projectURL="asd"
          />
        </div>
        <div className={`keen-slider__slide ${styles.cardContainer}`}>
          <ProjectCard
            content={`User friendly and intuitive interface that facilitarem the setup and configuration of the user-racing product on a dynamic and Instant way.`}
            contentWidth="40%"
            imageWidth="60vw"
            imageRight="-4rem"
            imageBottom="-4rem"
            image="/assets/cards/gullieAdmin.png"
            imageW={890}
            imageH={811}
            title="Gullie Manager"
            type="UI | UX"
            projectURL="asd"
          />
        </div>
        <div className={`keen-slider__slide ${styles.cardContainer}`}>
          <ProjectCard
            content={`A website designed for a multi-brand car dealership, allowing users to filter the available cars and experience the most of it before visiting the physical location.`}
            contentWidth="40%"
            imageWidth="40vw"
            imageRight="0"
            imageBottom="0"
            image="/assets/cards/miguelVeiculos.png"
            imageW={606}
            imageH={791}
            title="Miguel Veículos"
            type="UI | UX"
            projectURL="asd"
          />
        </div>
        <div className={`keen-slider__slide ${styles.cardContainer}`}>
          <ProjectCard
            content={`The Golden Nose Bingo Club is a collection of 196 unique - and we can say, adorable - NFTs. It is a simple project with the goal to help the Animal Cause in Brazil.`}
            contentWidth="47%"
            imageWidth="41vw"
            imageRight="0"
            imageBottom="-1rem"
            image="/assets/cards/goldenNose.png"
            imageW={553}
            imageH={499}
            title="NFT Project | TGNBC"
            type="Illustrations"
            projectURL="asd"
          />
        </div>
        <div className={`keen-slider__slide ${styles.cardContainer}`}>
          <ProjectCard
            content={`Part of the big Gullie Family, the Gullies are the illustration characters that bring a bit more fun and personality to the products.`}
            contentWidth="30%"
            imageWidth="60vw"
            imageRight="0"
            imageBottom="-2rem"
            image="/assets/cards/gullies.png"
            imageW={888}
            imageH={479}
            title="Gullies"
            type="Illustrations"
            projectURL="asd"
          />
        </div>
        <div className={`keen-slider__slide ${styles.cardContainer}`}>
          <ProjectCard
            content={`Designed for hospitality venues that want to automise and improve their kitchen’s performance by managing their orders by a seamless operation from order to running the dish.`}
            contentWidth="50%"
            imageWidth="40vw"
            imageRight="-3rem"
            imageBottom="-4.5rem"
            image="/assets/cards/kds.png"
            imageW={966}
            imageH={898}
            title="Kitchen Display System"
            type="UI"
            projectURL="asd"
          />
        </div>
        <div className={`keen-slider__slide ${styles.cardContainer}`}>
          <ProjectCard
            content={`The OrderNow online ordering solution gives users the ability to order from home for delivery, take out and drive through, as well as having the online dine-in experience.`}
            contentWidth="50%"
            imageWidth="29%"
            imageRight="0"
            imageBottom="-2px"
            image="/assets/cards/yourOrder.png"
            imageW={734}
            imageH={502}
            title="Online Ordering Solution"
            type="UI"
          />
        </div>
        <div className={`keen-slider__slide ${styles.cardContainer}`}>
          <ProjectCard
            content={`A space for Company and customers to work along from kick-off to launch of a project, having at-a glande view of the progress, next steps, documents, instructions and training videos.`}
            contentWidth="48%"
            imageWidth="45vw"
            imageRight="-3.5rem"
            imageBottom="0"
            image="/assets/cards/projectM.png"
            imageW={667}
            imageH={452}
            title="Interactive Project Management"
            type="UI | UX"
          />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <SliderControl
          instance={instanceRef}
          count={8}
          currentSlide={currentSlide}
        />
      )}
    </div>
  );
};

export { PortfolioScreen };
