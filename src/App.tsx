import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "./pages/home"
import DetailPage from "./pages/details"
import "./App.css"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail/:name",
      element: <DetailPage />,
    },
  ])

  return (
    <div className="bg-[url('/img/bg9.jpg')] bg-cover bg-center min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  )
}
export default App
