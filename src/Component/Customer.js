import { useHistory, useLocation } from "react-router-dom";
export default function Customer() {
  let location = useLocation();
  let history = useHistory();
  return (
    <div>
      hello welcome to the sight
      <br />
      {location.pathname === "/customer" ? (
        <button
          onClick={() => {
            history.push("/home");
          }}
        >
          add to cart
        </button>
      ) : null}
      <br />
      {console.log(JSON.stringify(history))}
    </div>
  );
}
