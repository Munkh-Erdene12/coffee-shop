import React from "react";
type ShadowProps = {
  click?: () => void;
};
export default function Shadow(props: ShadowProps) {
  return (
    <div
      className="shadow absolute top-0 left-0 w-full h-full bg-modalShadow z-[59] "
      onClick={props.click}
    ></div>
  );
}
