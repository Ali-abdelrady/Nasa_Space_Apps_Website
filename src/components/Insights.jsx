import { useEffect, useState } from "react";
import styles from "./Insights.module.css";
const countersData = [
  { target: 2800, title: "Beer Ordered" },
  { target: 1500, title: "Coffee Served" },
  { target: 3200, title: "Happy Customers" },
  { target: 4000, title: "Five Star Reviews" },
];

export default function Insights() {
  return (
    <section
      className="wow fadeIn animated"
      style={{ visibility: "visible", animationName: "fadeIn" }}
    >
      <div className="container pt-120">
        <div className="row">
          {countersData.map((data, index) => (
            <CounterCard data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
function CounterCard({ data }) {
  const [counter, setCounter] = useState(0);
  useEffect(
    function () {
      let start = 0;
      const end = data.target;
      const duration = 3000;
      const increment = (end - start) / (duration / 10);
      const counterInterval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counterInterval);
          setCounter(end);
        } else {
          setCounter(Math.ceil(start));
        }
      }, 10);
      return () => clearInterval(counterInterval);
    },
    [data.target]
  );
  return (
    <div
      className={`col-md-3 col-sm-6 bottom-margin text-center wow fadeInUp sm-margin-bottom-ten animated ${styles["counter-section"]}`}
    >
      <i className={`fa fa-beer ${styles["medium-icon"]}`}></i>
      <span className={`timer counter alt-font appear ${styles.counter}`}>
        {counter}
      </span>
      <p>Beer Ordered</p>
    </div>
  );
}
