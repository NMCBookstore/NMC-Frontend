import React, { useRef, useEffect, PropsWithChildren, memo } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

interface Props {
  delegate?: string;
  options?: Partial<OptionsType>;
  imageLength: number;
  children: React.ReactNode; // Add children property
}

const Fancybox: React.FC<PropsWithChildren<Props>> = memo((props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [props.delegate, props.options]);

  return (
    <div
      className={`product-detail__item__image ${
        props.imageLength > 1 ? "" : "single-img"
      }`}
      ref={containerRef}
    >
      {props.children}
    </div>
  );
});

export default Fancybox;