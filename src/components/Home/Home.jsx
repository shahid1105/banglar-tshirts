import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div>
      <h1>this is home</h1>
      <h2>Total shirts: {tshirts.length}</h2>
    </div>
  );
};

export default Home;
