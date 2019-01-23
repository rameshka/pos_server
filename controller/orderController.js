var fs = require('fs');
const Item = require('../model/Item');
var path = require('path');
var OrderModel = require('../model/Order');

module.exports = {
    //used to save individual values to the database
    saveItem: (req, res) => {

        let filePath = path.join(__dirname, 'items.json');

        fs.readFile(filePath, (err, contents) => {
            var itemObj = JSON.parse(contents)['menu-items'];

            for (let i = 0; i < itemObj.length; i++) {
                let item = itemObj[i];
                let name = item.name;
                let price = item.subitems[0].price;

                let newItem = new Item({name, price});

                newItem.save((err) => {
                    if (!err) {
                        console.log("success save");

                    } else {
                        console.log("Unsuccess save");
                    }

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

                // return the item information formatted for front end
                var itemData = [];
                for(let i = 0 ; i <items.length;i++){
                    itemData.push({key: items[i].name, value: items[i].name, text: items[i].name,price: items[i].price})
                }

                res.json({
                    success: true,
                    message: 'success data retrieve!',
                    data: itemData
                });
            }
        });

    },
    saveOrderData:(req,res)=>{
        var itemList = req.body.itemList;
        var orderItemList = [];
        let totalOrderCost = req.body.totalOrderCost;
        let status = req.body.status;
        let orderID = '1';



        for(let i = 0;i<itemList.length;i++){
            orderItemList.push(new OrderModel.OrderItem(itemList[i]));
        }

        let order = new OrderModel.Order({orderID:orderID,cost:totalOrderCost,items:orderItemList,status:status});


        order.save((err) => {
            if (!err) {
                console.log("success save");

            } else {
                console.log("Unsuccess save" + err);
            }

        });



    }

};