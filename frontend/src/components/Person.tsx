import "./Person.css";
import guardianImage from "../assets/person.png";

export default function Person() {
  return (
    <div className="person">
      <div className="person__shadow" />
      <img
        src={guardianImage}
        alt="Хранитель"
        className="person__image"
      />
    </div>
  );
}