import styles from "./Item.module.css";

function Item({ fooditem, bought, handleBuy }) {
  const handleClick = () => {
    //console.log(`"${fooditem} is Clicked"`);
  };
  return (
    <>
      <li
        key={fooditem.id}
        className={`${styles.il} "list-group-item il"`}
      >
        {fooditem}
      </li>{" "}
      <center>
        <button className={styles.btn} onClick={handleBuy}>
          Buy
        </button>
      </center>
    </>
  );
}

export default Item;
