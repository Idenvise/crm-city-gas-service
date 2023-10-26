const regExpEmail = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ )
const sideBarDefault = {
    incidents: 3,
    requests: 83,
    appeals: 16,
    officeMemo: 2,
    clients: 0,
    warehouse: 0,
    showcase: 0,
    reports: 0,
    staff: 0
}
const userDefault = {
    name: 'Екатерина',
    lastName: 'Калмыкова',
    middleName: 'Дмитриевна',
    userImage: 'https://w.forfun.com/fetch/2c/2c38ec7c72e3d0094f591d6f735a3b8e.jpeg'
}
const incidentsDefault = [
    {
        name: 'Овчинников Александр Робертович',
        location: 'Лесная 6',
        type: 'ФЛ',
        phoneNumber: '+79134444444',
        email: 'example@gmail.com',
        contractDate: '03.02.2022',
        contractNumber: '7685439'
    },
    {
        name: 'Мелитопольский Константин Александрович',
        location: 'Большевистская 12',
        type: 'ФЛ',
        phoneNumber: '+79134444444',
        email: 'example@gmail.com',
        contractDate: '03.02.2022',
        contractNumber: '6574835'
    },
    {
        name: 'Ремонт котла',
        location: 'Советская 92',
        type: 'ЮЛ',
        phoneNumber: '+79134444444',
        email: 'example@gmail.com',
        contractDate: '03.02.2022',
        contractNumber: '5847859'
    }
]

export { regExpEmail, sideBarDefault, userDefault, incidentsDefault }