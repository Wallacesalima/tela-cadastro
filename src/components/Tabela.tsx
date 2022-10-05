import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3 ">Código</th>
                <th className="text-left p-3 ">Nome</th>
                <th className="text-left p-3 ">Idade</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((Cliente, i) => {
            return (
                <tr key={Cliente.id}
                className={`${i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'}`}>

                    <td className="text-left p-3">{Cliente.id}</td>
                    <td className="text-left p-3">{Cliente.nome}</td>
                    <td className="text-left p-3">{Cliente.idade}</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-white
            bg-gradient-to-r from-purple-500 to-purple-800   
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}