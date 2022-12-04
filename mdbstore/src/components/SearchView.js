import GridView from "./GridView";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../config.js";

export default function SearchView() {
  let { query } = useParams();
  let [ items, setItems ] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetch(`${config.BASE_URL}/search/${query}`).then(r => r.json()).then(d => {
      setItems(d);
    });
  }, [query])
  
  return (
    <GridView items={items}/>
  )
}