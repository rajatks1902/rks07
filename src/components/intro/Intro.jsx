import "./intro.css";
import Me from "../../img/personal.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h4 className="i-intro">Hello, My name is</h4>
          <h3 className="i-name">Rajat Singh</h3>
      
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Competetive Programmer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Engineering Student</div>
              <div className="i-title-item">Problem Solver</div>
              <div className="i-title-item">Learner</div>
            </div>
          </div>
          <p className="i-desc">
          I am the guy you go to when you need to make a full fledged website or you need to get some problem solved! 
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className="alignit">
        <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
