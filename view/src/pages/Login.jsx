import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import request from "../utils/Request";
import { toast } from 'react-toastify';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;



const Login = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)

  const handleSubmit = (event) => {
    console.log('sadfsa', email, password)
    toast.promise(
      request(`/user/login`, { email, password }),
      {
        pending: 'Promise is pending',
        success: {
          render({ data }) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            setTimeout(() => { window.location.href = '/'}, 4000)

            return `${data.msg}`
          }
        },
        error: {
          render({ data }) {
            return `${data[0]}`
          }
        },
      }
    )
  }



  return (
    <Container>
      <Wrapper>
        <Title>ZALOGUJ SIĘ</Title>
        {/* <Form> */}
          <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="hasło" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleSubmit}>LOGIN</Button>
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}
          <Link to='/register'>STWÓRZ NOWE KONTO</Link>
        {/* </Form> */}
      </Wrapper>
    </Container>
  );
};

export default Login;
