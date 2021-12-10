import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTrabsactionModal } from './components/NewTrabsactionModal';

import { GlobalStyle } from "./styles/global";
import { TransactionsProvaider } from '../src/hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {
  const [isNewTrasactionModalOpen,setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTrasactionModal(){
      setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal(){
      setIsNewTrasactionModalOpen(false);
  }

  return (
    <TransactionsProvaider>
      <Header onOpenNewTrasactionModal={handleOpenNewTrasactionModal}/>

      <Dashboard />

        <NewTrabsactionModal 
          isOpen={isNewTrasactionModalOpen} 
          onRequestClose={handleCloseNewTrasactionModal}
        />

      <GlobalStyle />
    </TransactionsProvaider>
  );
}

