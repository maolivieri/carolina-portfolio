import { FC } from "react";
import styles from "./styles.module.scss";

import Image from "next/image";

import { ProjectCardContent } from "../ProjectCardContent";

interface IProps {
  type: string;
  title: string;
  content: string;
  projectURL?: string;
  image: string;
  imageW: number;
  imageH: number;
  contentWidth: string;
  imageWidth: string;
  imageRight: string;
  imageBottom: string;
}

export const ProjectCard: FC<IProps> = ({
  content,
  title,
  type,
  projectURL,
  image,
  imageH,
  imageW,
  contentWidth,
  imageWidth,
  imageRight,
  imageBottom,
}) => {
  return (
    <div className={styles.container}>
      <div
        style={{
          maxWidth: contentWidth,
        }}
        className={styles.cardContent}
      >
        <ProjectCardContent
          content={content}
          title={title}
          type={type}
          projectURL={projectURL}
        />
      </div>
      <div
        className={styles.cardImage}
        style={{
          maxWidth: imageWidth,
          right: imageRight,
          bottom: imageBottom,
        }}
      >
        <Image
          alt="project cover image"
          src={image}
          layout="intrinsic"
          width={imageW}
          height={imageH}
        />
      </div>
    </div>
  );
};
