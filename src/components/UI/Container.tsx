import React, { FunctionComponent, ReactChild } from "react";

interface IContainerProps {
  children: ReactChild;
}

const Container: FunctionComponent<IContainerProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto p-1">{children}</div>;
};

export default Container;
