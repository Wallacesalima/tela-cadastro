
import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Wallace', 34, '1'),
    new Cliente('Wallace', 22, '2'),
  new Cliente('Wallace', 78, '3'),
    new Cliente('Wallace', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.id)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
  }

  return (

    <div className={`
    flex justify-center items-center h-screen 
     bg-gradient-to-r  from-purple-500 to-purple-800
    `}>
      <Layout titulo="Cadastro Simples" >

        {visivel === 'tabela' ? (
          <>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
            <div className='flex justify-end'>
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
            clientemudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}

      </Layout>
    </div>
  )
}