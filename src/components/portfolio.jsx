import React from "react";
import { PortfolioItem } from "./portfolioItem";

const ccit_web_1 = process.env.PUBLIC_URL + "/assets/img/ccit_web/login.png";
const ccit_web_2 = process.env.PUBLIC_URL + "/assets/img/ccit_web/ccit_web_2.png";
const ccit_web_3 = process.env.PUBLIC_URL + "/assets/img/ccit_web/ccit_web_3.png";
const ccit_web_4 = process.env.PUBLIC_URL + "/assets/img/ccit_web/ccit_web_4.jpg";
const ccit_web_5 = process.env.PUBLIC_URL + "/assets/img/ccit_web/ccit_web_5.jpg";
const ccit_web_6 = process.env.PUBLIC_URL + "/assets/img/ccit_web/ccit_web_6.jpg";
const ccit_web_7 = process.env.PUBLIC_URL + "/assets/img/ccit_web/ccit_web_7.jpg";
const ccit_mobile_1 = process.env.PUBLIC_URL + "/assets/img/ccit_mobile/ccit_mobile_1.jpg";
const ccit_mobile_2 = process.env.PUBLIC_URL + "/assets/img/ccit_mobile/ccit_mobile_2.jpg";
const ccit_mobile_3 = process.env.PUBLIC_URL + "/assets/img/ccit_mobile/ccit_mobile_3.jpg";
const ccit_mobile_4 = process.env.PUBLIC_URL + "/assets/img/ccit_mobile/ccit_mobile_4.jpg";
const ccit_mobile_5 = process.env.PUBLIC_URL + "/assets/img/ccit_mobile/ccit_mobile_5.jpg";
const ccit_mobile_6 = process.env.PUBLIC_URL + "/assets/img/ccit_mobile/ccit_mobile_6.jpg";
const ccit_mobile_7 = process.env.PUBLIC_URL + "/assets/img/ccit_mobile/ccit_mobile_7.jpg";
const sma_1 = process.env.PUBLIC_URL + "/assets/img/sma/sma_1.jpg";
const sma_2 = process.env.PUBLIC_URL + "/assets/img/sma/sma_2.jpg";
const sma_3 = process.env.PUBLIC_URL + "/assets/img/sma/sma_3.jpg";
const sma_4 = process.env.PUBLIC_URL + "/assets/img/sma/sma_4.jpg";
const sma_5 = process.env.PUBLIC_URL + "/assets/img/sma/sma_5.jpg";
const sma_6 = process.env.PUBLIC_URL + "/assets/img/sma/sma_6.jpg";
const sma_7 = process.env.PUBLIC_URL + "/assets/img/sma/sma_7.jpg";
const sma_8 = process.env.PUBLIC_URL + "/assets/img/sma/sma_8.jpg";
const chat_1 = process.env.PUBLIC_URL + "/assets/img/chat/chat_1.jpg";
const chat_2 = process.env.PUBLIC_URL + "/assets/img/chat/chat_2.jpg";
const bot_1 = process.env.PUBLIC_URL + "/assets/img/bot/bot_1.jpeg";
const bot_2 = process.env.PUBLIC_URL + "/assets/img/bot/bot_2.jpeg";
const bot_3 = process.env.PUBLIC_URL + "/assets/img/bot/bot_3.jpeg";
const bot_4 = process.env.PUBLIC_URL + "/assets/img/bot/bot_4.jpeg";
const bot_5 = process.env.PUBLIC_URL + "/assets/img/bot/bot_5.jpeg";
const res_1 = process.env.PUBLIC_URL + "/assets/img/rest/res_1.jpg";
const res_2 = process.env.PUBLIC_URL + "/assets/img/rest/res_2.jpg";
const res_3 = process.env.PUBLIC_URL + "/assets/img/rest/res_3.jpg";
const res_4 = process.env.PUBLIC_URL + "/assets/img/rest/res_4.jpg";
const res_5 = process.env.PUBLIC_URL + "/assets/img/rest/res_5.jpg";
const res_6 = process.env.PUBLIC_URL + "/assets/img/rest/res_6.jpg";
const scrum_1 = process.env.PUBLIC_URL + "/assets/img/scrum/scrum_1.jpg";
const scrum_2 = process.env.PUBLIC_URL + "/assets/img/scrum/scrum_2.jpg";
const scrum_3 = process.env.PUBLIC_URL + "/assets/img/scrum/scrum_3.jpg";
const scrum_4 = process.env.PUBLIC_URL + "/assets/img/scrum/scrum_4.jpg";
const scrum_5 = process.env.PUBLIC_URL + "/assets/img/scrum/scrum_5.jpg";
const scrum_6 = process.env.PUBLIC_URL + "/assets/img/scrum/scrum_6.jpg";
const scrum_7 = process.env.PUBLIC_URL + "/assets/img/scrum/scrum_7.jpg";

