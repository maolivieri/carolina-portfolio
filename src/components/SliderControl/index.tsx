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
    </div>
  );
};

export { SliderControl };
