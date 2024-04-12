import Data from "../../data/index.tsx";
import { Dropdown } from "flowbite-react";

const Shop = () => {
  return (
    <div className="container-box">
      <div className="flex justify-between">
        <div className="flex gap-[20px]">
          <input type="text" />
          <div>
            <h2>Kollekssiya</h2>
            <p>Отображение 1–16 из 76 Исходная сортировка</p>
          </div>
        </div>
        <button>isxodnaya sortirovka</button>
      </div>
      <div className="flex items-start justify-center">
        <div>
          <Dropdown label="Dropdown" inline>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <div className="mt-[30px] grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 gap-[50px]">
            {Data.slice(0, 10).map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-[20px] hover:text-red-600 font-semibold"
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
      </div>
    </div>
  );
};

export default Shop;
