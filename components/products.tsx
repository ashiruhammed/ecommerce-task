"use client";
import { fetchProducts } from "@/utils/product-util";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductCard from "./product-card";
import ProductSkeletonLoader from "./product-loader";

function Products() {
  const [limit, setLimit] = useState(10);

  const { isLoading, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["products", limit],
      queryFn: () => fetchProducts(limit),
      placeholderData: keepPreviousData,
    });

  type dataType = typeof data;

  return (
    <div>
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5 gap-14 flex flex-col">
        {!isLoading &&
          data &&
          data.products.map((dataObj: dataType, i: number) => (
            <ProductCard {...dataObj} key={i} />
          ))}
        {((limit === 0 && isFetching) || isLoading) &&
          Array.from({ length: 10 }).map((_, i) => (
            <ProductSkeletonLoader key={i} />
          ))}
      </div>

      {isError && (
        <div className="text-center mt-4 font-bold text-red-800">
          <p>Check your internet connection</p>
        </div>
      )}

      {limit ? (
        <button
          className="justify-center mt-24 px-10 py-3 border-2 border-[#23A6F0] rounded-md font-bold text-[#23A6F0]"
          onClick={() => setLimit(0)}>
          {isError ? "RELOAD" : "LOAD MORE PRODUCT"}
        </button>
      ) : null}
    </div>
  );
}

export default Products;
