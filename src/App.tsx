import React, {useState} from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function hanldeOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleClosedNewTransactionModal () {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={hanldeOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleClosedNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

