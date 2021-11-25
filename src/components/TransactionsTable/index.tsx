import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable (){

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    },[]);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categotia</th>   
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimernto de título website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimernto</td>
                        <td>25/11/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Casa</td>
                        <td>15/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}