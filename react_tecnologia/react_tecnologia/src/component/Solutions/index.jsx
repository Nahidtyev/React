import React from "react";
import Card from "./card";
import Head from "../Head";
import "./solution.scss";

const CardData = [
  {
    HeadText: "Managed Services",
    text: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
  },
  {
    HeadText: "IT Consulting & Advisory",
    text: "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth",
  },
  {
    HeadText: "Cyber Security",
    text: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
  },
  {
    HeadText: "Web development",
    text: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
  },
  {
    HeadText: "Mobile Development",
    text: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
  },
  {
    HeadText: "Cloud Services",
    text: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
  },
];

const Solution = () => {
  return (
    <div className="solution">
      <Head motto="HOW WE DO" heading="Solutions" />
      <div className="all-cards">
        {CardData.length > 0 &&
          CardData.map((data, index) => (
            <Card
              key={`Data_card_${index}`}
              HeadText={data.HeadText || "No HeadText"}
              text={data.text || "No text"}
            />
          ))}
      </div>
      <div className="btn">
        <button>View All Aolutions</button>
      </div>
    </div>
  );
};

export default Solution;
