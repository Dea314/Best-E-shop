import HomePage from "./components/HomePage";
import { useSelector } from "react-redux";
import axios from "axios";

const getBestsellers = async () => {
  const { data } = await axios.get("/api/products/bestsellers");
  return data;
};

const Home = () => {
  const { categories } = useSelector((state) => state.getCategories);

  return <HomePage categories={categories} getBestsellers={getBestsellers} />;
};

export default Home;
