import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function hanldeOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleClosedNewTransactionModal () {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={hanldeOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleClosedNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

