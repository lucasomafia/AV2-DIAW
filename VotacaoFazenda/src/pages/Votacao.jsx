import { Link } from 'react-router-dom';
import { listarNaRoca, listarForaDaRoca, registrarVoto } from '../services/votacaoService';
import CardParticipantes from '../components/CardParticipantes';
import { useState } from 'react';

function Votacao() {
    const [ultimoVoto, SeuUltimovoto] = useState(null);
    const[votoNaSessao, SetVotosNaSessao] = useState(0)
    return (
        <>
        {listarNaRoca.map((p) =>
        <CardParticipantes key={p.id}
        participante={p}
        onVotar={handleVotar} />
        )}

        </>
    );
}

export default Votacao;
