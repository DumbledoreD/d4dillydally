import React, { useEffect, useState } from "react";
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
  const [flicker, setFlicker] = useState<boolean>(true);
  const [pulsate, setPulsate] = useState<boolean>(false);

  // Initial flicker
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlicker(false);
      setPulsate(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Component
      className={clsx(
        styles.typography,
        pulsate && styles.pulsate,
        flicker && styles.flicker,
        className
      )}
      onClick={() => !flicker && setPulsate(!pulsate)}
    >
      {children}
    </Component>
  );
};

export default NeonLighting;
