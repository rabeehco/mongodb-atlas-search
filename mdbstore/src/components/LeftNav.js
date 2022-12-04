import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../config";

export default function LeftNav() {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let categories = await fetch(`${config.BASE_URL}/categories`).then(r => r.json());
      setCategories(categories);
    }

    getCategories();
  }, []);

  return (
    <Fragment>
      <ul className="list-group">
        {categories.map((c, index) => {
          return (
            <li key={`li${index}`} className="categ-filter list-group-item d-flex justify-content-between align-items-center">
              <Link className="categ-link" to={`/category/${c._id}`}>{c._id}</Link>
              <span className="badge bg-dark-green rounded-pill">{c.count}</span>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}