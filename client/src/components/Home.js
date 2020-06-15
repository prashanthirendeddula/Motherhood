import React from "react"

import { Card } from "antd";
const { Meta } = Card;

function Home(props){
    return(
        <div>
            <h2>Welcome To  The Motherhood App</h2>
 <Card
    hoverable
    style={{ width: 800 }}
    cover={
      <img
        alt="example"
        src="https://cdn.pixabay.com/photo/2016/09/05/12/22/mother-and-baby-1646450_640.jpg"
        
      />
    }
  >
  </Card>,        </div>
    )
}
export  default Home