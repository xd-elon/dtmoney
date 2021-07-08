import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    function createTransaction(transaction: Transaction) {
 
        api.post('/transactions', transaction)
    }

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionContext.Provider value={transactions}>
            { children }
        </TransactionContext.Provider>
    );
}