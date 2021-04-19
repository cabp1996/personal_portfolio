import React from "react";

export const About = () => {
  const state = {
    about_me: [
      {
        id: "first-p-about",
        content:
          "I am a Software Developer with almost 2 years of experience developing apps, specially web and mobile " +
          "Apps. I work with cutting-edge technologies to develop Web and Mobile Applications. I’m " +
          "interested in areas of Software Architecture and Software UX."
      },

      {
        id: "second-p-about",
        content:
          "Besides the work, my favorite hobbie is playing the guitar because I like music so much, I like to learn new songs and practice to improve my skills. I also like soccer, it's my favorite sport."
      },

    ],

    technical_skills: [
      {
        id: "Web development",
        content:
          "Angular 7+, Flutter Web, React, Nest JS, Spring Boot, Express"
      },

      {
        id: "Mobile development",
        content:
          "Flutter 2, Xamarin"
      },

      {
        id: "Data Bases",
        content:
          "SQL Server, MySQL, SQLite, MariaDB"
      },

      {
        id: "Version Control",
        content:
          "GIT, TFS"
      },

      {
        id: "Cloud Services",
        content:
          "Azure: Bot Framework - LUIS - Face, Firebase"
      },


    ]
  }

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    {state.about_me.map(content => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">Technical Skills</h5>
                    </div>
                    {state.technical_skills.map(content => {
                      return (

                        <p className="lead" key={content.id}>
                          <strong className="text-secondary">
                            {content.id}
                          </strong> <br />
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

