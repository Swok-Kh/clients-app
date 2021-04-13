import React, { FunctionComponent } from "react";
import AddClient from "../add-client/AddClient";

const Header: FunctionComponent = () => {
  return (
    <header className="fixed w-screen h-20 bg-indigo-500">
      <div className="flex items-center h-full max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-white">Our Clients</h1>
        <AddClient />
      </div>
    </header>
  );
};

export default Header;
