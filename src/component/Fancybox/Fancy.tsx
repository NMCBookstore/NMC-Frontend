import React, { useRef, useEffect, PropsWithChildren } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

interface Props {
  delegate?: string;
  options?: Partial<OptionsType>;
  imageLength: number;
}

function Fancybox(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      console.log("fancy");
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

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
}

export default Fancybox;
