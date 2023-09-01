import { Graph } from "../../assets/index";
import "./income.css";

const Income = () => {
  return (
    <div className="vanlife__income">
      <div className="income__heading">
        <h1>Income</h1>
        <div className="last30days">
          <p>
            Last <span>30 days</span>
          </p>
        </div>
        <h3>$2,260</h3>
      </div>
      <div className="income__chart">
        <img src={Graph} alt="incomegraph" />
      </div>
      <div className="income__traansactions">
        <div className="traansactions-heading">
          <h1>Your transactions (3)</h1>
          <div className="last30days">
            <p>
              Last <span>30 days</span>
            </p>
          </div>
        </div>
        <div className="income-cards">
          <div className="income-card">
            <h1>$720</h1>
            <p>1/12/22</p>
          </div>
          <div className="income-card">
            <h1>$560</h1>
            <p>10/5/23</p>
          </div>
          <div className="income-card">
            <h1>$980</h1>
            <p>10/8/23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
