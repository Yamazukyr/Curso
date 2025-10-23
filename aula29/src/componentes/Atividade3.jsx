//crie um formulário com um campo de input para o texto da atividade e um select o tipo da atividade (normal ou urgente)
// as atividades urgentes deverão ser mostradas em uma ol e as normais em um ul
//ao ser enviado o formulário deverá validar se existe texto para a atividade e se o select foi preenchido
//após o envio, limpar todos os valores dos campos relacionados aos inputs da atividade e do select

//atividadesUrgentes = ['revisar js']
//atividadesNormais = ['revisar html', 'revisar css']

//3) Faça uma adaptação no componente da atividade 2. Os componentes que renderizam as listas ( normais e importantes) só deverão ser mostrados na tela se o tamanho da lista for maior que zero.
//utilize a condicional que você mais estiver adaptado ( if/else if/else ou operador ternário)
import React, { useState } from 'react';

function Atividade3() {

    const GerenciadorAtividadesSimples = () => {

    const [urgentes, setUrgentes] = useState(['revisar js']);
    const [normais, setNormais] = useState(['revisar html', 'revisar css']);        
    const [texto, setTexto] = useState('');
    const [tipo, setTipo] = useState('');
    const [erro, setErro] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!texto.trim()) {
            setErro('O texto da atividade é obrigatório!');
            return;
        }
        if (!tipo) {
            setErro('O tipo da atividade é obrigatório!');
            return;
        }
        setErro(''); 
        const novaAtividade = texto.trim();
        if (tipo === 'urgente') {
            setUrgentes([...urgentes, novaAtividade]);
        }
        else if (tipo === 'normal') {
            setNormais([...normais, novaAtividade]);
        }   
        setTexto('');
        setTipo('');
    }
        return (

            <div>
                <h1>Gerenciador de Atividades</h1>
                <form onSubmit={handleSubmit}>  
                    <h2>Nova Atividade</h2>
                    <div>
                        <label htmlFor="texto">Atividade:</label>
                        <input
                        type="text"
                        id="texto"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        placeholder="Descreva a atividade..."
                        />
                    </div>
                    <div>
                        <label htmlFor="tipo">Tipo:</label>
                        <select
                        id="tipo"
                        value={tipo}    
                        onChange={(e) => setTipo(e.target.value)}
                        >
                            <option value="">Selecione o tipo</option>
                            <option value="urgente">Urgente</option>
                            <option value="normal">Normal</option>
                        </select>
                    </div>
                    {erro && <p style={{ color: 'red' }}>{erro}</p>}
                    <button type="submit">Adicionar</button>
                </form>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {urgentes.length > 0 && (
                <div>
                    <h3>Urgentes</h3>   
                    <ol>
                        {urgentes.map((atividade, index) => (
                            <li key={index}>{atividade}</li>
                        ))}
                    </ol>
                </div>
                )}
                {normais.length > 0 && (
                <div>
                    <h3>Normais</h3>
                    <ul>
                        {normais.map((atividade, index) => (
                            <li key={index}>{atividade}</li>
                        ))}
                    </ul>
                </div>
                )}
            </div>

        </div>
        )
    }
}
export default Atividade3
