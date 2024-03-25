import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);


  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  console.log(product)

  return (
    <div className="wishlist-page-container">
      {product ? (
        <>
          <div className="wishlist-product-left-side">
            <ul className="wishlist-product-ul">
              {product.images.map((item, index) => {
                return (
                  <li key={index} className="wishlist-product-li">
                    <img onClick={() => handleImageClick(index)} className="wishlist-product-img" src={item} alt="product" />
                  </li>
                )
              })}
            </ul>
            <div className="wishlist-zoom-container"><img
              className="wishlist-zoom-img"
              src={product.images[selectedImageIndex]}
              alt="product-zoom"
            /></div>
          </div>
          <div className="wishlist-product-right-side">
            <div className="wishlist-brandname">Brand: {product.brand}</div>
            <div className="wishlist-category">Category: {product.category}</div>
            <div className="wishlist-title">Title: {product.title}</div>
            <div className="wishlist-description">
              Description: {product.description}
            </div>
            <div className="product-price">
              Price: {product.price}$
            </div>
            <div className="product-stock">
              Left: {product.stock} Units
            </div>
          </div>

        </>
      ) : (
        <div className="loading-time">Loading...</div>
      )}
    </div>
  );
};

export default Product;