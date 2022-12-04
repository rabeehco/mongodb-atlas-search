import GridView from "./GridView";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../config.js";

export default function CategoryView() {
  let { category } = useParams();
  let [ items, setItems ] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let items = await fetch(`${config.BASE_URL}/items/category/${category}`).then(r => r.json());
      setItems(items);
    }
    getItems();
  }, [category])
  
  return (
    <GridView items={items}/>
  )
}