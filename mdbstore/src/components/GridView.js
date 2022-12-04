import { Fragment } from "react"
import GridItem from "./GridItem"

export default function GridView(props) {
  let data = props.items;

  return(
    <Fragment>
      <div className="row row-cols-3 mx-1 gy-4">
      {
        data.map((i, index) => <GridItem key={index} {...i} />)
      }
      </div>
    </Fragment>
  )
}
