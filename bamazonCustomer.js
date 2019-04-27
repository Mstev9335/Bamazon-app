const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err
    console.log("connected");
    afterConnection();
});


function afterConnection() {
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      inquirer
      .prompt([
        {
          name: "choice",
          type: "list",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
                // displays the items from db
                // .toFixed(2) forces the price to display 2 decimal places
              choiceArray.push(results[i].item_id +" "+ results[i].product_name +" $"+ results[i].price.toFixed(2) +
             " "+ results[i].stock_quantity);
            }
            return choiceArray;
          },
          message: "What item would you like to buy?"
        },
        {
          name: "amount",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function(answer) {
        console.log(answer.choice);
        // when finished prompting, insert a new item into the db with that info
        // connection.query(
        //   "UPDATE products SET ? WHERE ?",
        //   [
        //     {
        //       stock_quantity: answer.amount
        //     },
        //     {
        //       item_id: answer.choice
        //     }
        //   ],
        //   function(err) {
        //     if (err) throw err;
        //     console.log(res.affectedRows + " products updated!\n");
         
        //     afterConnection();
        //   }
        // );
      });
 
      connection.end();
    });
  }