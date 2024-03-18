import { useState } from "react";
import Card from "./card";




const CardList = () => {
  const [data, setData] = useState([{ "id": 1, "img": "http://dummyimage.com/230x100.png/cc0000/ffffff", "title": "GIS Technical Architect", "description": "0x964d2fb828a9053fb5212ae807bc49e95db0e717" },
  { "id": 2, "img": "http://dummyimage.com/136x100.png/ff4444/ffffff", "title": "VP Accounting", "description": "0x1fd42ef6eeca38a631f2487321fd5996a6078b92" },
  { "id": 3, "img": "http://dummyimage.com/213x100.png/dddddd/000000", "title": "Physical Therapy Assistant", "description": "0xdb20f0ac7a88a9c87ada8d0928ee88f7edf32ea4" },
  { "id": 4, "img": "http://dummyimage.com/212x100.png/ff4444/ffffff", "title": "Assistant Media Planner", "description": "0x76a0639b066e8c36c2de7b228be486d35b6b09b9" },
  { "id": 5, "img": "http://dummyimage.com/225x100.png/5fa2dd/ffffff", "title": "VP Product Management", "description": "0xf4c5e815e86288da483c160e09bb7e502a2b27d1" },
  { "id": 6, "img": "http://dummyimage.com/161x100.png/5fa2dd/ffffff", "title": "Senior Editor", "description": "0x49122bd3770446216bb618016968add3de3a5a30" },
  { "id": 7, "img": "http://dummyimage.com/180x100.png/dddddd/000000", "title": "Help Desk Operator", "description": "0x467c87c14d0c2bbb420a9a78c86d9bb409e79bd7" },
  { "id": 8, "img": "http://dummyimage.com/135x100.png/cc0000/ffffff", "title": "VP Accounting", "description": "0x5d9013183f7612226d104441e54510364dbdce24" },
  { "id": 9, "img": "http://dummyimage.com/248x100.png/ff4444/ffffff", "title": "Actuary", "description": "0x18628b2e4153e55b807b65ca19c47859b8343746" },
  { "id": 10, "img": "http://dummyimage.com/172x100.png/dddddd/000000", "title": "Programmer II", "description": "0x7eb440af5ce4b7d6604398eac48ef6c2a9759e98" },
  { "id": 11, "img": "http://dummyimage.com/123x100.png/ff4444/ffffff", "title": "Senior Sales Associate", "description": "0x2c404af4671bdfa8372c737e68d46553c9b7f9f4" },
  { "id": 12, "img": "http://dummyimage.com/206x100.png/5fa2dd/ffffff", "title": "VP Accounting", "description": "0x548990a91370a2f694110b53f783f151c14cec2c" }])
  const handleRemove = (id) => {
    const newData = data.filter((item) => item.id !== id
    )
    setData(newData)
  }
  return (
    <div className="list-container">
      <div className="list-counter">You have {data.length} <span className="product-number" ></span> product</div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Card
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                clickRemove={handleRemove}
              />
            </li>
          )
        })}

      </ul>
    </div>


  )
}

export default CardList;