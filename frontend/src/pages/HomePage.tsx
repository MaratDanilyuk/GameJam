import "./HomePage.css";
import bgImage from "../assets/home.png";
import Person from "../components/Person";

export default function HomePage() {
  const handleStart = () => {
    console.log("Начать игру");
  };

  return (
    <main
      className="home-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="home-page__overlay" />

      <section className="home-hero">
        <div className="home-hero__content">
          <p className="home-hero__subtitle">
            Фиджитал-игра для детей 6–11 лет
          </p>

          <h1 className="home-hero__title">
            Хранитель
            <br />
            потерянных
            <br />
            историй
          </h1>

          <p className="home-hero__description">
            Лоскутная реальность разрушена. Помоги Хранителю восстановить мир —
            выполняй задания в реальной жизни и возвращай утраченное.
          </p>

          <button className="home-hero__button" onClick={handleStart}>
            Начать
          </button>

          <div className="home-hero__note">
            Каждое твоё действие в реальном мире делает этот мир целее.
          </div>
        </div>

        <div className="home-hero__visual">
          <Person />
        </div>
      </section>
    </main>
  );
}