import { useEffect, useState } from "react";
import Menu from '../../components/Menu'
import axios from "axios";
import { Container } from './styleHome'
import kenzie from '../../config/img/academy.png'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = ({auth}) => {
  const [user, setUser] = useState({});

  const history = useHistory()

  const [ token ] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  useEffect(() => {
    axios
      .get("https://kenziehub.me/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((e) => console.log(e));
  }, [token]);

  if(!auth){
    toast.error('Não tente acessar pela URL !!! ')
    history.push('/') 
  }
  return(
      <>
        <Menu />
        <Container>
            <img src={kenzie} alt="Kenzie Academy" />
            <section>
                <div className="box"> 
                    <h2> {user.name} </h2>
                    <h1> {user.bio} </h1>
                </div>
                <div className="box"> 
                    <h2> Module </h2>
                    <h1>{user.course_module} </h1>
                </div>
                <div className="box"> 
                    <h2> Contact </h2>
                    <h1> {user.email} </h1>
                    <h1> {user.contact} </h1>
                </div>
                <div className="box"> 
                    <Link to="/tecnologias"> Minhas Stacks </Link>
                </div>
            </section>
        </Container>
      </>
  );
};

export default Home;

