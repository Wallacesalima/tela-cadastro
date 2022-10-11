import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3  ">Código</th>
                <th className="text-left p-3 ">Nome</th>
                <th className="text-left p-3 ">Idade</th>
                {exibirAcoes ? <th className=" p-3 ">Ações</th> : false}
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
                    {exibirAcoes ? renderizarAcoes(Cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">

                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                flex justify-center items-center first-letter
                text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
                `}>
                        {IconeEdicao}
                    </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                flex justify-center items-center first-letter
                text-red-500 rounded-full p-2 m-1
                hover:bg-purple-50
                `}>
                        {IconeLixo}
                    </button>
                ) : false}

            </td>
        )
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