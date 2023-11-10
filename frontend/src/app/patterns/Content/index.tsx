import React, { ReactNode } from "react";
import { ContentStyles } from "./Content.style";

interface IContent {
  children: ReactNode;
}

const Content = ({ children }: IContent) => {
  return <main className={ContentStyles.container}>{children}</main>;
};

export default Content;
