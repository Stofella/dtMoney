import { createContext, useEffect, useState , ReactNode, useContext} from 'react'
import { api } from '../services/api';

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}


// metodo Pick pega apenas as infos que tu pedir
// metodo omit pega todas as opções da uma interface menos as que tu colocar
type TransactionInput = Omit<Transaction,'id' | 'createdAt'>


interface TransactionsProvaiderProps{
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: ( transaction: TransactionInput ) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvaider( {children}: TransactionsProvaiderProps ) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    },[]);

    async function createTransaction(transactionInput : TransactionInput){       
        const respose = await api.post('/transactions', {
            ...transactionInput,
            createdAt : new Date(),
        })

        const { transaction } = respose.data;
      
        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return(
        <TransactionsContext.Provider value={{ transactions , createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context;
}