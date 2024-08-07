import React from "react";
import { useNavigate } from "react-router-dom";

const Boton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn-felicitar"
        onClick={() => {
          navigate("/contact");
        }}
      >
        Felicitar a mi padre por su cumpleaños
      </button>
    </div>
  );
};

export default Boton;
