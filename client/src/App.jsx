import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Login from "./pages/Login"
import SingIn from "./pages/SignIn"

export default function App() {
  return (
    <div className="h-full w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<SingIn />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}
