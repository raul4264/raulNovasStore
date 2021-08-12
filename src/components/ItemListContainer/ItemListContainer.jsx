import React, { useState, useEffect } from 'react'
import './style.scss'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
	const [products, setProducts] = useState(null);

  useEffect(() => {
		getProducts();
  });

	const getProducts = () => {
		const products = [
			{ id: 1, name: 'item1'},
			{ id: 2, name: 'item2'}
		];

		const tarea = new Promise((resolve, reject) => {
			setTimeout(() => { resolve(products); }, 2000);
		});

		tarea.then((result) => { setProducts(result); });
	}

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer
