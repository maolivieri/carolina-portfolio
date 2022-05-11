import { FC } from "react";
import styles from "./styles.module.scss";

interface IProps {
  type: string;
  title: string;
  content: string;
  projectURL?: string;
}

export const ProjectCardContent: FC<IProps> = ({
  content,
  projectURL,
  title,
  type,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <h6 className={styles.typeText}>{type}</h6>
        <h6 className={styles.titleText}>{title}</h6>
        <p className={styles.contentText}>{content}</p>
      </div>
      {projectURL && <div className={styles.button}>See project</div>}
    </div>
  );
};
