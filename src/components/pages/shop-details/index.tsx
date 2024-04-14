import { useParams } from "react-router-dom";

const ShopDetails = () => {
    const {id} = useParams()
    console.log(id);
    
  return <div>ShopDetails</div>;
};

export default ShopDetails;
