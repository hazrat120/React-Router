import { Outlet, useNavigate } from "react-router-dom";

export default function Faq() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/services");
  };

  return (
    <>
      <h1>This is a Faq page</h1>
      {<Outlet />}
      <button type="button" onClick={goBack}>
        Back To React
      </button>
    </>
  );
}
