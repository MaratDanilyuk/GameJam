import { useEffect, useState } from "react";
import "./Person.css";
import guardianImage from "../assets/person.png";

const phrases = [
  "Привет! Давай восстановим этот мир вместе.",
  "Каждое твоё действие делает реальность целее.",
  "Я чувствую, что мир может стать лучше.",
  "Помоги мне вернуть утраченные истории.",
  "Начнём с малого — и всё оживёт.",
];

export default function Person() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); 

      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setVisible(true); 
      }, 400); 
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="person">
      <div className="person__bubble">
        <svg
          viewBox="0 0 320 190"
          className="person__bubble-shape"
          aria-hidden="true"
        >
          <path
            d="
              M50,28
              Q25,28 25,55
              L25,110
              Q25,145 55,150
              Q105,160 155,150
              Q205,142 235,150
              Q270,158 288,138
              Q303,122 300,98
              Q296,68 270,54
              Q240,38 208,42
              Q185,20 150,22
              Q120,20 96,30
              Q78,18 50,28
              Z
            "
          />
        </svg>

        <div className={`person__bubble-text ${visible ? "show" : "hide"}`}>
          {phrases[phraseIndex]}
        </div>
      </div>

      <div className="person__thought-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="person__shadow" />
      <img
        src={guardianImage}
        alt="Хранитель"
        className="person__image"
      />
    </div>
  );
}