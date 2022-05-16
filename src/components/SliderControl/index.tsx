import { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import { MutableRefObject } from "react";
import { IProject } from "../../screens/Portfolio";
import styles from "./styles.module.scss";

interface IProps {
  projects: IProject[];
  count: number;
  currentSlide: number;
  instance: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>;
}

const SliderControl = ({ count, currentSlide, instance, projects }: IProps) => {
  const projectsCopy = JSON.parse(JSON.stringify(projects)) as IProject[];
  const wheelArrayOrder = projectsCopy.reverse();
  wheelArrayOrder.unshift(projectsCopy.pop()!);

  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        {instance.current &&
          projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => {
                instance.current?.moveToIdx(idx);
              }}
              className={`${styles.dot} ${
                currentSlide === idx ? styles.activeDot : ""
              }
              `}
            ></button>
          ))}
      </div>
      <div
        className={styles.controlWheel}
        style={{
          transform: `rotate(${-113 + (360 / count) * (currentSlide + 1)}deg)`,
        }}
      >
        {wheelArrayOrder.map((project, idx) => (
          <li
            key={idx}
            className={`${
              currentSlide === project.id ? styles.activeItem : ""
            }`}
            style={{
              transform: `rotate(${(360 / count) * (idx + 1)}deg) skew(45deg)`,
            }}
          >
            <p
              onClick={() => {
                instance.current?.moveToIdx(project.id);
              }}
            >{`${project.title}`}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export { SliderControl };
