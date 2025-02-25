import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "3325066962514421a21ff477be7425c3";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("Lasagna");

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.inputDiv}>
      <input
        className={styles.foodInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Lasagna"
      />
    </div>
  );
}
