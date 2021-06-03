import { Container } from './styleDeletar'

const Deletar = ({sim, nao}) =>{
    return(
        <Container>
            <div className='box'>
                <h2> Deseja Deletar ? </h2>
                <div>
                    <button onClick={sim}> Sim </button>
                    <button onClickCapture={nao}> Não </button>
                </div>
            </div>
        </Container>
    )
}
export default Deletar