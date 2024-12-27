import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <section className={styles.itemContainer}>
      <div className={styles.foodItem}>
        <img className={styles.foodImage} src={food.image} alt="" />
        <h5 className={styles.foodTitle}> {food.title} </h5>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.foodButton}
        >
          View Recipe
        </button>
      </div>
    </section>
  );
}
