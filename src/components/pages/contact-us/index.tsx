import EmailI from "../../../assets/noun_Email.svg";
import PhoneI from "../../../assets/noun_Phone.svg";
import LocationI from "../../../assets/noun_Location.svg";
const Contact = () => {
  return (
    <div className="container-box">
      <div className="flex items-center justify-around gap-[40px] max-md:flex-wrap">
        <div className="mt-[100px] w-full max-md:mt-[20px]">
          <h2 className="text-[40px] font-bold">Aloqa</h2>
          <form action="" className="flex flex-col gap-[30px] mt-[50px]">
            <input
              className="max-w-[550px] max-md:max-w-[800px] h-[45px] rounded-3xl border-none bg-[#EFEFEF] px-[20px] py-[20px]"
              type="email"
              placeholder="sizning elektron manzilingiz"
              id="email"
            />
            <input
              className="max-w-[550px] max-md:max-w-[800px] h-[45px] rounded-3xl border-none bg-[#EFEFEF] px-[20px] py-[20px]"
              type="tel"
              placeholder="telefon raqamingiz"
              id="tel"
            />
            <textarea
              className="max-w-[550px] max-md:max-w-[800px] h-[100px] rounded-3xl resize-none border outline-none border-none bg-[#EFEFEF] px-[20px] py-[10px]"
              name="tel"
              id="tel"
              placeholder="Sizning habaringiz..."
            ></textarea>
            <button className="max-w-[210px] mx-auto  w-full border bg-red-500 rounded-3xl h-[45px] hover:bg-black">
              <h2 className="text-[18px] font-semibold text-white">Yuborish</h2>
            </button>
          </form>
        </div>
        <div className="mt-[100px] max-md:mt-[20px] max-w-[850px] w-full">
          <iframe
            className="h-[550px] w-full max-md:h-[300px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1533.826253410525!2d64.45785812584882!3d39.74745589907911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5005f5da092a35%3A0x38ddf0b8d382281b!2z0J7QntCeIEJ1a2hhcmEgTmF0dXJhbCBQcm9kdWN0!5e0!3m2!1suz!2s!4v1712476938604!5m2!1suz!2s"
          ></iframe>
        </div>
      </div>
        <div className="w-full mt-[100px]">
          <ul className="flex items-center justify-around max-md:flex-col gap-[50px]">
            <li className="flex items-center gap-10 max-md:flex-col">
              <img src={EmailI} alt="" />
              <h2>
                <span className="font-bold">Email:</span>info@bnpfabric.uz
              </h2>
            </li>
            <li className="flex items-center gap-10 max-md:flex-col">
              <img src={PhoneI} alt="" />
              <h2>
                <span className="font-bold">Tel:</span>+998 93 383 75 85 <br />
                +998 93 960 78 00
              </h2>
            </li>
            <li className="flex items-center gap-10 max-md:flex-col">
              <img src={LocationI} alt="" />
              <h2><span className="font-bold">Manzil:</span>Buxoro, st. Alpomish 80.</h2>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Contact;
