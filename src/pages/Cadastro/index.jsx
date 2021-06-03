import img from '../../config/img/kenzie.png'
import { Container, Formulario } from './styleCadastro'
import { GiPlasticDuck } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { toast } from 'react-toastify'
import axios from 'axios'

const Cadastro = () => {

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    axios.post("https://kenziehub.me/users", data)
      .then((response) => {
        reset();
        history.push("/");
        toast.info(' Cadastrado com Sucesso :)' )
      })
      .catch((e) => {
        toast.error('E-Mail já existe')
      });
  };
  
    return (
      <Container>

        <img src={img} alt="kenzie" />

        <Formulario onSubmit={handleSubmit(handleForm)}>

          <h2> <GiPlasticDuck size={25} color="yellow" /> Register </h2>
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
                margin="normal"
                variant="filled"
                label="Nome"
                name="name"
                size="small"
                color="primary"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </div>
            <div>
              <TextField
                margin="normal"
                variant="filled"
                label="Bio"
                size="small"
                color="primary"
                {...register("bio")}
                error={!!errors.bio}
                helperText={errors.bio?.message}
              />
            </div>
            <div>
              <TextField
                margin="normal"
                variant="filled"
                label="Contato"
                size="small"
                color="primary"
                {...register("contact")}
                error={!!errors.contact}
                helperText={errors.contact?.message}
              />
            </div>
            <div>
              <select required
                {...register("course_module")}
                error={!!errors.course_module}
                helperText={errors.course_module?.message}>

                <option value="" disabled selected> Modulo </option>
                <option value="Q1 - Introdução ao Frontend">Q1-Introdução Frontend</option>
                <option value="Q2 - Frontend Avançado">Q2-Frontend Avançado</option>
                <option value="Q3 - Introdução ao Backend">Q3-Introdução Backend</option>
                <option value="Q4 - Backend Avançado"> Q4-Backend Avançado</option>
              </select>
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
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
      
              <button type="submit"> Register </button>
              <p> already have an account? <Link to="/" className="register"> Login </Link> </p>
        </Formulario>
      </Container>
    );
  };
  
  export default Cadastro;
  