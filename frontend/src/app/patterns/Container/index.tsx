import React from "react";
import { ContainerStyle } from "./Container.style";

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <div className={ContainerStyle.container}>{children}</div>;
};

export default Container;
