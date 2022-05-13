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
      <div
        className={styles.controlWheel}
        style={{
          transform: `rotate(${-113 + 45 * (currentSlide + 1)}deg)`,
          //   transform: "rotate(45deg) skew(45deg)";
        }}
      >
        <li
          className={`${styles.one} ${
            currentSlide === 0 ? styles.activeItem : ""
          }`}
        >
          <p
            onClick={() => {
              instance.current?.moveToIdx(0);
            }}
          >
            ABC0
          </p>
        </li>
        <li
          className={`${styles.two} ${
            currentSlide === 7 ? styles.activeItem : ""
          }`}
        >
          <p
            onClick={() => {
              instance.current?.moveToIdx(7);
            }}
          >
            ABC7
          </p>
        </li>
        <li
          className={`${styles.three} ${
            currentSlide === 6 ? styles.activeItem : ""
          }`}
        >
          <p
            onClick={() => {
              instance.current?.moveToIdx(6);
            }}
          >
            ABC6
          </p>
        </li>
        <li
          className={`${styles.four} ${
            currentSlide === 5 ? styles.activeItem : ""
          }`}
        >
          <p
            onClick={() => {
              instance.current?.moveToIdx(5);
            }}
          >
            ABC5
          </p>
        </li>
        <li
          className={`${styles.five} ${
            currentSlide === 4 ? styles.activeItem : ""
          }`}
        >
          <p
            onClick={() => {
              instance.current?.moveToIdx(4);
            }}
          >
            ABC4
          </p>
        </li>
        <li
          className={`${styles.six} ${
            currentSlide === 3 ? styles.activeItem : ""
          }`}
        >
          <p
            onClick={() => {
              instance.current?.moveToIdx(3);
            }}
          >
            ABC3
          </p>
        </li>
        <li
          className={`${styles.seven} ${
            currentSlide === 2 ? styles.activeItem : ""
          }`}
        >
          <p
            onClick={() => {
              instance.current?.moveToIdx(2);
            }}
          >
            ABC2
          </p>
        </li>
        <li
          className={`${styles.eight} ${
            currentSlide === 1 ? styles.activeItem : ""
          }`}
        >
          <p
            onClick={() => {
              instance.current?.moveToIdx(1);
            }}
          >
            ABC1
          </p>
        </li>
      </div>
    </div>
  );
};

export { SliderControl };
