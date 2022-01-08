import pagenot_found_logo from "../../assets/pagenot_found_404.gif";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="PageNotFound-container">
      <img src={pagenot_found_logo} alt="Product does not exist" />
    </div>
  );
}
