import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Product } from "../types/Product";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({
  category,
  subCategory,
}: {
  category: Product["category"];
  subCategory: Product["subCategory"];
}) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (product: Product) => category === product.category
      );
      productsCopy = productsCopy.filter(
        (product: Product) => subCategory === product.subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
