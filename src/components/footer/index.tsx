import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mt-[70px] max-lg:flex-wrap max-md:gap-8">
      <div className="flex gap-[80px]">
        <div>
          <img className="w-[320px]" src={Logo} alt="" />
          <h2 className="max-w-[280px] text-[#999999]">
            “Bukhara Natural Product” ko'p yillardan buyon butun dunyoda
            foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya
            hisoblanadi.
          </h2>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="font-bold text-[20px]">menyu</h2>
          <ul className="flex items-start gap-[10px] flex-col">
            <li className="cursor-pointer"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0 });
              }}
            >
              Uy
            </li>
            <li className="cursor-pointer"
              onClick={() => {
                navigate("/shop");
                window.scrollTo({ top: 0 });
              }}
            >
              To'plam
            </li>
            <li className="cursor-pointer"
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0 });
              }}
            >
              Biz haqimizda
            </li>
            <li className="cursor-pointer"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0 });
              }}
            >
              kontanktlar
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="font-bold text-[20px]">kontaktlar</h2>
        <div>
          <h2 className="text-[15px] max-w-[160px]">
            Buxoro, st. Alpomish 80. Bnpuz@bk.ru bnp_fabrik info@bnpfabric.com
            +998 93 383 75 85 +998 93 960 78 00
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[10px]">
        <h2 className="text-[20px]">
          Elektron pochtamizga <br /> obuna bo'ling
        </h2>
        <div className="flex flex-col gap-[20px] items-start">
          <input
            className="max-w-[400px] h-[45px] rounded-3xl border-none bg-[#EFEFEF] px-[40px] py-[25px]"
            type="email"
            placeholder="sizning elektron manzilingiz"
            id="email"
          />
          <button className="max-w-[210px] mx-auto  w-full border bg-red-500 rounded-3xl h-[45px] hover:bg-black">
            <h2 className="text-[18px] font-semibold text-white">Yuborish</h2>
          </button>
          <h2>Kamida bitta ro'yxatni tanlang</h2>
        </div>
      </div>
    </div>
  );
};
export default Footer;
