import CarouselUI from "../../carousel";
import Icon1 from "../../../assets/noun_delivery.svg";
import Icon2 from "../../../assets/noun_guarantee.svg";
import Icon3 from "../../../assets/noun_airpods.svg";
import Icon4 from "../../../assets/noun_Wallet.svg";
import Data from "../../data/index.tsx";

const Home = () => {
  return (
    <div className="container-box">
      <div>
        <CarouselUI />
      </div>
      <div>
        <ul className="flex mt-[200px] items-center justify-between">
          <li className="flex gap-7">
            <img src={Icon1} alt="icon" />
            <div className="flex flex-col">
              <h2 className="font-bold">Free shipping</h2>
              <p className="text-[#AAAAAA]">Free shipping on all orders</p>
            </div>
          </li>
          <li className="flex gap-7">
            <img src={Icon2} alt="icon" />
            <div className="flex flex-col">
              <h2  className="font-bold">Return Guarantee</h2>
              <p className="text-[#AAAAAA]">30 day money back</p>
            </div>
          </li>
          <li className="flex gap-7">
            <img src={Icon3} alt="icon" />
            <div className="flex flex-col">
              <h2 className="font-bold">Online support 24/7</h2>
              <p className="text-[#AAAAAA]">Technical support 24/7</p>
            </div>
          </li>
          <li className="flex gap-7">
            <img src={Icon4} alt="icon" />
            <div className="flex flex-col">
              <h2 className="font-bold">Secure payment</h2>
              <p className="text-[#AAAAAA]">All payment methods accepted</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        {
          Data.map((item,index)=>(
            <div key={index}>
              <h1>{item.name}</h1>
              <img src={item.img} alt="Error" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
