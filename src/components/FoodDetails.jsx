import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "3325066962514421a21ff477be7425c3";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.foodDetails}>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} />
      </div>
      <span>
        <strong>Time to Cook: {food.readyInMinutes} </strong>
      </span>
      <div className={styles.foodDescription}>
        <span>👨‍👩‍👧‍👧Servings: {food.servings}</span>
        <span>{food.vegetarian ? "🥕Vegetarian" : "🥩Non-vegetarian"}</span>
        <span>{food.vegan ? "🌱Vegan" : "🥚Non-vegan"}</span>
      </div>

      <span>${food.pricePerServing / 100} per serving</span>

      <div>
        <h2>Ingredients</h2>
        {isLoading ? (
          <p>Loading..</p>
        ) : (
          food.extendedIngredients.map((item) => (
            <div className={styles.ingredients}>
              <div className={styles.ingredients2}>
                <img
                  src={
                    `https://spoonacular.com/cdn/ingredients_100x100/` +
                    item.image
                  }
                />
                <span className={styles.ingredient}>{item.name}</span>
              </div>

              <span className={styles.quantity}>
                {item.amount} {item.unit}
              </span>
            </div>
          ))
        )}
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
            <li className={styles.instructions}>{step.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
