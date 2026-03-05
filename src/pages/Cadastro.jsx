import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export function Cadastro () {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function cadastrar (e) 
    {
        e.preventDefault()

        await fetch('http://localhost:3020/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login,
                senha
            })
        })
        alert('usuario cadstrado')
        navigate('/')
    }

    return (
        <div>
            <h2>Novo Cadastro</h2>

            <form onSubmit={cadastrar}>
                <input 
                    placeholder="login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                /> <br /> <br />
                <input 
                    type="password"
                    placeholder="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                /> <br /> <br />
                <button type="submit">Cadastra</button>
            </form> <br />
            <Link to={'/'}>Login</Link>
        </div>
    )
}