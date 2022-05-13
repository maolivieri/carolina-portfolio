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
      <ul className={styles.controlWheel}>
        <li
          style={{
            top: `${50}%`,
            left: `${-6}%`,
            // transform: `matrix(1, ${0.33}, ${-0.33}, 1, 0, 0)`,
            transform: `rotate(${(360 / 8) * 6}deg) skew(${360}deg)`,
            // transform: `rotate(270deg) skewY(90deg)`,
          }}
        >
          Gullie App
        </li>
        <li
          style={{
            top: `${15}%`,
            left: `${3}%`,
            // transform: `matrix(1, ${0.33}, ${-0.33}, 1, 0, 0)`,
            transform: `rotate(${(360 / 8) * 7}deg) skew(${360}deg)`,
            // transform: `rotate(270deg) skewY(90deg)`,
          }}
        >
          Gullie Manager
        </li>
        <li
          style={{
            top: `${2}%`,
            left: `${35}%`,
            // transform: `matrix(1, ${0.33}, ${-0.33}, 1, 0, 0)`,
            transform: `rotate(${(360 / 8) * 8}deg) skew(${360}deg)`,
            // transform: `rotate(270deg) skewY(90deg)`,
          }}
        >
          Miguel Veículos
        </li>
        <li
          style={{
            top: `${21}%`,
            left: `${75}%`,
            // transform: `matrix(1, ${0.33}, ${-0.33}, 1, 0, 0)`,
            transform: `rotate(${52}deg) skew(${360}deg)`,
            // transform: `rotate(270deg) skewY(90deg)`,
          }}
        >
          NFT Project
        </li>
        <li
          style={{
            top: `${50}%`,
            left: `${90}%`,
            // transform: `matrix(1, ${0.33}, ${-0.33}, 1, 0, 0)`,
            transform: `rotate(${(360 / 8) * 2}deg) skew(${360}deg)`,
            // transform: `rotate(270deg) skewY(90deg)`,
          }}
        >
          Gullies
        </li>
        <li
          style={{
            top: `${79}%`,
            left: `${79}%`,
            // transform: `matrix(1, ${0.33}, ${-0.33}, 1, 0, 0)`,
            transform: `rotate(${(360 / 8) * 3}deg) skew(${360}deg)`,
            // transform: `rotate(270deg) skewY(90deg)`,
          }}
        >
          KDS
        </li>
        <li
          style={{
            top: `${94}%`,
            left: `${50}%`,
            // transform: `matrix(1, ${0.33}, ${-0.33}, 1, 0, 0)`,
            transform: `rotate(${(360 / 8) * 4}deg) skew(${360}deg)`,
            // transform: `rotate(270deg) skewY(90deg)`,
          }}
        >
          Online O
        </li>
        <li
          style={{
            top: `${81}%`,
            left: `${14}%`,
            // transform: `matrix(1, ${0.33}, ${-0.33}, 1, 0, 0)`,
            transform: `rotate(${(360 / 8) * 5}deg) skew(${360}deg)`,
            // transform: `rotate(270deg) skewY(90deg)`,
          }}
        >
          I P M
        </li>
      </ul>
    </div>
  );
};

export { SliderControl };
