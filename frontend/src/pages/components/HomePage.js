import ProductCarousel from "../../components/ProductCarousel";
import CategoryCard from "../../components/CategoryCard";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Meta from "../../components/Meta";

const HomePage = ({ categories, getBestsellers }) => {
  const [mainCategories, setMainCategories] = useState([]);
  const [bestSellers, setBestsellers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getBestsellers()
      .then((data) => {
        setBestsellers(data);
      })
      .catch((er) => {
        setError(
          er.response.data.message ? er.response.data.message : er.response.data
        );
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        );
      });
    setMainCategories((cat) =>
      categories.filter((item) => !item.name.includes("/"))
    );
  }, [categories]);

  return (
    <>
      <Meta />
      <ProductCarousel bestSellers={bestSellers} />
      <Container>
        <Row xs={1} md={2} className="cards g-4 mt-5">
          {mainCategories.map((category, idx) => (
            <CategoryCard key={idx} category={category} idx={idx} />
          ))}
        </Row>
        {error}
      </Container>
    </>
  );
};

export default HomePage;
