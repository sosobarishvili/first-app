import { useState } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const params = useParams()
  const [getData, setData] = useState({})
  const [loading, setLoading] = (false)

  const handleData = (id) => {
    setLoading(true)

  }

  console.log(params)
  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <div>

        </div>
      )}
    </div>
  )
}

export default Product;