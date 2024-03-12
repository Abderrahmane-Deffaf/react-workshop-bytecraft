import { createBrowserRouter } from "react-router-dom";
import Landing from "./routes/Landing";
import Login from "./routes/Login";
import Home from "./routes/Home";
import AuthContext from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Studnet from "./routes/Studnet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "",
    element: <AuthContext />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
        children: [
          {
            // main
            element: <p className="w-full">main</p>,
            path: "main",
          },
          {
            // announcement
            element: <p className="w-full">announcement</p>,
            path: "ann",
          },
          {
            element: <Studnet/>,
            path: "student",
          },
        ],
      },
    ],
  },
]);

export default router;
