import { Container, Formulario } from './styleLogin'
import tela from '../../config/img/kenzie.png'
import { GiPlasticDuck } from 'react-icons/gi'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import axios from 'axios'
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

const Login = ({setAuth}) =>{

    const history = useHistory()

    const schema = yup.object().shape({ 
        email: yup.string().email('E-Mail inválido'),
        password: yup.string()
    })

    const { 
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handleForm = (data) => {
        axios.post("https://kenziehub.me/sessions", data)        
            .then((response) => {
                localStorage.setItem("token", JSON.stringify(response.data.token));
                setAuth(true)
                history.push("/home");
                toast.info('Seja bem Vindo :)')
            })
            .catch(e=>{
                toast.error('Email ou senha incorretos')
            })
    }

    return(
       <Container>
           <img src={tela} alt="kenzie academy"  />

           <Formulario onSubmit={handleSubmit(handleForm)}>
               <h2> <GiPlasticDuck size={25} color="yellow" /> Login </h2>   

               <div>
                    <TextField
                    required
                    margin="normal"
                    variant="filled"
                    label="Email"
                    size="small"
                    color="primary"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    />
                </div>
                
                <div>
                    <TextField
                    type="password"
                    margin="normal"
                    variant="filled"
                    label="Senha"
                    size="small"
                    color="primary"
                    {...register("password")}
                    
                    />
                </div>
               <button type="submit"> Logar </button>
               <p> already have an account? <Link to="/cadastrar" className="register"> Register </Link> </p>
           </Formulario>
       </Container>
    )
}
export default Login