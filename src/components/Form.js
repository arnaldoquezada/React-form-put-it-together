import React, { useState } from 'react';
import './components.scss';

const Form = () => {
    const [user, setUser] = useState({
        rut:'',
        fullName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    console.log(user)

    const setFormValues = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    return (
        <div className="form-container">
            <h1>Login</h1>
            <div className="card">
                <form action="">
                    <label htmlFor="">Rut</label>
                    <input type="text" placeholder="Ingresa tu rut" name="rut" value={user.rut} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Nombre completo</label>
                    <input type="text" placeholder="Ingresa tu nombre completo" name="fullName" value={user.fullName} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Correo electrónico</label>
                    <input type="text" placeholder="Ingresa tu correo" name="email" value={user.email} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Contraseña</label>
                    <input type="Password" placeholder="Contraseña" name="password" value={user.password} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Confirma contraseña</label>
                    <input type="Password" placeholder="Confirma contraseña" name="confirmPassword" value={user.confirmPassword} onChange={(e) => setFormValues(e)} />
                    <button type="submit">Login!</button>                
                </form>
                
            </div>
        </div>
    )
}
export default Form;