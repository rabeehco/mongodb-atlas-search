import "../loader.css";

export default function Loading() {
  return(
    <div className="overlay justify-content-center">
      <div className="lds-grid">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
}