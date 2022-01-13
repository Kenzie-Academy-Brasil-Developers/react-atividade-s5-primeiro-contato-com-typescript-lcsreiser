import "./style.tsx";
import "./reset.css";

import { useState } from "react";

import Input from "./components/Input/index";
import Card from "./components/Card/index";
import { Container, Content } from "./style";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [user, setUser] = useState<User[]>([]);

  const sendData = () => {
    const person = { name, age, hobby };

    if (name && age && hobby) {
      setUser([...user, person]);
    }
  };

  return (
    <Container>
      <Content>
        <Input
          type="text"
          placeholder="Nome"
          label="Nome"
          onChange={(evt) => setName(evt.target.value)}
        />
        <Input
          type="number"
          placeholder="Idade"
          label="Idade"
          onChange={(evt) => setAge(Number(evt.target.value))}
        />
        <Input
          type="text"
          placeholder="Hobby"
          label="Hobby"
          onChange={(evt) => setHobby(evt.target.value)}
        />
        <button onClick={() => sendData()}>Enviar</button>

        <h1>Registrados: </h1>
        <ul>
          {user.map((user, index) => (
            <Card key={index} user={user} />
          ))}
        </ul>
      </Content>
    </Container>
  );
}

export default App;
