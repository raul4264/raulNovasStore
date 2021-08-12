import React, { useState, useEffect } from "react";
import "./style.scss";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  });

  const getProducts = () => {
    const products = [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
      },
    ];

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    tarea.then((result) => {
      setProducts(result);
    });
  };

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
