import { createBrowserRouter } from "react-router-dom";
import Landing from "./routes/Landing";
import Login from "./routes/Login";
import Home from "./routes/Home";
import AuthContext from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Studnet from "./routes/Studnet";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
              <Home />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
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
            element: <Studnet />,
            path: "student",
          },
        ],
      },
    ],
  },
]);

export default router;
