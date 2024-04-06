import CarouselImg1 from "../../assets/carouselImg.jpg";
import CarouselImg2 from "../../assets/carouselImg2.jpg";
import CarouselImg3 from "../../assets/carouselImg3.jpg";
import { Carousel } from "flowbite-react";
const CarouselUI = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="md:h-[500px]">
        <img src={CarouselImg1} alt="..." />
        <img src={CarouselImg2} alt="..." />
        <img src={CarouselImg3} alt="..." />
      </Carousel>
    </div>
  );
};

export default CarouselUI;
