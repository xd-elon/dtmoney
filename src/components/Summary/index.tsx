import { useContext } from 'react';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionsContext';

import { Container} from './styles';

export function Summary() {

    const transactions = useContext(TransactionContext);

    console.log(transactions)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas"  />
                </header>
                <strong>R$1000,00</strong>      
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="saidas"  />
                </header>
                <strong>-R$100,00</strong>      
            </div>

            <div className="highlight-background ">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total"  />
                </header>
                <strong>R$900,00</strong>      
            </div>

        </Container>
    )
}