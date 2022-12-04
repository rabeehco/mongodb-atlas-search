import GridView from "./GridView";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SearchView() {
  let { query } = useParams();
  let [ items, setItems ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/search/" + query).then(r => r.json()).then(d => {
      debugger;
      setItems(d);
    });
  }, [query])
  
  return (
    <GridView items={items}/>
  )
}