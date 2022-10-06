
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  const clientes = [
    new Cliente('Wallace', 34, '1'),
    new Cliente('Wallace', 22, '2'),
    new Cliente('Wallace', 78, '3'),
    new Cliente('Wallace', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.id)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.id)
  }

  return (

    <div className={`
    flex justify-center items-center h-screen
     bg-gradient-to-r  from-purple-500 to-purple-800
    `}>
      <Layout titulo="Cadastro Simples" >
        {/* <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        /> */}

        <Formulario cliente={clientes[0]}></Formulario>

        {/* <div className='flex justify-end'>
          <Botao cor="green" className='mt-4'>Novo Cliente</Botao>
        </div> */}
      </Layout>
    </div>
  )
}