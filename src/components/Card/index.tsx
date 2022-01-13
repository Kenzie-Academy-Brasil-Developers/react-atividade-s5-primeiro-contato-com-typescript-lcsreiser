interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

interface CardPerson {
  user: CardProps;
}

const Card = ({ user }: CardPerson) => {
  return (
    <>
      <li>
        {user.name}, {user.age} anos, gosta de {user.hobby}.
      </li>
    </>
  );
};

export default Card;
