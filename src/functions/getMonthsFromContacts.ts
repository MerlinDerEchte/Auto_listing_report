import {IMonth} from '../models/IMonth'
import {IContact} from '../models/IContact';

export function getMonthsFromContacts(contacts:IContact[]):IMonth[]{
    let months:IMonth[] = [];
    // extract month objects of Contacts
    contactLoop:
    for(let contact of contacts){
        const date = contact.contactDate;
        const contactMonth:number = date.getMonth();
        const contactYear:number = date.getFullYear();

        for(let m of months){
            if(m.month === date.getMonth() && m.year === date.getFullYear()) continue contactLoop;
        }
        const newMonth: IMonth = {
            month: contactMonth,
            year: contactYear
        }
        months.push(newMonth);
    }
    // sort months by year, followed by month
    months.sort((m:IMonth,b:IMonth) => {
        if(m.year > b.year){
            return -1;
        }else if(m.year < b.year){
            return 1;
        }else{
            return b.month - m.month;
        }
    })
    return months;
}
