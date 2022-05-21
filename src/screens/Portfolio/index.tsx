import { useState } from "react";
import styles from "./styles.module.scss";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { ProjectCard } from "../../components/ProjectCard";
import { SliderControl } from "../../components/SliderControl";

import projectsJson from "./portfolio.json";

export type IProject = {
  id: number;
  content: string;
  contentWidth: string;
  imageWidth: string;
  imageRight: string;
  imageBottom: string;
  image: string;
  imageW: number;
  imageH: number;
  title: string;
  type: string;
  projectURL: string;
};

interface IProps {
  id: string;
}

const PortfolioScreen = ({ id }: IProps) => {
  const projects = projectsJson as IProject[];
  const sliderCount = projects.length;
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
      number: sliderCount,
      origin: "center",
      perView: 1,
    },
    vertical: true,
  });

  return (
    <div className={`keen-slider ${styles.container}`} id={id}>
      <div className={styles.textWrapper}>
        <h5 className={styles.header}>{`Creative territory`}</h5>
        <h1 className={styles.title}>My Lab</h1>
      </div>
      <div ref={ref} className={`keen-slider ${styles.body}`}>
        {projects.map((project, idx) => (
          <div
            className={`keen-slider__slide ${styles.cardContainer}`}
            key={idx}
          >
            <ProjectCard
              content={project.content}
              contentWidth={project.contentWidth}
              imageWidth={project.imageWidth}
              imageRight={project.imageRight}
              imageBottom={project.imageBottom}
              image={project.image}
              imageW={project.imageW}
              imageH={project.imageH}
              title={project.title}
              type={project.type}
              projectURL={project.projectURL}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <SliderControl
          instance={instanceRef}
          count={sliderCount}
          currentSlide={currentSlide}
          projects={projects}
        />
      )}
    </div>
  );
};

export { PortfolioScreen };
