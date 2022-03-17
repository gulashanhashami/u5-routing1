import { Link } from "react-router-dom";

const links = [
  {to: "/", title: "Home"},
  {to: "/products", title: "All Products"},
  // Fix this links array, it's an array of objects {to: "", title: ""}
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
              <h1>{el.title}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};
