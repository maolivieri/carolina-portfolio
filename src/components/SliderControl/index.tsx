import { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import { MutableRefObject } from "react";
import styles from "./styles.module.scss";

interface IProps {
  count: number;
  currentSlide: number;
  instance: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>;
}

const SliderControl = ({ count, currentSlide, instance }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        {instance.current &&
          Array(count)
            .fill("a")
            .map((v, idx) => (
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
      <div className={styles.controlWheel}>
        <li
          className={`${styles.one} ${
            currentSlide === 0 ? styles.activeItem : ""
          }`}
        >
          <p>ABC1</p>
        </li>
        <li
          className={`${styles.two} ${
            currentSlide === 1 ? styles.activeItem : ""
          }`}
        >
          <p>ABC1</p>
        </li>
        <li
          className={`${styles.three} ${
            currentSlide === 2 ? styles.activeItem : ""
          }`}
        >
          <p>ABC1</p>
        </li>
        <li
          className={`${styles.four} ${
            currentSlide === 3 ? styles.activeItem : ""
          }`}
        >
          <p>ABC1</p>
        </li>
        <li
          className={`${styles.five} ${
            currentSlide === 4 ? styles.activeItem : ""
          }`}
        >
          <p>ABC1</p>
        </li>
        <li
          className={`${styles.six} ${
            currentSlide === 5 ? styles.activeItem : ""
          }`}
        >
          <p>ABC1</p>
        </li>
        <li
          className={`${styles.seven} ${
            currentSlide === 6 ? styles.activeItem : ""
          }`}
        >
          <p>ABC1</p>
        </li>
        <li
          className={`${styles.eight} ${
            currentSlide === 7 ? styles.activeItem : ""
          }`}
        >
          <p>ABC1</p>
        </li>
      </div>
    </div>
  );
};

export { SliderControl };
