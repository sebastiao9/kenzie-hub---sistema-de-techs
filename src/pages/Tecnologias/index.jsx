import Menu from '../../components/Menu'
import kenzie from '../../config/img/academy.png'
import { Container, BoxContainer, H2, ContainerListar, Box } from './styleTecnologias'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import html from '../../config/img/html.png'
import css from '../../config/img/css.png'
import javascript from '../../config/img/javascript.png'
import react from '../../config/img/react.png'
import redux from '../../config/img/redux.png'
import python from '../../config/img/python.png'
import flask from '../../config/img/flask.png'
import django from '../../config/img/django.png'
import sql from '../../config/img/sql.png'
import si from '../../config/img/si.jpg'
import git from '../../config/img/git.png'
import gitlab from '../../config/img/gitlab.png'
import figma from '../../config/img/figma.png'
import scrum from '../../config/img/scrum.jpeg'
import linux from '../../config/img/linux.png'
import { AiFillDelete } from 'react-icons/ai'
import Deletar from '../../components/Deletar'

const Tecnologias = () =>{

    const [ tech, setTech ] = useState({})
    const [ token ] = useState(JSON.parse(localStorage.getItem('token')) || "")
    const [ deletar, setDeletar ] = useState(false)
    const [ idTech, setIdTech ] = useState('')

    useEffect(() => {
        axios.get("https://kenziehub.me/profile", {
            headers: {Authorization:  `Bearer ${token}` },
        })
        .then((response) => {
            setTech(response.data)
        })
        .catch((e) => console.log(e));

    }, [token]);

    const confirmarDelete = (id) =>{
        axios.delete(`https://kenziehub.me/users/techs/${id}`, {
            headers: {Authorization:  `Bearer ${token}` }
        })
        .then(()=>{ 
            window.location.reload()
        })
        .catch((e)=>{
            console.log(e)
        })   
    }    

    const deleteTech = (id) =>{
        setDeletar(true)
        setIdTech(id)  
    } 
    const naoDeletar  = () =>{
        setDeletar(false)
    } 

    return(
        <>  
            <Menu />
            {
                deletar &&
                <Deletar sim={() =>confirmarDelete(idTech)} nao={naoDeletar} />
            }
            
            <H2> <span> Suas Stacks </span>  <Link to="/adicionar-tecnologia"> Adicionar mais </Link></H2>
            <Container>
                <img className="capa" src={kenzie} alt="Kenzie Academy" />
                <BoxContainer>
                    
                    <ContainerListar>
                        <h2 className="titulo"> Front-end </h2>

                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'html' &&
                            <Box key={index}>
                                <img src={html} alt='HTML 5' />
                                <h2> HTML 5 -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button> 
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'css' &&
                            <Box key={index}>
                                <img src={css} alt='CSS 3' />
                                <h2> CSS 3 -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>                  </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'javascript' &&
                            <Box key={index}>
                                <img src={javascript} alt='JavaScript' />
                                <h2> JavaScript -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'react' &&
                            <Box key={index}>
                                <img src={react} alt='React' />
                                <h2> React -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'redux' &&
                            <Box key={index}>
                                <img src={redux} alt='Redux' />
                                <h2> Redux -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                    </ContainerListar>
                    <ContainerListar>
                        <h2 className="titulo"> Back-end </h2>

                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'python' &&
                            <Box key={index}>
                                <img src={python} alt='Python' />
                                <h2> Python -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'flask' &&
                            <Box key={index}>
                                <img src={flask} alt='Flask' />
                                <h2> Flask -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'django' &&
                            <Box key={index}>
                                <img src={django} alt='Django' />
                                <h2> Django -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'sql' &&
                            <Box key={index}>
                                <img src={sql} alt='SQL' />
                                <h2> SQL -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'si' &&
                            <Box key={index}>
                                <img src={si} alt='Redux' />
                                <h2> Cyber Security -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                    </ContainerListar>
                    <ContainerListar>
                        <h2 className="titulo"> Ferramentas </h2>

                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'git' &&
                            <Box key={index}>
                                <img src={git} alt='Git' />
                                <h2> GIT -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'gitlab' &&
                            <Box key={index}>
                                <img src={gitlab} alt='CSS 3' />
                                <h2> GitLab -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'linux' &&
                            <Box key={index}>
                                <img src={linux} alt='JavaScript' />
                                <h2> Linux -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'scrum' &&
                            <Box key={index}>
                                <img src={scrum} alt='React' />
                                <h2> SCRUM -  {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                        {tech.techs && tech.techs.map((item, index) => (
                            item.title === 'figma' &&
                            <Box key={index}>
                                <img src={figma} alt='Redux' />
                                <h2> Figma - {item.status} </h2>
                                <button onClick={() =>deleteTech(item.id)}> <AiFillDelete size={23} /> </button>
                            </Box>
                        ))}
                    </ContainerListar>
                </BoxContainer>
                        <Link to="/adicionar-tecnologia"> Adicionar Tecnologias </Link>
            </Container>
        </>      
    )
}
export default Tecnologias