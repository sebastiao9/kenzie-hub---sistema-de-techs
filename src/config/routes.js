import { Route, Switch } from 'react-router-dom'
import Cadastro from '../pages/Cadastro'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Tecnologias from '../pages/Tecnologias'
import AddTecnologia from '../pages/AddTecnologia'

import { useEffect, useState } from 'react'

const Routes = () =>{

    const [ auth, setAuth ] = useState(false)

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('token'))
        
        if(token){
            return setAuth(true)
        }
        else{
            return setAuth(false)
        }
    },[auth])

    return(
        <Switch>  
            <Route exact path="/">
                <Login auth={auth} setAuth={setAuth} />
            </Route>
            <Route exact path="/cadastrar">
                <Cadastro />
            </Route>
            <Route exact path="/home">
                <Home auth={auth} />
            </Route>
            <Route exact path="/tecnologias">
                <Tecnologias auth={auth} />
            </Route>
            <Route exact path="/adicionar-tecnologia">
                <AddTecnologia auth={auth} />
            </Route>
            <Route exact path="*">
                <Error404 />
            </Route>
       </Switch>
    )
}
export default Routes