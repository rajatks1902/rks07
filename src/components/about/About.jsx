import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          Hello There, My name is Rajat Kumar Singh
        </p> */}
        <p className="a-desc">
          I make creative, eye-catching and diverse websites. 
          <br/>
          I am also a reliable code writer with fluence over Data Structures, Algorithms
           and problem solving! 
           <br />
           <br />
           Head over to my Contact window and let's ride this journey together while we get stuff done!
        </p>
        
        <div className="a-award">
          <div>
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h3 className="a-award-title">
              <br />
              <a className="anchor" href="https://www.hackerrank.com/certificates/0f060d99cf08" target="blank" >Problem Solving
                </a>
              </h3>
            <p className="a-award-desc">
            It covers  topics of Data Structures and Algorithms
            </p>
            </div>
          </div>
          <div>
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
         
            <h3 className="a-award-title">
               <br />
              <a className="anchor" href="https://www.hackerrank.com/certificates/4a2edcc2a804" target="blank" >SQL
                </a></h3>
            <p className="a-award-desc">
            It includes SQL's simple queries, relationships, and aggregators.
            </p>
            </div>
          </div>
          <div>
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h3 className="a-award-title">
            <br />
              <a className="anchor" href="https://www.hackerrank.com/certificates/4a2edcc2a804" target="blank" >Web-Devlopment
                </a></h3>
            <p className="a-award-desc">
              Coverse Learning of Front End and Backend End Technology
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
