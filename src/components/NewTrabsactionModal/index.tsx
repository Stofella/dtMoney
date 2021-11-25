import Modal from 'react-modal';

interface NewTrabsactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrabsactionModal({isOpen, onRequestClose}: NewTrabsactionModalProps){
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    );
}