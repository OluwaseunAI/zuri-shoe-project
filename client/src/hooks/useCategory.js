import { useState, useEffect } from "react";
import axios from "axios";

export default function useCatg() {
  const [categories, setCatG] = useState([]);

 getCatG = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      setCatG(data && data.category ? data.category : []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCatG();
  }, []);

  return categories;
}
