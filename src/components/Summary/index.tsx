import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container} from './styles';

export function Summary() {
    return (
        <Container>
            <div>
                <header>Entradas</header>
                <img src={incomeImg} alt="entradas"  />
            </div>
            <strong>R$1000,00</strong>

            <div>
                <header>Saidas</header>
                <img src={outcomeImg} alt="entradas"  />
            </div>
            <strong> - R$5000,00</strong>

            <div>
                <header>Entradas</header>
                <img src={incomeImg} alt="entradas"  />
            </div>
            <strong>R$1000,00</strong>
        </Container>
    )
}