import { TransactionTable } from "../TransactionTable"
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Dashboard () {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}