import CarouselUI from "../../carousel";
import Icon1 from "../../../assets/noun_delivery.svg";
import Icon2 from "../../../assets/noun_guarantee.svg";
import Icon3 from "../../../assets/noun_airpods.svg";
import Icon4 from "../../../assets/noun_Wallet.svg";
import Spalne from "../../../assets/spalne1.png";
import Data from "../../data/index.tsx";

const Home = () => {
  return (
    <div className="container-box">
      <div>
        <CarouselUI />
      </div>
      <div>
        <ul className="grid grid-cols-4 mt-[50px] px-[50px] gap-[50px] max-md:grid-cols-2 max-md:gap-x-[150px] max-[376px]:grid-cols-1">
          <li className="flex gap-7 max-lg:flex-col max-lg:items-center">
            <img className="max-w-[60px] wfull" src={Icon1} alt="icon" />
            <div className="flex flex-col w-[161px]">
              <h2 className="font-bold">Yetkazib berish bepul</h2>
              <p className="text-[#AAAAAA]">
                Barcha buyurtmalar uchun bepul yetkazib berish
              </p>
            </div>
          </li>
          <li className="flex gap-6 max-lg:flex-col max-lg:items-center max-sm:mt-[-13px]">
            <img className="max-w-[50px] wfull" src={Icon2} alt="icon" />
            <div className="flex flex-col w-[161px]">
              <h2 className="font-bold">Qaytish kafolati</h2>
              <p className="text-[#AAAAAA]">30 kunlik pulni qaytarish</p>
            </div>
          </li>
          <li className="flex gap-7 max-lg:flex-col max-lg:items-center">
            <img className="max-w-[50px] wfull" src={Icon3} alt="icon" />
            <div className="flex flex-col w-[161px]">
              <h2 className="font-bold">24/7 onlayn qo'llab-quvvatlash</h2>
              <p className="text-[#AAAAAA]">24/7 texnik yordam</p>
            </div>
          </li>
          <li className="flex gap-7 max-lg:flex-col max-lg:items-center">
            <img className="max-w-[50px] wfull" src={Icon4} alt="icon" />
            <div className="flex flex-col w-[161px]">
              <h2 className="font-bold">Xavfsiz to'lov</h2>
              <p className="text-[#AAAAAA]">
                Barcha to'lov usullari qabul qilinadi
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#616884] max-w-full w-full rounded-3xl h-[400px] flex items-center justify-around mt-[50px]">
        <div className="flex items-center flex-col">
          <h2 className="text-[100px] font-black text-white">100%</h2>
          <p className="text-white text-[30px]">material sifati</p>
        </div>
        <div>
          <img className="w-[920px]" src={Spalne} alt="spalne" />
        </div>
        <div>
          <h2 className="text-[40px]">"Buxoro Tabiiy Mahsuloti"</h2>
          <p className="text-[17px]">
            ko'p yillar davomida butun dunyoda foydalanish uchun paxta
            matolarini ishlab chiqaradigan kompaniya bo'lib kelgan
          </p>
        </div>
      </div>
      <div>
        {Data.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <img src={item.img} alt="Error" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
