import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <ul>
      <li>
        <Link to={"/"}>Inicio</Link>
      </li>
      <li>
        <Link to={"/page2"}>Page 2 </Link>
      </li>
    </ul>
  );
}