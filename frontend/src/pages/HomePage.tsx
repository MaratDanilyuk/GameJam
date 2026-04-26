import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Person from "../components/Person";
import bgImage from "../assets/log_in.jpg";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="home-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <button className="home-page__settings" type="button" aria-label="Настройки">
        <Settings size={42} strokeWidth={3.5} />
      </button>

      <section className="home-login">
        <div className="home-login__person">
          <Person />
        </div>

        <div className="home-login__panel">
          <div className="home-login__title">
            Хранитель потерянных историй
          </div>

          <button 
            onClick={() => navigate("/menu")}
            className="home-login__button" type="button"
          >
            Войти
          </button>

          <button className="home-login__button" type="button">
            Родительский вход
          </button>
        </div>
      </section>
    </main>
  );
}