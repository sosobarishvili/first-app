import { useEffect, useState } from "react";
import Card from "./card";




const CardList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const fullDdata = await fetch('https://dummyjson.com/products');
        const result = await fullDdata.json();
        setData(result.products);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData()
  }, [])



  const handleRemove = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData([...newData]);
  };
  return (
    <div className="list-container">
      <div className="list-counter">You have {data.length} <span className="product-number" ></span> product</div>
      {loading ? <div className="loading-time">Loading...</div> : <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Card
                id={item.id}
                img={item.images[0]}
                title={item.title}
                price={item.price}
                stock={item.stock}
                description={item.description}
                clickRemove={handleRemove}
              />
            </li>
          )
        })}

      </ul>}

    </div>


  )
}

export default CardList;