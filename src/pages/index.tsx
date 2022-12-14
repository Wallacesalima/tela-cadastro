
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (

    <div className={`

    flex justify-center items-center h-screen overflow-auto
     bg-gradient-to-r  from-purple-500 to-purple-800
    `}>
      <Layout titulo="Cadastro Simples" >
        {tabelaVisivel ? (
          <>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
            <div className='flex justify-center md:justify-end'>
              <Botao cor="green" className='mt-4'
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}

      </Layout>
    </div>
  )
}