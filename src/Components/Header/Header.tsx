import { NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header({name, redirectTo, location}: {name: string, redirectTo: string, location?: string}) {

    return(
        <header className='header'>
            <NavLink className={`header__link ${location === '/' ? 'visibility_hidden' : ''}`} to={redirectTo}/>
            <h2 className='header__name'>{name}</h2>
        </header>
    )
}