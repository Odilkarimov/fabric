import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mt-[70px] max-lg:flex-wrap max-md:gap-8">
      <div className="flex gap-[50px]">
        <div>
          <img className="w-[320px]" src={Logo} alt="" />
          <h2 className="max-w-[280px] text-[#999999]">{t("footer.ftext1")}</h2>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="font-bold text-[20px]">{t("footer.ftext2")}</h2>
          <ul className="flex items-start gap-[10px] flex-col">
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0 });
              }}
            >
              {t("navbar.navtext1")}
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/shop");
                window.scrollTo({ top: 0 });
              }}
            >
              {t("navbar.navtext2")}
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0 });
              }}
            >
              {t("navbar.navtext3")}
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0 });
              }}
            >
              {t("navbar.navtext4")}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="font-bold text-[20px]">{t("footer.ftext3")}</h2>
        <div>
          <h2 className="text-[15px] max-w-[160px]">
          {t("footer.ftext4")}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[10px] max-w-[400px] w-full">
        <h2 className="text-[20px]">{t("footer.ftext5")}</h2>
        <div className="flex flex-col gap-[20px] items-start w-full">
          <input
            className="w-full max-w-[400px] h-[45px] rounded-3xl border-none bg-[#EFEFEF] px-[40px] py-[25px]"
            type="email"
            placeholder={t("footer.ftext6")}
            id="email"
          />
          <button className="max-w-[210px] mx-auto w-full border bg-red-500 rounded-3xl h-[45px] hover:bg-black">
            <h2 className="text-[18px] font-semibold text-white">{t("footer.ftext7")}</h2>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
