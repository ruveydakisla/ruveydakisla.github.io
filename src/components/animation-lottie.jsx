"use client";

import Lottie from "lottie-react";
export const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };
  return <Lottie {...defaultOptions} />;
};
