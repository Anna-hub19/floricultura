import './email.css'
import React, { useState } from 'react'

const Email = () => {
    
 
const [form, setForm] = useState({})
const [erros, setErros] = useState({})

    
    return(
       
        <form className='form' action="/" onChange={e => handle(e) } onSubmit={e => aoSalvar(e)} >
        <div className='fieldGroup'>
            <input name='name' type="email" placeholder='Insira seu E-mail' />
            <button className='assinar'>
                Assinar Newsletter
            </button>
        </div>
            {erros.name && <p className='error-input'>{erros.name}</p>}

    </form>
   
    )
    
function handle(event){
    setForm(
        {
            ...form,
            [event.target.name] : event.target.value
        }
    )
    }
    function aoSalvar(evento){
        evento.preventDefault()
        setErros(valida(form))
    }
    
    function valida() {
        let erros = {};
        if (!form.name) {
            erros.name = "*preencha o campo"
        }
        return erros
    }
   
}

export default Email