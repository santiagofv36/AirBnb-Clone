import { useState } from "react";

const App = () => {
  const [correo, setCorreo] = useState("");

  return (
    <form
      onSubmit={() => {
        alert("Correo enviado");
        setCorreo("");
      }}
    >
      <p>Correo Electrónico</p>
      <input
        placeholder="Correo Electrónico"
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
