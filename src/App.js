import Routes from './config/routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './config/styleGlobal'

const App = () =>{
  return(
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </>
  )
}
export default App
