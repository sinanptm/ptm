import { ReactNode } from "react";
import { BannerImageType } from ".";

export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export type LogoIconProps = {
  isAnimated?: boolean;
  width?: string;
  className?: string;
};

export interface ImagesSliderProps {
  images: BannerImageType[];
  children: ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down" | "left" | "right";
}
