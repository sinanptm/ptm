import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export type LogoIconProps = {
  isAnimated?: boolean;
  width?: number;
};