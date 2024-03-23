import { Outlet } from "react-router-dom";

export default function Services() {
  return (
    <>
      <h1>This is the Services page</h1>
      <h2>This is a heading 2</h2>
      <h3>This is a heading 3</h3>
      <Outlet />
      <h4>This is a heading 4</h4>
    </>
  );
}
