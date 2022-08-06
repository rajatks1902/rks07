import "./code.css";

const Code = ({link,detail,current,acc1}) => {
  return (
    <div className="p1">
      <a href={link} target="_blank" rel="noreferrer">
         <div className="heading"><h3>{detail}</h3></div>
         </a>
         <div className="acc">{current}</div>
         <div className="acc">{acc1}</div>
    </div>
  );
};

export default Code;
