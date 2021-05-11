import express from 'express';
import { getMakeProportions } from './functions/getMakeProportions';
import { DatabaseConnection } from './constants/DatabaseConnection';
import { getAveragePricesBySellerType } from './functions/getAveragePricesBySellerType';
import { getTopListingContactsPerMonth } from './functions/getTopListingContactsPerMonth';
import { IListingContactAmountPerMonth } from './models/IListingContactAmountPerMonth';
import { IMakeProportion } from './models/IMakeProportion';
import { ISellerTypeAveragePrice } from './models/ISellerTypeAveragePrice';
import { getMostContactedListingAveragePrice } from './functions/getMostContactedListingAveragePrice';
const path = require('path');

const app = express();
const router = express.Router();
const PORT = 8000;


app.set('view engine', 'pug');
app.set("views", path.join(__dirname, 'views'));
app.use("static", express.static(path.join(__dirname, "public")));

async function createDatabase(callback: any) {
    const db = DatabaseConnection.getInstance();
    await db.createTables();
    await db.importContactsFromCSV('./contacts.csv');
    await db.importListingsFromCSV('./listings.csv');
    callback();
}
router.get('/', async function (req, res) {
    const db = DatabaseConnection.getInstance();
    const listings = await db.getListings();
    const contacts = await db.getContacts();

    const averagePricesBySellerType: ISellerTypeAveragePrice[] = getAveragePricesBySellerType(listings);
    const makeProportions: IMakeProportion[] = getMakeProportions(listings);
    const topFiveMonthlyListingContacts: IListingContactAmountPerMonth[] = getTopListingContactsPerMonth(contacts, listings, 5);
    const averagePriceOfTopThirtyPercentContactedListings = getMostContactedListingAveragePrice(listings, contacts, 0.3);
    res.render('listingReport', {
        averagePricesBySellerType: averagePricesBySellerType,
        makeProportions: makeProportions,
        topFiveMonthlyListingContacts: topFiveMonthlyListingContacts,
        averagePriceOfTopThirtyPercentContactedListings: averagePriceOfTopThirtyPercentContactedListings
    });


})
app.use('/', router);
createDatabase(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})



