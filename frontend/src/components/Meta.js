import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = ({ title = "The best E shop", description = "Online E-shop" }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
