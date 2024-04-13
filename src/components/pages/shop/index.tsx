import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import Data from "../../data/index.tsx";

interface Item {
  img: string;
  name: string;
}

const Shop = () => {
  const [selectedCollection, setSelectedCollection] = useState<string>("Baxor Kolleksiyasi");

  const handleCollectionChange = (collection: string) => {
    setSelectedCollection(collection);
  };

  const filteredData = Data.filter((item) => {
    switch (selectedCollection) {
      case "Baxor Kolleksiyasi":
        return Data.indexOf(item) < 12;
      case "Qish Kolleksiyasi":
        return Data.indexOf(item) >= 12 && Data.indexOf(item) < 26;
      case "Yozgi Kolleksiya":
        return Data.indexOf(item) >= 22 && Data.indexOf(item) < 32;
      case "Kuz Kolleksiyasi":
        return Data.indexOf(item) >= 18 && Data.indexOf(item) < 32;
      default:
        return true;
    }
  });

  return (
    <div className="container-box">
      <div className="flex justify-between">
        <div className="flex gap-[20px]">
          <input type="text" />
          <div>
            <h2 className="text-[45px] font-bold">{selectedCollection}</h2>
          </div>
        </div>
        <button>isxodnaya sortirovka</button>
      </div>
      <div className="flex items-start justify-center gap-[50px]">
        <div className="mt-[30px] text-[20px] font-bold">
          <Dropdown label="To'plam" inline>
            <Dropdown.Item className="text-[20px] text-black" onClick={() => handleCollectionChange("Baxor Kolleksiyasi")}>Baxor Kolleksiyasi</Dropdown.Item>
            <Dropdown.Item className="text-[20px] text-black" onClick={() => handleCollectionChange("Qish Kolleksiyasi")}>Qish Kolleksiyasi</Dropdown.Item>
            <Dropdown.Item className="text-[20px] text-black" onClick={() => handleCollectionChange("Yozgi Kolleksiya")}>Yozgi Kolleksiya</Dropdown.Item>
            <Dropdown.Item className="text-[20px] text-black" onClick={() => handleCollectionChange("Kuz Kolleksiyasi")}>Kuz Kolleksiyasi</Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <div className="mt-[30px] grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-[50px]">
            {filteredData.map((item: Item, index: number) => (
              <div key={index} className="flex flex-col gap-[20px] hover:text-red-600 font-semibold">
                <img className="rounded-3xl cursor-pointer" src={item.img} alt="Error" />
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
