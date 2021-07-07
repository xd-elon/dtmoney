import { createContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionsProvider() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionContext.Provider value={transactions}>

        </TransactionContext.Provider>
    );
}