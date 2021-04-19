import React from "react";




class Portfolio extends React.Component {

  render() {

    const ccit_web_1 = "../../assets/img/ccit_web/login.png";
    const ccit_web_2 = "../../assets/img/ccit_web/ccit_web_2.png";
    const ccit_web_3 = "../../assets/img/ccit_web/ccit_web_3.png";
    const ccit_web_4 = "../../assets/img/ccit_web/ccit_web_4.jpg";
    const ccit_web_5 = "../../assets/img/ccit_web/ccit_web_5.jpg";
    const ccit_web_6 = "../../assets/img/ccit_web/ccit_web_6.jpg";
    const ccit_web_7 = "../../assets/img/ccit_web/ccit_web_7.jpg";
    const ccit_mobile_1 = "../../assets/img/ccit_mobile/ccit_mobile_1.jpg";
    const ccit_mobile_2 = "../../assets/img/ccit_mobile/ccit_mobile_2.jpg";
    const ccit_mobile_3 = "../../assets/img/ccit_mobile/ccit_mobile_3.jpg";
    const ccit_mobile_4 = "../../assets/img/ccit_mobile/ccit_mobile_4.jpg";
    const ccit_mobile_5 = "../../assets/img/ccit_mobile/ccit_mobile_5.jpg";
    const ccit_mobile_6 = "../../assets/img/ccit_mobile/ccit_mobile_6.jpg";
    const ccit_mobile_7 = "../../assets/img/ccit_mobile/ccit_mobile_7.jpg";
    const sma_1 = "../../assets/img/sma/sma_1.jpg";
    const sma_2 = "../../assets/img/sma/sma_2.jpg";
    const sma_3 = "../../assets/img/sma/sma_3.jpg";
    const sma_4 = "../../assets/img/sma/sma_4.jpg";
    const sma_5 = "../../assets/img/sma/sma_5.jpg";
    const sma_6 = "../../assets/img/sma/sma_6.jpg";
    const sma_7 = "../../assets/img/sma/sma_7.jpg";
    const sma_8 = "../../assets/img/sma/sma_8.jpg";




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

            {/* CCIT WEB */}
            <div className="col-md-4">

              <div className="work-box">
                <a href={ccit_web_1} data-lightbox="gallery-ccit-web">
                  <div className="work-img">
                    <img src={ccit_web_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Components Inventory Tool - Web</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Application for assets management: Components, Third-Party Softwares, Platforms, Users and Client's Architectures.
                            </span>
                        </div>
                        <span className="text-secondary" style={{fontSize:12}}>
                          Developed with: 
                          <br/>
                          - Flutter 1 Web for Frontend <br/>
                          - SpringBoot for Backend
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={ccit_web_2}
                  data-lightbox="gallery-ccit-web"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_web_3}
                  data-lightbox="gallery-ccit-web"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_web_4}
                  data-lightbox="gallery-ccit-web"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_web_5}
                  data-lightbox="gallery-ccit-web"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_web_6}
                  data-lightbox="gallery-ccit-web"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_web_7}
                  data-lightbox="gallery-ccit-web"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>


            {/* CCIT MOBIL */}
            <div className="col-md-4">

              <div className="work-box">
                <a href={ccit_mobile_1} data-lightbox="gallery-ccit-mobile">
                  <div className="work-img">
                    <img src={ccit_mobile_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Components Inventory Tool - Mobile</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Mobile application with same funcionality like last one described, but for iOS and Android Platforms.                        </span>
                        </div>
                        <span className="text-secondary" style={{fontSize:12}}>
                          Developed with: 
                          <br/>
                          - Flutter 2 Mobile for Frontend <br/>
                          - SpringBoot for Backend
                        </span>
                      
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={ccit_mobile_2}
                  data-lightbox="gallery-ccit-mobile"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_mobile_3}
                  data-lightbox="gallery-ccit-mobile"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_mobile_4}
                  data-lightbox="gallery-ccit-mobile"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_mobile_5}
                  data-lightbox="gallery-ccit-mobile"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_mobile_6}
                  data-lightbox="gallery-ccit-mobile"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ccit_mobile_7}
                  data-lightbox="gallery-ccit-mobile"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            {/* Sistema TESIS */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={sma_1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={sma_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Educational Robotics Learning Monitoring System.</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Web system to monitor learning of students participating in educational robotics workshops.
                          </span>{" "}
                        </div>
                        <span className="text-secondary" style={{fontSize:12}}>
                          Developed with: 
                          <br/>
                          - Angular 7+ for Frontend <br/>
                          - NestJS for Backend
                        </span>
                    
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={sma_2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sma_3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sma_4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sma_5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sma_6}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sma_7}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sma_8}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>


            {/* <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap ReactJS GoogleAPI
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                 <a
                  href={stock1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> 
              </div>
            </div> */}
            {/* <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">MERN</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                 <a
                  href={stock1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> 
              </div>
            </div> */}
            {/* <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
               <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> 
              </div>
            </div>
        
         */}

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
