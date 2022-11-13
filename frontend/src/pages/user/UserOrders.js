import UserOrdersPage from "./components/UserOrdersPage";
import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("/api/orders");
  return data;
};

const UserOrders = () => {
  return <UserOrdersPage getOrders={getOrders} />;
};

export default UserOrders;
