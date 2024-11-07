import Navbar from "./components/navbar/Navbar"
import HomePage from "./routes/homePage/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ListPage from "./routes/listPage/ListPage"
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profile/ProfilePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        }
      ]
    }
  ])
  return (
   
    <RouterProvider router={router}/>

  )
}

export default App