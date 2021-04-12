import React, { ReactChild } from "react";

interface IContainerProps {
  children: ReactChild;
}

const Container = ({ children }: IContainerProps) => {
  return <div className="max-w-7xl mx-auto p-1">{children}</div>;
};

export default Container;
