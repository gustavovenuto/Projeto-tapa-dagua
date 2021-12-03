import {useState} from 'react'

import './registro.css'

import api from '../services/api';

export default function Registrar() {
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telefone, setTelefone] = useState('');

    async function handleSubmit() { 
        const data = {
            usr_nome:nome, 
            usr_cpf:CPF, 
            usr_email:email,
            usr_password:password, 
            usr_telefone:telefone
        }   
        const response = await api.post('/users',data)

        if(nome !==''&&CPF!==''&&email!==''&&password!==''&&telefone!==''){
            if(response.status === 200){
                window.location.href="http://localhost:3000/"
            }else{
                alert('Erro no cadastro, confira suas informações')
            }
        }else {
            alert('Ops, preencha todos os dados!')
        }

    }

    return(
        <div className="formRegistro">
            <div className="topo">
                <h4>Cadastro de Usuário</h4>
            </div>
            <div className="insideRegistro">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="nome">Nome*</label>
                        <input 
                            required
                            class="form-control" 
                            type="text" 
                            id="Nome" 
                            name="nome"
                            placeholder="Nome" 
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                        </div>
                        <div class="form-group col-md-3">
                        <label for="sobrenome">CPF*</label>
                        <input 
                            required
                            class="form-control" 
                            type="text" 
                            id="CPF" 
                            name="CPF" 
                            placeholder="CPF" 
                            value={CPF}
                            onChange={e => setCPF(e.target.value)}
                        />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="celular">Celular*</label>
                            <input 
                                required
                                class="form-control" 
                                type="text" 
                                id="celular" 
                                placeholder="Celular" 
                                name="telefone" 
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Email*</label>
                        <input 
                            required
                            class="form-control" 
                            type="email" 
                            id="Email" 
                            name="email"
                            placeholder="Email"  
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Senha*</label>
                        <input 
                            required
                            class="form-control" 
                            type="password" 
                            id="inputPassword4" 
                            name="password"
                            placeholder="Senha" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        </div>
                    </div>
{/*                         <div class="form-group col-md-6">
                        <label for="fixo">Telefone</label>
                        <input type="text" class="form-control" id="fixo" placeholder="Telefone" />
                        </div> */}
{/*                     <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="CEP">CEP</label>
                            <input type="text" class="form-control" id="CEP"/>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="UF">UF</label>
                            <input type="text" class="form-control" id="UF"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="Cidade">Cidade</label>
                            <input type="text" class="form-control" id="Cidade"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="Endereço">Endereço</label>
                            <input type="text" class="form-control" id="Endereço"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="Bairro">Bairro</label>
                            <input type="text" class="form-control" id="Bairro"/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="Numero">Número</label>
                            <input type="text" class="form-control" id="Numero"/>
                        </div>
                      </div> */}
                    <div class="botao">
                        <button class="btn btn-primary" onClick={handleSubmit}>Registrar</button>   
                        <a href="."><button class="btn btn-danger">Voltar</button></a>
                    </div>
            </div>
        </div>
    )
}