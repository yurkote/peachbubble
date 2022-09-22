import React from "react";
import Card from "../Card/Card";
import "./content.scss";

const Content = () => {
  return (
    <>
      <main className="content content__container">
        <div className="content__top">
          <div className="content__title title">
            <h1 className="title__content">Programming T-Shirts</h1>
            <p className="title__results">30 Results</p>
          </div>
          <div className="content__sort"><a href="#">Most Relevant ^</a></div>
        </div>
        <div className="content__main">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="content__button">There will be buttons</div>
      </main>
    </>
  );
};

export default Content;
