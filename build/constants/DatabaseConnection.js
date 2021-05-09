"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const csvtojson_1 = __importDefault(require("csvtojson"));
sqlite3_1.default.verbose();
class DatabaseConnection {
    constructor() {
        this.dataBase = new sqlite3_1.default.Database(':memory:', (err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }
    contructor() { }
    static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection;
        }
        return DatabaseConnection.instance;
    }
    createTables() {
        this.dataBase.run('CREATE TABLE listings(id INTEGER PRIMARY KEY, make TEXT NOT NULL, price INTEGER, mileage INTEGER, seller_type TEXT);');
        this.dataBase.run('CREATE TABLE contacts(listing_id INTEGER , contact_date DATE );');
    }
    getListings() {
        return new Promise((resolve, reject) => {
            this.dataBase.all('SELECT * from listings', (err, res) => {
                if (err) {
                    reject();
                }
                const lsts = res.map((r) => {
                    const listing = {
                        id: r.id,
                        make: r.make,
                        price: r.price,
                        mileage: r.mileage,
                        sellerType: r.seller_type,
                    };
                    return listing;
                });
                resolve(lsts);
            });
        });
    }
    getContacts() {
        return new Promise((resolve, reject) => {
            this.dataBase.all('SELECT * from contacts', (err, res) => {
                if (err) {
                    console.error("import did not work");
                    reject("fail");
                }
                const contacts = res.map((r) => {
                    const contact = {
                        listingId: parseInt(r.listing_id),
                        contactDate: new Date(r.contact_date)
                    };
                    return contact;
                });
                resolve(contacts);
            });
        });
    }
    addListing(listing) {
        this.dataBase.all('INSERT INTO listings VALUES($id, $make, $price, $mileage, $seller_type)', {
            $id: listing.id,
            $make: listing.make,
            $price: listing.price,
            $mileage: listing.mileage,
            $seller_type: listing.sellerType
        });
    }
    addContact(contact) {
        this.dataBase.all('INSERT INTO contacts VALUES($listing_id, $contact_date)', {
            $listing_id: contact.listingId,
            $contact_date: new Date(contact.contactDate)
        });
    }
    importListingsFromCSV(csvPath) {
        csvtojson_1.default().fromFile(csvPath)
            .then((json) => {
            for (let j of json) {
                const listing = {
                    id: parseInt(j.id),
                    make: j.make,
                    price: parseInt(j.price),
                    mileage: parseInt(j.mileage),
                    sellerType: j.seller_type
                };
                this.addListing(listing);
            }
        }).then(res => console.log('import succesfull'));
    }
    importContactsFromCSV(csvPath) {
        csvtojson_1.default().fromFile(csvPath).then((json) => {
            json.forEach((j) => {
                const contact = {
                    listingId: parseInt(j.listing_id),
                    contactDate: new Date(parseInt(j.contact_date))
                };
                this.addContact(contact);
            });
        }).then(res => console.log('import succesfull'));
    }
}
exports.DatabaseConnection = DatabaseConnection;
