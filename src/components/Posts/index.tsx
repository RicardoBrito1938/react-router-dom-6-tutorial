import { Outlet, useParams } from "react-router-dom";

export const Posts = () => {
  const params = useParams();

  return (
    <div>
      <h1>Post {params.id}</h1>
      <Outlet />
    </div>
  );
};
