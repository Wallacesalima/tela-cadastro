
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
  
  return (

    <div className={`
    flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-purple-800  
    `}>
        <Layout titulo="Cadastro Simples" >
          <Tabela clientes={clientes}></Tabela>
        </Layout>
    </div>
  )
}