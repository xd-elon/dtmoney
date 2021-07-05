import Modal from 'react-modal';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadiusBox} from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  
  const [type, setType] = useState('deposit');
  
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

        <Container>
          <h2>cadastrar transação</h2>

          <input 
           placeholder="Titulo"
          />

          <input 
           type="number"
           placeholder="Valor"
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
             onClick={ () => { setType('withdraw'); }}
             isActive={type === 'withdraw'}
             activeColor="red"
            >
              <img src={outcome} alt="Saida" />
              <span>Saida</span>
            </RadiusBox>
            
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
          />

           <button type="submit">Cadastrar</button>
          </Container>
        </Modal>
    );
}