import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";

import "./MenuPage.css";
import Person from "../components/Person";
import forestBg from "../assets/menu.png";

import purple from "../assets/stone/stone1.png";
import blue from "../assets/stone/stone2.png";
import orange from "../assets/stone/stone3.png";
import green from "../assets/stone/stone4.png";
import rainbow from "../assets/stone/stone5.png";

export default function MenuPage() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <main
        className="menu-page"
        style={{ backgroundImage: `url(${forestBg})` }}
        >
        <div className="menu-page__top">
            <div className="menu-page__level">
                <span>09</span>
                <p>Уровень мира</p>
            </div>

            <div className="menu-page__fragments">
                <img src={purple} alt="цвет" />
                <img src={blue} alt="звук" />
                <img src={orange} alt="форма" />
                <img src={green} alt="движение" />
                <img src={rainbow} alt="особый" />
            </div>

            <button 
                onClick={() => setIsSettingsOpen(true)}
                className="menu-page__settings" type="button" 
                aria-label="Настройки"
            >
                <Settings size={42} strokeWidth={3.5} />
            </button>
        </div>

        <section className="menu-page__scene">
            <div className="menu-page__character">
            <Person />
            </div>
        </section>

        <nav className="menu-page__bottom">
            <button />
            <button />
            <button />
            <button />
            <button />
        </nav>

        {isSettingsOpen && (
        <div className="menu-modal">
            <div className="menu-modal__window">
            <h2 className="menu-modal__title">Настройки</h2>

            <button
                className="menu-modal__button"
                type="button"
                onClick={() => setIsSettingsOpen(false)}
            >
                Продолжить
            </button>

            <button
                className="menu-modal__button"
                type="button"
                onClick={() => navigate("/")}
            >
                На страницу входа
            </button>
            </div>
        </div>
        )}
        </main>
    );
}