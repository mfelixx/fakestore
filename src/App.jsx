import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </>
  );
}

export default App;
