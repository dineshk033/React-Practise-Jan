import CardTemplate2 from "../../shared/component/card/card-template2";
import Banner from "./banner";

const Features = [
  { icon: "verified", title: "Best Quality", subTitle: "Bes Quality is must" },
  { icon: "home", title: "Best Delivery", subTitle: "Bes Quality is must" },
];

const HomeContainer = () => {
  return (
    <div>
      <div>
        <Banner />
        <div className="row p-2">
          {Features.map((record) => (
            <div className="col" key={record.title}>
              <CardTemplate2 {...record} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
