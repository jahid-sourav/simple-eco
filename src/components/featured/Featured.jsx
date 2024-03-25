import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import DefaultLoader from "../defaultLoader/DefaultLoader";
import FeaturedCard from "../featuredCard/FeaturedCard";

export default function Featured({ searchValue }) {
  const [products, loader] = useProducts();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (searchValue) {
      const isExist = products.filter((product) =>
        product.category.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterData(isExist);
    } else {
      setFilterData(products);
    }
  }, [searchValue, products]);
  if (loader) {
    return <DefaultLoader />;
  }

  return (
    <>
      {filterData.length === 0 && "No Data"}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filterData.map((product) => (
          <FeaturedCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
