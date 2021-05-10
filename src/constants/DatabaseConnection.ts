import sqlite3, { Database } from 'sqlite3';
import { IListing } from '../models/IListing';
import { IContact } from '../models/IContact';
import csvtojson from 'csvtojson';
sqlite3.verbose();

export class DatabaseConnection {
    private static instance: DatabaseConnection;

    dataBase: sqlite3.Database = new sqlite3.Database(':memory:', (err) => {
        if (err) {
            return console.error(err.message);
        }

    });
    private contructor() { }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection
        }
        return DatabaseConnection.instance;
    }

    createTables() {
        return new Promise<string>((resolve, reject) => {
            this.dataBase.run('CREATE TABLE listings(id INTEGER PRIMARY KEY, make TEXT NOT NULL, price INTEGER, mileage INTEGER, seller_type TEXT);', () => {
                this.dataBase.run('CREATE TABLE contacts(listing_id INTEGER , contact_date DATE );', () => {
                    resolve("done")
                });
            });
        })

    }

    getListings(): Promise<IListing[]> {
        return new Promise<IListing[]>((resolve, reject) => {
            this.dataBase.all('SELECT * from listings', (err: any, res: any) => {

                if (err) {

                    reject();
                }
                const lsts: IListing[] = res.map((r: any) => {
                    const listing: IListing = {
                        id: r.id,
                        make: r.make,
                        price: r.price,
                        mileage: r.mileage,
                        sellerType: r.seller_type,
                    }
                    return listing;
                });
                resolve(lsts);
            });
        })
    }

    getContacts(): Promise<IContact[]> {
        return new Promise<IContact[]>((resolve, reject) => {
            this.dataBase.all('SELECT * from contacts', (err: any, res: any) => {
                if (err) {
                    console.error("import did not work")
                    reject("fail");
                }
                const contacts: IContact[] = res.map((r: any) => {
                    const contact: IContact = {
                        listingId: parseInt(r.listing_id),
                        contactDate: new Date(r.contact_date)
                    }
                    return contact;
                });
                resolve(contacts);
            })
        })
    }
    addListing(listing: IListing) {

        this.dataBase.all('INSERT INTO listings VALUES($id, $make, $price, $mileage, $seller_type)', {
            $id: listing.id,
            $make: listing.make,
            $price: listing.price,
            $mileage: listing.mileage,
            $seller_type: listing.sellerType
        })

    }


    addContact(contact: IContact) {
        this.dataBase.all('INSERT INTO contacts VALUES($listing_id, $contact_date)', {
            $listing_id: contact.listingId,
            $contact_date: new Date(contact.contactDate)
        })
    }

    importListingsFromCSV(csvPath: string) {
        return new Promise<string>((resolve, reject) => {
            csvtojson().fromFile(csvPath)
                .then((json: any) => {

                    for (let j of json) {
                        const listing: IListing = {
                            id: parseInt(j.id),
                            make: j.make,
                            price: parseInt(j.price),
                            mileage: parseInt(j.mileage),
                            sellerType: j.seller_type
                        }
                        this.addListing(listing)
                    }

                }).then(res => {
                    console.log("imported listings")
                    resolve('import succesfull')}
                    )
        })

    }
    importContactsFromCSV(csvPath: string) {
        return new Promise<string>((resolve, reject) => {
            csvtojson().fromFile(csvPath).then((json: any) => {
                json.forEach((j: any) => {
                    const contact: IContact = {
                        listingId: parseInt(j.listing_id),
                        contactDate: new Date(parseInt(j.contact_date))
                    }
                    this.addContact(contact)
                });
            }).then(res => {
                console.log("imported contacts");
                resolve('import succesfull')
            })
        })

    }
}
