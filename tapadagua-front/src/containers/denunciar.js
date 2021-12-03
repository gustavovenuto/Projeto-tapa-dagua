import { useState } from 'react';
import './registro.css'
import UserPainel from './userpainel'

import api from '../services/api';

export default function Denunciar() {
    const [CEP, setCEP] = useState('');
    const [UF, setUF] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [referencia, setReferencia] = useState('');
    const [obs, setObs] = useState('');

    async function handleSubmit() { 
        const dataEnd = {
            cep:CEP,  
            rua:endereco, 
            cidade:cidade,
            bairro:bairro,
            ponto_referencia:referencia,
        }   
        
        const dataDen = {
            observacao:obs,
            nro_protocolo:Math.floor(Math.random()*10000)
        }

        const response = await api.post('/enderecos',dataEnd)
        const responseDen = await api.post('/denuncias',dataDen)
            

            if(CEP !==''&&cidade!==''&&endereco!==''&&bairro!==''){
            if(response.status === 200 && responseDen.status === 200){

                alert(`Seu protocolo é: ${dataDen.nro_protocolo}`)

                window.location.href=""
            }else{
                alert('Erro no cadastro, confira as informações')
            }
        }else {
            alert('Ops, preencha todos os dados!')
        }

    }
    function checkCEP() {
        fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        .then(res => res.json()).then(data => {
            console.log(data)

            setEndereco(data.logradouro)
            setBairro(data.bairro)
            setCidade(data.localidade)
            setUF(data.uf)
        });
    }


    return(
        <>
        <div>
            <UserPainel/>
        </div>
        <div className="formDenuncia">
            <div className="topo">
                <h4>Cadastro de Denúncia</h4>
            </div>
            <div className="insideRegistro">
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="CEP">CEP</label>
                        <input autoComplete="off" type="text" class="form-control" id="CEP" name="cep" value={CEP} onChange={e => setCEP(e.target.value)} onBlur={checkCEP}/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="UF">UF</label>
                        <input autoComplete="off" type="text" class="form-control" id="UF" name="uf" value={UF} onChange={e => setUF(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Cidade">Cidade</label>
                        <input autoComplete="off" type="text" class="form-control" id="Cidade" name="cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="Endereço">Endereço</label>
                        <input autoComplete="off" type="text" class="form-control" id="Endereço" name="endereco" value={endereco} onChange={e => setEndereco(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="Bairro">Bairro</label>
                        <input autoComplete="off" type="text" class="form-control" id="Bairro" name="bairro" value={bairro} onChange={e => setBairro(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="pontoRef">Ponto de Referência</label>
                        <input autoComplete="off" type="text" class="form-control" id="pontoRef" name="pontoRef" value={referencia} onChange={e => setReferencia(e.target.value)}/>
                    </div>
                </div>
                <div class="input-group">
                    <textarea class="form-control" id="desc" placeholder="Descreva o que está acontencendo" rows="4" maxLength="80" value={obs} onChange={e => setObs(e.target.value)}/>
                </div>
                <div class="botao">
                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Registrar Denúncia</button>
                </div>
            </div>
        </div>
        </>
    )
}
