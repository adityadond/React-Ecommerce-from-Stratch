

import "./Shimmer.css"

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(1)
        .fill("")
        .map((element, index) => {
          return <div className="shimmer-card" key={index}></div>;
        })}
    </div>
  );
};
export default Shimmer;
