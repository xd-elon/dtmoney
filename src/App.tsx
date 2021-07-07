import React, {useState} from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContext } from "./TransactionsContext";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
      api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function hanldeOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleClosedNewTransactionModal () {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionContext.Provider value={[transactions]}>
      <Header onOpenNewTransactionModal={hanldeOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleClosedNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionContext.Provider>
  );
}

