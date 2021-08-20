import React, { useState } from "react";

import styles from "./neonLighting.module.css";

type NeonLightingProps = {
  children: string;
  tag: keyof JSX.IntrinsicElements;
};

const NeonLighting = ({
  children,
  tag: Tag,
}: NeonLightingProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <Tag
      className={`${styles.typography} ${active ? styles.animate : ""}`}
      onClick={() => setActive(!active)}
    >
      {children}
    </Tag>
  );
};

export default NeonLighting;
