import React, { useEffect, useState } from "react";
import CatGif from "../../components/CatGif";
import "./admin.css";

export default function AdminHome() {
  return (
    <div id="admin-home">
      <h1 className="my-5">WELCOME [USER]!</h1>
      <CatGif />
      <p className="greytext">Powered by GIPHY</p>
    </div>
  );
}
