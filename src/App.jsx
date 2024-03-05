import { createBrowserRouter } from "react-router-dom";
import Landing from "./routes/Landing";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
