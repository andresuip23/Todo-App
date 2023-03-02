import React from "react";
import '../styles/loader.css';
export default function Loader() {
  return (
    <div className="container">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};
