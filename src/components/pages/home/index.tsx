import CarouselUI from "../../carousel";
import Icon1 from "../../../assets/noun_delivery.svg";
import Icon2 from "../../../assets/noun_guarantee.svg";
import Icon3 from "../../../assets/noun_airpods.svg";
import Icon4 from "../../../assets/noun_Wallet.svg";
import Spalne from "../../../assets/spalne1.png";
import Spalne2 from "../../../assets/spalne2.png";
import Spalne3 from "../../../assets/spalne3.png";
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
      <div className="bg-[#616884] max-w-full w-full rounded-3xl h-[400px] max-md:h-full flex items-center max-md:flex-col-reverse mt-[80px] px-[20px]">
        <div className="flex items-center flex-col w-[30%]">
          <h2 className="text-[100px] font-black text-white max-md:text-[50px]">
            100%
          </h2>
          <p className="text-white text-[30px] max-md:text-[20px] w-[150px]">
            material sifati
          </p>
        </div>
        <div className="max-md:order-last">
          <img className="max-md:w-[500px]" src={Spalne} alt="spalne" />
        </div>
        <div className="flex flex-col items-start justify-center w-[30%] max-md:hidden">
          <h2 className="text-[40px] text-white font-bold ">
            "Buxoro Tabiiy Mahsuloti"
          </h2>
          <p className="text-[17px] max-w-[300px] text-white">
            ko'p yillar davomida butun dunyoda foydalanish uchun paxta
            matolarini ishlab chiqaradigan kompaniya bo'lib kelgan
          </p>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-bold text-[45px]">Qish kolleksiyasi</h2>
          <p className="text-[#AAAAAA] text-[18px]">Buxoro tabiiy mahsuloti</p>
        </div>
        <div className="mt-[30px] grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 gap-[50px]">
          {Data.slice(0, 10).map((item, index) => ( 
            <div key={index} className="flex flex-col gap-[20px] hover:text-red-600 font-semibold">
              <img className="rounded-3xl cursor-pointer" src={item.img} alt="Error" />
              <h1 className="text-[17px]">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#625686] max-w-full w-full rounded-3xl h-[400px] max-md:h-full flex items-center max-md:flex-col-reverse mt-[80px] px-[20px]">
        <div className="flex items-center flex-col w-[30%]">
          <h2 className="text-[100px] font-black text-white max-md:text-[50px]">
            100%
          </h2>
          <p className="text-white text-[30px] max-md:text-[20px] w-[150px]">
            material sifati
          </p>
        </div>
        <div className="max-md:order-last">
          <img className="max-md:w-[500px]" src={Spalne2} alt="spalne" />
        </div>
        <div className="flex flex-col items-start justify-center w-[30%] max-md:hidden">
          <h2 className="text-[40px] text-white font-bold ">
            "Buxoro Tabiiy Mahsuloti"
          </h2>
          <p className="text-[17px] max-w-[300px] text-white">
            ko'p yillar davomida butun dunyoda foydalanish uchun paxta
            matolarini ishlab chiqaradigan kompaniya bo'lib kelgan
          </p>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-bold text-[45px]">Kuz kolleksiya</h2>
          <p className="text-[#AAAAAA] text-[18px]">Buxoro tabiiy mahsuloti</p>
        </div>
        <div className="mt-[30px] grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 gap-[50px]">
          {Data.slice(12, 22).map((item, index) => ( 
            <div key={index} className="flex flex-col gap-[20px] hover:text-red-600 font-semibold">
              <img className="rounded-3xl cursor-pointer" src={item.img} alt="Error" />
              <h1 className="text-[17px]">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#224f4d] max-w-full w-full rounded-3xl h-[400px] max-md:h-full flex items-center max-md:flex-col-reverse mt-[80px] px-[20px]">
        <div className="flex items-center flex-col w-[30%]">
          <h2 className="text-[100px] font-black text-white max-md:text-[50px]">
            100%
          </h2>
          <p className="text-white text-[30px] max-md:text-[20px] w-[150px]">
            material sifati
          </p>
        </div>
        <div className="max-md:order-last">
          <img className="max-md:w-[500px]" src={Spalne3} alt="spalne" />
        </div>
        <div className="flex flex-col items-start justify-center w-[30%] max-md:hidden">
          <h2 className="text-[40px] text-white font-bold ">
            "Buxoro Tabiiy Mahsuloti"
          </h2>
          <p className="text-[17px] max-w-[300px] text-white">
            ko'p yillar davomida butun dunyoda foydalanish uchun paxta
            matolarini ishlab chiqaradigan kompaniya bo'lib kelgan
          </p>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-bold text-[45px]">Kuz kolleksiya</h2>
          <p className="text-[#AAAAAA] text-[18px]">Buxoro tabiiy mahsuloti</p>
        </div>
        <div className="mt-[30px] grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 gap-[50px]">
          {Data.slice(22, 32).map((item, index) => ( 
            <div key={index} className="flex flex-col gap-[20px] hover:text-red-600 font-semibold">
              <img className="rounded-3xl cursor-pointer" src={item.img} alt="Error" />
              <h1 className="text-[17px]">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
