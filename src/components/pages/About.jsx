import React from "react";
import "../pages/pagecss/Aboutss.css";
function About() {
  return (
    <>
      <h1>Seyfullalı Zülfüqar</h1>
      <div className="container">
        <div className="wrapper">
          <div className="profil_imgg"></div>
          <div className="profil_text">
            <p>
              Lorem ipsum dolor sit. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Reiciendis facere impedit laboriosam magnam
              voluptate ad quibusdam ullam ducimus nemo, iusto aut ipsa
              repellendus natus nesciunt assumenda ut cumque non perspiciatis
              ratione explicabo, at dolores eveniet consectetur. Velit qui
              tempora illum exercitationem unde excepturi molestias fuga amet
              similique veritatis rerum vitae officiis voluptatibus aliquid ut,
              commodi ab voluptas doloribus eum id sapiente aspernatur? Pariatur
              molestiae veritatis dicta laudantium harum, explicabo sit ex
              dolorem, amet, maxime nesciunt.
            </p>
            <div className="softskill">
            <h2>My Soft skills</h2>
            <h3>Language</h3>
            <p>Azerbaijan</p>
            <div className="softs">
              <div className="softAz"> 95%</div>
            </div>
            <p>Turkish</p>
            <div className="softs">
              <div className="softTr"> 85%</div>
            </div>
            <p>English</p>
            <div className="softs">
              <div className="softEn"> 65%</div>
            </div>
            <p>German</p>
            <div className="softs">
              <div className="softGr"> 15%</div>
            </div>
          </div>
          </div>

        </div>
        
      </div>

      <div className="skill">
        <h1>My Dev Skills</h1>
        <p>HTML</p>
        <div class="container">
          <div class="skills html">90%</div>
        </div>

        <p>CSS</p>
        <div class="container">
          <div class="skills css">80%</div>
        </div>

        <p>JavaScript</p>
        <div class="container">
          <div class="skills js">55%</div>
        </div>

        <p>React</p>
        <div class="container">
          <div class="skills react">40%</div>
        </div>
        <p>Redux</p>
        <div className="container">
          <div className="skills redux"> 35%</div>
        </div>
      </div>
    </>
  );
}
export default About;
