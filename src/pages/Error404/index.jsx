import { Error } from './styleError404.js'
import perdido from '../../config/img/perdido.gif'
import { Link } from 'react-router-dom'
const Error404 = () =>{
    return(
       <Error>
           <h2> ERROR 404 - NOT FOUND </h2>
           <img src={perdido} alt='perdidao' />
           <div>
               <Link to='/'> Login </Link>
               <Link to='cadastrar'> Register </Link>
           </div>
       </Error>
    )
}
export default Error404