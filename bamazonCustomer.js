var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "root",
	database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showTable();
});

function showTable() {
    console.log("Checkout our items for sale");
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " " + res[i].product_name + " " + res[i].price);
          }
        bamList();
    });
}

function bamList() {

    inquirer.prompt([

        {
            name: "item",
            type: "input",
            message: "Please enter the id of your item"
            
        },
        {   name: "quantity",
            type: "input",
            message: "How much would you like to buy?"
            
        }


    ])
        .then(function (answer) {
            connection.query(
                "SELECT * FROM products WHERE ?",
                {
                    item_id: answer.item
                },
                function (err, res) {
                    if (res[0].stock_quantity < answer.quantity) {
                        console.log("out of stock");
                        shop();
                    }
                    else {
                        var totalCost = res[0].price * answer.quantity;
                        var remainingQuantity = parseInt(res[0].stock_quantity) - parseInt(answer.quantity);
                        var newRemainingQuantity = 'UPDATE `products` SET `stock_quantity` = ' + remainingQuantity
                        connection.query(newRemainingQuantity, function (err, result) {
                          if (err) {
                            console.log(err);
                          } else {
                            console.log(result.affectedRows + " product updated");
                          }
                        });
                        console.log("The total is " + totalCost);
                    }
                });
        });
}


function shop() {
    inquirer.prompt([

        {
            name: "continue",
            type: "confirm",
            message: "Would you like to keep shopping?"
            
        }
    ])
        .then(function (answer) {
            if (answer.continue === true)
                bamlist();
            else
                connection.end();
        });
    }
