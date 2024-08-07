import ErrorMessage from "./ErrorMessage";

import Item from "./Item";
import styles from "./Extra.module.css";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function Extra() {
  let [TexttoShow, setTexttoShow] = useState();

  let [food, setfood] = useState([
    "Green Vegetables",
    "Multigrain Roti",
    "Vegetable Salad",
  ]);

  //console.log(TexttoShow);

  const handleChange = (event) => {
    console.log(event.target.value);
    setTexttoShow(event.target.value);
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      let newfood = event.target.value;
      let newarr = [...food, newfood];
      setfood(newarr);
      console.log(event.target.value);
    }
  };

  let [activeItems, setactiveItems] = useState([]);

  let onBuybtn = (item, event) => {
    console.log(activeItems);
    let newitems = [item, ...activeItems];
    setactiveItems(newitems);
    console.log(`${item} bought`);
    console.log(activeItems);
  };
  return (
    <Container>
      <h1 id={styles.subHead}>Healthy Food</h1>
      <center>
        <input
          type="text"
          placeholder="Search your Healty Food "
          id="input"
          onKeyDown={(event) => {
            handleKeydown(event);
          }}
        />
        <p>Users Searched for : {TexttoShow}</p>
      </center>
      <ErrorMessage food={food} />
      <ul className="list-group">
        {food.map((item) => (
          <Item
            fooditem={item}
            bought={activeItems.includes(item)}
            handleBuy={(event) => {
              onBuybtn(item, event);
            }}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Extra;
