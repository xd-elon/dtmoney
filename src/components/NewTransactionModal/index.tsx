import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';
import { TransactionContext } from '../../TransactionsContext';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadiusBox} from './styles';



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext)

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

   await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('')
    setType('deposit');
    onRequestClose();
  }
  
  return (
      <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >     

        <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt=""/>
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input 
           placeholder="Titulo"
           value={title}
           onChange={ event => setTitle(event.target.value)}
          />

          <input 
           type="number"
           placeholder="Valor"
           value={amount}
           onChange={ event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadiusBox
             type="button"
             onClick={ () => { setType('deposit'); }}
             isActive={type === 'deposit'}
             activeColor="green"
            >
              <img src={income} alt="Entrada" />
              <span>Entrada</span>
            </RadiusBox>

            <RadiusBox
             type="button"
             onClick={() => { setType('withdraw'); }}
             isActive={type === 'withdraw'}
             activeColor="red"
            >
              <img src={outcome} alt="Saida" />
              <span>Saida</span>
            </RadiusBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
            value={category}
            onChange={ event => setCategory(event.target.value)}
          />

           <button type="submit">Cadastrar</button>
          </Container>
        </Modal>
    );
}