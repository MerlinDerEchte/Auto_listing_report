"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthsFromContacts = void 0;
function getMonthsFromContacts(contacts) {
    let months = [];
    contactLoop: for (let contact of contacts) {
        const date = contact.contactDate;
        const contactMonth = date.getMonth();
        const contactYear = date.getFullYear();
        for (let m of months) {
            if (m.month === date.getMonth() && m.year === date.getFullYear())
                continue contactLoop;
        }
        const newMonth = {
            month: contactMonth,
            year: contactYear
        };
        months.push(newMonth);
    }
    months.sort((m, b) => {
        if (m.year > b.year) {
            return -1;
        }
        else if (m.year < b.year) {
            return 1;
        }
        else {
            return b.month - m.month;
        }
    });
    return months;
}
exports.getMonthsFromContacts = getMonthsFromContacts;
