import { codedata } from "../../codedata";
import "./coding.css";
import Code from "../code/Code";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h2 className="pl-title">Coding Profile</h2>
      </div>
      <div className="pl-list">
        {codedata.map((item) => (
          <Code key={item.id} link={item.link} detail={item.detail} current={item.current} acc1={item.acc1} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
