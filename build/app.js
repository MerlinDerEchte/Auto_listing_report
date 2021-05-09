"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getMakeProportions_1 = require("./functions/getMakeProportions");
const DatabaseConnection_1 = require("./constants/DatabaseConnection");
const getAveragePricesBySellerType_1 = require("./functions/getAveragePricesBySellerType");
const getTopListingContactsPerMonth_1 = require("./functions/getTopListingContactsPerMonth");
const getListingsContactAmountsAveragePrice_1 = require("./functions/getListingsContactAmountsAveragePrice");
const path = require('path');
const app = express_1.default();
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, 'views'));
app.use("/static", express_1.default.static(path.join(__dirname, "public")));
const router = express_1.default.Router();
const PORT = 8000;
const db = DatabaseConnection_1.DatabaseConnection.getInstance();
db.createTables();
db.importContactsFromCSV('./contacts.csv');
db.importListingsFromCSV('./listings.csv');
router.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = DatabaseConnection_1.DatabaseConnection.getInstance();
        const listings = yield db.getListings();
        const contacts = yield db.getContacts();
        const averagePricesBySellerType = getAveragePricesBySellerType_1.getAveragePricesBySellerType(listings);
        const makeProportions = getMakeProportions_1.getMakeProportions(listings);
        const topFiveMonthlyListingContacts = getTopListingContactsPerMonth_1.getTopListingContactsPerMonth(contacts, listings, 5);
        const averagePriceOfTopThirtyPercentContactedListings = getListingsContactAmountsAveragePrice_1.getMostContactedListingAveragePrice(listings, contacts, 0.3);
        res.render('listingReport', {
            averagePricesBySellerType: averagePricesBySellerType,
            makeProportions: makeProportions,
            topFiveMonthlyListingContacts: topFiveMonthlyListingContacts,
            averagePriceOfTopThirtyPercentContactedListings: averagePriceOfTopThirtyPercentContactedListings
        });
    });
});
app.use('/', router);
app.listen(PORT);
