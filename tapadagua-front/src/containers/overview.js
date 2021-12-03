import axios from 'axios';
import { useState } from 'react';

import './registro.css'
import UserPainel from './userpainel'



export default function Overview() {
    const [cod, setCod] = useState('');

    const [obs, setObs] = useState('');
    const [data, setData] = useState('');
    const [status, setStatus] = useState('');

    async function handleSubmit() { 
        const codig = cod
           
        const response = await axios.get(
            `http://localhost:3308/denuncias/${codig}`, {params: {codigo:codig}})
        console.log(response.data)

        const responseD = Array.from(response.data)

        for (const obj of responseD) {
            setObs(obj.observacao)
            setData(obj.createdAt)
            setStatus(obj.status_den)
        }        
    }

/*         if(cod !==''){
            if(response.status === 200){
                
            }else{
                alert('Erro no cadastro, confira suas informações')
            }
        }else {
            alert('Ops, preencha o código!')
        }
 */
    


    return(
        <>
        <div>
            <UserPainel/>
        </div>
        <div className="formRegistro">
            <div className="topo">
                <h4>Pesquisar Denúncia</h4>
            </div>
            <div className="insideOver">
                <div className="denun">
                    <div class="form-group col-md-7">
                        <input 
                            required
                            class="form-control" 
                            type="text" 
                            id="cod" 
                            name="cod"
                            placeholder="Digite o número do protocolo" 
                            value={cod}
                            onChange={e => setCod(e.target.value)}
                        />
                    <button class="btn btn-primary" onClick={handleSubmit}>Pesquisar</button>  
                    </div>
                </div>
                    <div class="input-group">
                    <div class="form-group col-md-4">
                        <input 
                            required
                            autoComplete
                            disabled
                            class="form-control" 
                            type="text"  
                            id="status"
                            placeholder="" 
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        />
                        <input 
                            required
                            autoComplete
                            disabled
                            class="form-control" 
                            type="text"  
                            id="date"
                            placeholder="" 
                            value={data}
                            onChange={e => setData(e.target.value)}
                        />
                    </div>
                        <textarea disabled class="form-control" id="descR" rows="4" maxLength="80" value={obs} onChange={e => setObs(e.target.value)}/>
                    </div>
            </div>
        </div> 
        </>
    )
}
