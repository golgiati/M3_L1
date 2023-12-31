// Gustavo Olgiati

const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);

async function getSalesProducts() {
    console.log('Connecting to SQL.... Cloud Server');

    let dbContext = await sql.connect(dbConnection);

    console.log('The Database connection was Successful');

    console.log('Getting data');

    let results = await dbContext.request()

        .query(`
        SELECT TOP (20)
            productId,
            name,
            productNumber,
            color
            listPrice
        FROM
            salesLT.Product
        `);

    console.log(`Returned SQL Results`);

    return results;
}

// Export
// module.exports = {getSalesProducts :getSalesProducts};

async function getUserData() {
    console.log('Connecting to SQL.... Cloud Server');

    let dbContext = await sql.connect(dbConnection);

    console.log('The Database connection was Successful');

    console.log('Getting data');

    let results = await dbContext.request()

    .query(`
        SELECT TOP (20)
            CustomerId,
            FirstName,
            MiddleName,
            LastName,
            CompanyName,
            EmailAddress,
            Phone
        FROM
            salesLT.Customer
        `);

    console.log(`Returned SQL Results`);

    return results;

}

// Export
module.exports = {getSalesProducts :getSalesProducts,
                getUserData :getUserData};

//module.exports = {getUserData :getUserData};