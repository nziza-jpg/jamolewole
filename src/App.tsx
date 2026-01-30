import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login.tsx";
import Carousel from "./components/Carousel.tsx";
import Letter from "./components/Letter.tsx";

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("anniv_auth") === "true";
  });

  const [showUploader, setShowUploader] = useState<boolean>(false);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 100
      ) {
        setShowUploader(true);
      } else {
        setShowUploader(false);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [showUploader]);

  const handleLogin = () => {
    localStorage.setItem("anniv_auth", "true");
    setAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("anniv_auth");
    setAuthenticated(false);
  };

  if (!authenticated) {
    return (
      <div className="app-root">
        <Login onSuccess={handleLogin} />
      </div>
    );
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <button className="logout" onClick={handleLogout}>
          Log out
        </button>
      </header>
      <Carousel />

      <main>
        <Letter />
      </main>
    </div>
  );
}

export default App;
