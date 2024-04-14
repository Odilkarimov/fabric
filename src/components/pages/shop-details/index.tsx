import { useParams, useNavigate } from "react-router-dom";
import Data from "../../data/index.tsx";

interface Item {
  img?: string;
  name?: string;
  id?: number;
}

const ShopDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const item = Data.find((item: Item) => item.id === parseInt(id));
  if (!item) {
    return <div>Rasmdagi mahsulot topilmadi</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-16 max-md:gap-[30px] max-[930px]:flex-col">
        <div>
          <img
            className="w-[700px] rounded-3xl"
            src={item.img}
            alt={item.name}
          />
        </div>
        <div>
          <div>
            <h1 className="text-[40px] font-bold">{item.name}</h1>
          </div>
          <table className="border-2  h-[400px]">
            <tr className="border-2">
              <td className="border-2 max-md:px-[10px] px-[40px]">Материал:</td>
              <td className="border-2 max-md:px-[10px] px-[40px]">
                100% хлопок фланель
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2 max-md:px-[10px] px-[40px]">
                Наволочка:
              </td>
              <td className="border-2 max-md:px-[10px] px-[40px]">
                50x70 см (2 шт.)
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2 max-md:px-[10px] px-[40px]">Простынь:</td>
              <td className="border-2 max-md:px-[10px] px-[40px]">
                260x280 см (1 шт.)
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2 max-md:px-[10px] px-[40px]">
                Пододеяльник:
              </td>
              <td className="border-2 max-md:px-[10px] px-[40px]">
                160x220 см (2 шт.)
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2 max-md:px-[10px] px-[40px]">Размер:</td>
              <td className="border-2 max-md:px-[10px] px-[40px]">
                Special size
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2 max-md:px-[10px] px-[40px]">
                Производитель:
              </td>
              <td className="border-2 max-md:px-[10px] px-[40px]">
                Bukhara Natural Product
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="mt-[30px] grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 gap-[50px]">
        {Data.slice(5, 17).map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[20px] hover:text-red-600 font-semibold"
            onClick={() => navigate(`/shop-details/${item?.id}`)} // Tanlangan ma'lumotni chiqarish uchun onClick hodisasini qo'llash
          >
            <img
              className="rounded-3xl cursor-pointer"
              src={item.img}
              alt="Error"
            />
            <h1 className="text-[17px]">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopDetails;
