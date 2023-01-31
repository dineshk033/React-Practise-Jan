import Card from "../shared/component/card/card-template1";

const DATA = [{ name: "redmi" }, { name: "Oppo" }, { name: "iphone" }];

const Homepage = () => {
  return (
    <div>
      <h4>Its homepages</h4>
      <Card record={DATA[0]} />
    </div>
  );
};

export default Homepage;
