import React, { useState } from 'react';

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
        } else if (tipo === 'normal') {
            setNormais([...normais, novaAtividade]);
        }

        
        setTexto('');
        setTipo('');
    };

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
                        <option value="">-- Selecione o Tipo --</option>
                        <option value="urgente">Urgente</option>
                        <option value="normal">Normal</option>
                    </select>
                </div>

                
                {erro && <p style={{ color: 'red' }}>{erro}</p>}

                <button type="submit">Adicionar</button>
            </form>

            <hr />

            
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                
                <div>
                    <h3>Urgentes</h3>
                    <ol>
                        {urgentes.map((atividade, index) => (
                            <li key={index}>{atividade}</li>
                        ))}
                    </ol>
                </div>

                
                <div>
                    <h3>Normais</h3>
                    <ul>
                        {normais.map((atividade, index) => (
                            <li key={index}>{atividade}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GerenciadorAtividadesSimples;