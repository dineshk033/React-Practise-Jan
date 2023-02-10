import styled from "styled-components";

const Image1 =
  "https://images.unsplash.com/photo-1523357585206-175e971f2ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw5MjM2Mjc1N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
const Image2 =
  "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8OTIzNjI3NTd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
const Image3 =
  "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw5MjM2Mjc1N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";

const Image = styled.img`
  height: 50vh;
  width: 100%;
`;
function Banner() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={Image1} className="d-block" alt="..." />
        </div>
        <div className="carousel-item">
          <Image src={Image2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <Image src={Image3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