export const Portfolio = () => {

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">

        {/* TITULO PORTAFOLIO */}
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Here there are projects that I´ve developed in my career with the technologies I worked with to develop them.
                </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        {/* TRABAJOS */}
        <div className="row">

          {/* Sistema TESIS */}
          <div className="col-md-4">

            <PortfolioItem
              title={"Educational Robotics Learning Monitoring System."}
              description={"Web system to monitor learning of students participating in educational robotics workshops."}
              frontend={"Angular 7+ for Frontend"}
              backend={"NestJS for Backend"}
              images={[
                sma_2,
                sma_3,
                sma_4,
                sma_5,
                sma_6,
                sma_7,
                sma_8
              ]}
              cover={sma_1}
              gallery={"gallery-sma"}
            />
          </div>

          {/* BOT */}
          <div className="col-md-4">

            <PortfolioItem
              title={"Mobile Transactions Bot"}
              description={"Application bot for transactions query."}
              frontend={"Xamarin for Frontend"}
              backend={"Azure LUIS, Cognitive Services, Direct Line, Speech"}
              images={[
                bot_2,
                bot_3,
                bot_4,
                bot_5,
              ]}
              cover={bot_1}
              gallery={"gallery-bot"}
            />
          </div>


          {/* SCRUM */}
          <div className="col-md-4">

            <PortfolioItem
              title={"Scrum Guide"}
              description={"Project to describe de Scrum Guide of Ken Schwaber y Jeff Sutherland."}
              frontend={"React JS"}
              images={[
                scrum_2,
                scrum_3,
                scrum_4,
                scrum_5,
                scrum_6,
                scrum_7
              ]}
              cover={scrum_1}
              gallery={"gallery-scrum"}
            />
          </div>
          
          {/* res */}
          <div className="col-md-4">

            <PortfolioItem
              title={"Custom Restaurant App"}
              description={"Application to show restaurant's information like dishes and promotions."}
              frontend={"React JS for Frontend"}
              backend={"Reacstrap"}
              images={[
                res_2,
                res_3,
                res_4,
                res_5,
                res_6,
              ]}
              cover={res_1}
              gallery={"gallery-res"}
            />
          </div>




          {/* CCIT WEB */}
          <div className="col-md-4">
            <PortfolioItem
              title={"Components Inventory Tool - Web"}
              description={"Application for assets management: Components, Third-Party Softwares, Platforms, Users and Client's Architectures."}
              frontend={"Flutter 1 Web for Frontend"}
              backend={"SpringBoot for Backend"}
              images={[
                ccit_web_2,
                ccit_web_3,
                ccit_web_4,
                ccit_web_5,
                ccit_web_6,
                ccit_web_7
              ]}
              cover={ccit_web_1}
              gallery={"gallery-ccit-web"}
            />
          </div>


          {/* CCIT MOBIL */}
          <div className="col-md-4">
            <PortfolioItem
              title={"Components Inventory Tool - Mobile"}
              description={"Mobile application with same funcionality like last one described, but for iOS and Android Platforms."}
              frontend={"Flutter 2 Mobile for Frontend"}
              backend={"SpringBoot for Backend"}
              images={[
                ccit_mobile_2,
                ccit_mobile_3,
                ccit_mobile_4,
                ccit_mobile_5,
                ccit_mobile_6,
                ccit_mobile_7
              ]}
              cover={ccit_mobile_1}
              gallery={"gallery-ccit-mobile"}
            />

          </div>

        </div>
      </div>
    </section>
  );
}


