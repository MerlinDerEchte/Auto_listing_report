import express from 'express';
import {getMakeProportions} from './functions/getMakeProportions';
import { DatabaseConnection } from './constants/DatabaseConnection';
import {getAveragePricesBySellerType} from './functions/getAveragePricesBySellerType';
import {getTopListingContactsPerMonth} from './functions/getTopListingContactsPerMonth';
import {IListingContactAmountPerMonth} from './models/IListingContactAmountPerMonth';
import { IMakeProportion} from './models/IMakeProportion';
import {ISellerTypeAveragePrice} from './models/ISellerTypeAveragePrice';
import { getMostContactedListingAveragePrice } from './functions/getMostContactedListingAveragePrice';

const path = require('path');
const app = express();
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, 'views'));
app.use("/static", express.static(path.join(__dirname, "public")));

const router = express.Router();
const PORT = 8000;

const db = DatabaseConnection.getInstance();
db.createTables();
db.importContactsFromCSV('./contacts.csv');
db.importListingsFromCSV('./listings.csv');

router.get('/', async function (req, res) {
    const db = DatabaseConnection.getInstance();
    const listings = await db.getListings();
    const contacts = await db.getContacts();

    const averagePricesBySellerType: ISellerTypeAveragePrice[] = getAveragePricesBySellerType(listings);
    const makeProportions:IMakeProportion[] = getMakeProportions(listings);
    const topFiveMonthlyListingContacts:IListingContactAmountPerMonth[] = getTopListingContactsPerMonth(contacts, listings,5);
    const averagePriceOfTopThirtyPercentContactedListings = getMostContactedListingAveragePrice(listings,contacts,0.3);
    res.render('listingReport', {
        averagePricesBySellerType: averagePricesBySellerType,
        makeProportions: makeProportions,
        topFiveMonthlyListingContacts: topFiveMonthlyListingContacts,
        averagePriceOfTopThirtyPercentContactedListings: averagePriceOfTopThirtyPercentContactedListings
    });


})
app.use('/', router);
app.listen(PORT)


