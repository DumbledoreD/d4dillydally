import React, { useState } from "react";
import clsx from "clsx";

import styles from "./neonLighting.module.css";

type NeonLightingProps = {
  children: string;
  component: keyof JSX.IntrinsicElements;
  className?: string;
};

const NeonLighting = ({
  children,
  component: Component,
  className,
}: NeonLightingProps): JSX.Element => {
  const [on, setOn] = useState(true);

  return (
    <Component
      className={clsx(styles.typography, on && styles.on, className)}
      onClick={() => setOn(!on)}
    >
      {children[0]}
      <span className={clsx(styles.flicker, on && styles.on)}>
        {children[1]}
      </span>
      {children.substring(2)}
    </Component>
  );
};

export default NeonLighting;
