import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../providers/auth";
import { Container, Form } from "./styles";
import vestido from "../../image/vestido.png";

export default function Dashboard() {
  const { Logout } = useContext(AuthContext);
  const history = useHistory();
  return (
    <Container>
      <Form>
        <img src={vestido} alt="" />
        <button onClick={() => Logout(history)}>Logout</button>
      </Form>
    </Container>
  );
}
