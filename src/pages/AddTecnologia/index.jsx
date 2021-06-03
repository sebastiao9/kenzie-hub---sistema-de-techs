import { Container, Box, H2 } from './styleAddTecnologia'
import Menu from '../../components/Menu'
import kenzie from '../../config/img/academy.png'
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
import { toast } from 'react-toastify'
import axios from 'axios'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const AddTecnologia = ({auth}) =>{

    const [ nivel, setNivel ] = useState({
        html: '', css: '', javascript: '', react: '', redux: '',
        python: '', flask: '', django: '', sql: '', si: '',
        scrum: '', figma: '', git: '', gitlab: '', linux: ''
    })

    const localToken = JSON.parse(localStorage.getItem('token')) 
    
    const handleAdd = (tec) =>{

        const data = {
            title: tec,
            status: 
            
              tec === 'html' ? nivel.html 
            : tec === 'css' ? nivel.css 
            : tec === 'javascript' ? nivel.javascript
            : tec === 'react' ? nivel.react
            : tec === 'redux' ? nivel.redux
            : tec === 'python' ? nivel.python
            : tec === 'flask' ? nivel.flask
            : tec === 'django' ? nivel.django
            : tec === 'si' ? nivel.si
            : tec === 'sql' ? nivel.sql
            : tec === 'git' ? nivel.git
            : tec === 'gitlab' ? nivel.gitlab
            : tec === 'scrum' ? nivel.scrum
            : tec === 'linux' ? nivel.linux
            : nivel.figma
        }

        handelTecnologia(data)
    }
    
    const handelTecnologia = (data) => {
        axios.post("https://kenziehub.me/users/techs", data, {
            headers:{
                Authorization: `Bearer ${localToken}`
            }
        })
        .then((response) => {
            toast.info('Tecnologia Cadastrada!')
        })
        .catch((e) => {
            if(e.response.status === 401){
                toast.error('Tecnologia já cadastrada')  
            }
             if(e.response.status === 400){
                toast.error('Selecione um nível')  
            }
            
        });
    };
    if(!auth){
        toast.error('Não tente acessar pela URL !!! ')
        return <Redirect to='/' />
    }

    return(
        <>
        <Menu />
        <H2> O que voce Aprendeu ? <Link to="tecnologias"> Listar </Link></H2>
        <Container>
            <img src={kenzie} alt="Kenzie Academy" />
            <section>
                <Box>
                    <h2> Front-End </h2>
                    <div className="stack">
                        <label> HTML 5 </label>
                        <img src={html} alt="HTML 5" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.html = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('html')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> CSS 3 </label>
                        <img src={css} alt="CSS 3" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.css = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('css')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> JavaScript </label>
                        <img src={javascript} alt="JavaScript" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.javascript = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('javascript')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> React </label>
                        <img src={react} alt="ReactJs" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.react = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('react')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> Redux </label>
                        <img src={redux} alt="Redux" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.redux = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('redux')}> Adicionar </button>
                    </div> 
                </Box>
                <Box>
                    <h2> Back-End </h2>
                    <div className="stack">
                        <label> Python </label>
                        <img src={python} alt="Python" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.python = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('python')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> Flask </label>
                        <img src={flask} alt="Flask"/>
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.flask = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('flask')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> Django </label>
                        <img src={django} alt="Django" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.django = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('django')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> SQL </label>
                        <img src={sql} alt="SQL" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.sql = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('sql')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> Cyber Security </label>
                        <img src={si} alt="Cyber Security" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.si = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('si')}> Adicionar </button>
                    </div> 
                </Box>
                <Box>
                    <h2> Ferramentas </h2>
                    <div className="stack">
                        <label> Scrum Agile </label>
                        <img src={scrum} alt="Scrum Agile" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.scrum = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('scrum')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> Git </label>
                        <img src={git} alt="GIT" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.git = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('git')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> GitLab </label>
                        <img src={gitlab} alt="GitLab" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.gitlab = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('gitlab')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> Linux </label>
                        <img src={linux} alt="Linux" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.linux = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('linux')}> Adicionar </button>
                    </div> 
                    <div className="stack">
                        <label> Figma </label>
                        <img src={figma} alt="Figma" />
                        <select required  onChange={e=>{
                            const currentNivel = nivel
                            currentNivel.figma = e.target.value
                            setNivel(currentNivel)
                        }}>
                            <option value="" disabled selected> Nível </option>
                            <option value="Iniciante"> Iniciante </option>
                            <option value="Básico"> Básico </option>
                            <option value="Intermediário"> Intermediario </option>
                            <option value="Avançado"> Avançado </option>
                            <option value="Especialista"> Especialista </option>
                        </select>
                        <button onClick={()=> handleAdd('figma')}> Adicionar </button>
                    </div> 
                </Box>
            </section>
            <Link to="/tecnologias"> Listar Cadastrados </Link>
        </Container>
        </>
    )
}
export default AddTecnologia