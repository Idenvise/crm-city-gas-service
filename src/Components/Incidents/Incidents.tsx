import { useState, MouseEvent, useEffect, ButtonHTMLAttributes } from 'react'
import Header from '../Header/Header'
import './Incidents.scss'
import { incidentsDefault } from '../../utils/consts';

export default function Incidents({location}: {location: string}) {
    const [filterState, setFilterState] = useState('all');
    const [clients, setClients] = useState(incidentsDefault);
    const [showСlients, setShowClients] = useState(incidentsDefault);
    const [searchValue, setSearchValue] = useState('');
    const [searchValueShow, setSearchValueShow] = useState('');

    function handleChangeFilter(e: React.ChangeEvent<HTMLInputElement>) {
        setFilterState(e.target.value);
    }

    function handleChangeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }

    function handleSubmit(e: MouseEvent) {
        e.preventDefault();
        setSearchValueShow(searchValue);
    }

    useEffect(() => {
        if (filterState === 'all') {
            setShowClients(clients.filter((client) => client.name.toLocaleLowerCase().includes(searchValueShow.toLocaleLowerCase()) || client.phoneNumber.includes(searchValueShow)))
            return
        }
        if (filterState === 'ФЛ') {
            setShowClients(clients.filter((client) => client.type === 'ФЛ').filter((client) => client.name.toLocaleLowerCase().includes(searchValueShow.toLocaleLowerCase()) || client.phoneNumber.includes(searchValueShow)))
            return
        }
        if (filterState === 'ЮЛ') {
            setShowClients(clients.filter((client) => client.type === 'ЮЛ').filter((client) => client.name.toLocaleLowerCase().includes(searchValueShow.toLocaleLowerCase()) || client.phoneNumber.includes(searchValueShow)))
            return
        }
    }, [clients, filterState, searchValueShow])

    useEffect(() => {
        setSearchValueShow('');
    }, [filterState])

    return(
        <section className='incidents section' aria-label='Инциденты'>
            <Header name='Инциденты' redirectTo='/' location={location}/>
                <div className='incidents__actions' >
                    <div className='incident__filter-wrapper'>
                        <label className={`incidents__label ${filterState === 'all' ? 'incidents__label_checked' : ''} ${filterState === 'ФЛ' ? 'border__right_none' : ''}`}>
                            <input className='incidents__filter-button display_none' type='radio' name='filter' value='all' onChange={handleChangeFilter} defaultChecked={true}/>
                            Все
                        </label>
                        <label className={`incidents__label ${filterState === 'ФЛ' ? 'incidents__label_checked' : ''}`}>
                            <input className='incidents__filter-button display_none' type='radio' name='filter' value='ФЛ' onChange={handleChangeFilter}/>
                            Физ лица
                        </label>
                        <label className={`incidents__label ${filterState === 'ЮЛ' ? 'incidents__label_checked' : ''} ${filterState === 'ФЛ' ? 'border__left_none' : ''}`}>
                            <input className='incidents__filter-button display_none' type='radio' name='filter' value='ЮЛ' onChange={handleChangeFilter}/>
                            Юр лица
                        </label>
                    </div>
                    <form className='incidents__form'>
                        <input className='incidents__form-input' onChange={handleChangeSearchValue} placeholder='Поиск по названию и номеру телефона'/>
                        <button className='incidents__form-submit' type='submit' onClick={handleSubmit}/>
                    </form>
                    <button className='incidents__button'>+ Добавить инцидент</button>
                </div>
                <div className='incidents__list'>
                    <table className='incidents__table'>
                        <thead className='incidents__table-header'>
                            <tr className='incidents__table-row'>
                                <th className='incidents__table-cell_header'>Контрагент</th>
                                <th className='incidents__table-cell_header'>Адрес</th>
                                <th className='incidents__table-cell_header'>Тип</th>
                                <th className='incidents__table-cell_header'>Номер телефона</th>
                                <th className='incidents__table-cell_header'>Эл. почта</th>
                                <th className='incidents__table-cell_header'>Договор</th>
                                <th className='incidents__table-cell_header'>Номер договора</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showСlients.map((client, i) => 
                            <tr className='incidents__table-row incidents__table-row-body' key={i}>
                                <td className='incidents__table-cell_body'>{client.name}</td>
                                <td className='incidents__table-cell_body'>{client.location}</td>
                                <td className='incidents__table-cell_body'>{client.type}</td>
                                <td className='incidents__table-cell_body'>{client.phoneNumber}</td>
                                <td className='incidents__table-cell_body'>{client.email}</td>
                                <td className='incidents__table-cell_body'>{client.contractDate}</td>
                                <td className='incidents__table-cell_body'>{client.contractNumber}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
        </section>
        
    )
}