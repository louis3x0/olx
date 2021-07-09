import React from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Info from "../../components/Info/Info";
import Posts from "../../components/Posts/Posts";
import Search from "../../components/Search/Search";
import SubCats from "../../components/SubCats/SubCats";

const Home = () => {
  return (
    <>
      <Search />
      <Categories />
      <Posts />
      <Banner />
      <Info />
      <SubCats />
    </>
  );
};

export default Home;
