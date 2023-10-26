import { Link } from 'react-router-dom'
import './AuthTemplate.scss'
import { MouseEvent, useState } from 'react'
import { regExpEmail } from '../../utils/consts';




export default function AuthTemplate({location}: {location: string}) {
    
    const [signinEmail, setSigninEmail] = useState('');
    const [signinPassword, setSigninPassword] = useState('');
    const [recoveryEmail, setRecoveryEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    function handleSigninEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setSigninEmail(e.target.value)
    }
    function handleSigninPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setSigninPassword(e.target.value)
    }
    function handleRecoveryEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setRecoveryEmail(e.target.value)
    }
    function handleNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setNewPassword(e.target.value)
    }
    function handleRepeatNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setRepeatNewPassword(e.target.value)
    }


    function signinSubmit(e: MouseEvent) {
        e.preventDefault()
    }
    function recoverySubmit(e: MouseEvent) {
        e.preventDefault()
    }
    function newPasswordSubmit(e: MouseEvent) {
        e.preventDefault()
    }
    
    return(
        <section className='auth'>
            <form className='auth__form' name='auth'>
                <div className='auth__wrapper'>
                    <img className='auth__image' src='images/logo.svg' alt='Городская газовая служба'/>
                    <h2 className='auth__title'>{location === '/signin' ? 'Вход' : location === '/recovery' ? 'Восстановление пароля' : location === '/new-password' && 'Новый пароль'}</h2>
                    {
                        location === '/signin' ?
                        <>
                            <p className='auth__text'>Логин / Email</p>
                            <input  className='auth__input user' placeholder='name@ggs-service.ru' type='email' onChange={handleSigninEmail} required/>
                            <p className='auth__text'>Пароль</p>
                            <input className='auth__input password' placeholder='Пароль' type='password' onChange={handleSigninPassword} minLength={8} required/>
                            <button className='auth__submit' type='submit' onClick={signinSubmit} disabled={!regExpEmail.test(signinEmail) || signinPassword.length < 8}>Войти</button>
                            <Link className='auth__link' to='/recovery'>Забыли пароль?</Link>
                        </> : location === '/recovery' ?
                        <>
                            <p className='auth__text' >Укажите свой email и мы пришлем ссылку для создания нового пароля</p>
                            <p className='auth__text'>Логин / Email</p>
                            <input className='auth__input user' type='email' onChange={handleRecoveryEmail} required/>
                            <button className='auth__submit' type='submit' onClick={recoverySubmit} disabled={!regExpEmail.test(recoveryEmail)}>Восстановить</button>
                        </> : location === '/new-password' &&
                        <>
                            <p className='auth__text'>Укажите новый пароль для пользователя *****@gmail.com</p>
                            <p className='auth__text'>Пароль</p>
                            <input className='auth__input password' type='password' minLength={8} onChange={handleNewPassword} required/>
                            <p className='auth__text'>Подтверждение пароля</p>
                            <input className='auth__input password' type='password' minLength={8} onChange={handleRepeatNewPassword} required/>
                            <button className='auth__submit' type='submit' onClick={newPasswordSubmit} disabled={newPassword.length < 8 || repeatNewPassword.length < 8 || newPassword !== repeatNewPassword}>Сохранить</button>
                        </>
                    }
                </div>
            </form>
        </section>
    )
}