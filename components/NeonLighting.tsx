import clsx from "clsx";
import React, { useEffect, useState } from "react";

import styles from "./neonLighting.module.css";

type NeonLightingProps = {
  children: string;
  tag: keyof JSX.IntrinsicElements;
};

const NeonLighting = ({
  children,
  tag: Tag,
}: NeonLightingProps): JSX.Element => {
  const [flicker, setFlicker] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlicker(false);
      setActive(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Tag
      className={clsx(
        styles.typography,
        active && styles.animate,
        flicker && styles.flicker
      )}
      onClick={() => !flicker && setActive(!active)}
    >
      {children}
    </Tag>
  );
};

export default NeonLighting;
