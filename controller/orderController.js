var fs = require('fs');
const Item = require('../model/Item');
var path = require('path');

module.exports = {
    //used to save values to the database
    saveItem: (req, res) => {

        let filePath = path.join(__dirname, 'items.json');

        fs.readFile(filePath, (err, contents) => {
            var itemObj = JSON.parse(contents)['menu-items'];

            for (let i = 0; i < itemObj.length; i++) {
                let item = itemObj[i];
                let name = item.name;
                let price = item.subitems[0].price;

                let newItem = new Item({name, price});

                newItem.save((err, user) => {
                    if (!err) {
                        console.log("success save");
                        result.status = status;
                        result.result = user;
                    } else {
                        status = 500;
                        result.status = status;
                        result.error = err;
                    }
                    console.log('last ' + 'err');
                    res.status(status).send(result);
                });
            }
        });
    },

    getOrderData: (req, res) => {
        Item.find({}, function (err, items) {
            if (err) {
                res.json({
                    success: false,
                    message: 'failure data retrieve!',
                });
            } else {

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'success data retrieve!',
                    data: items
                });
            }
        });

    }

};