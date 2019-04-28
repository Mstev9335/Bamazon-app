# Bamazon-app

* Using a database called bamazon that contains a table with fields for item_id, product_name, department_name, price, stock_quantity

* When the application is first run, it will display all of the items from the database that are available for purchase

* The app then asks the user which product he/she would like to buy and how many to buy

* The app then checks the database to confirm that the item is in stock and updates the stock based on the user's order

*  If there is not enough stock for the item, an error message is printed and the order is declined

*  If there is enough stock for the item, then the user's order is fulfilled

## Technologies used:
* HTML
* CSS
* Javascript
* Mysql
* NPM
* Inquirer

## App starts
![concert-this functionality](/screenshots/bamazon1.png)

### The user selects the item he/she wishes to purchase and is then prompted for the number of that item he/she wishes to purchase
![concert-this functionality](/screenshots/bamazon2.png)

### The stock of the item is updated in the database and the items are displayed again
![concert-this functionality](/screenshots/bamazon3.png)

### The user can put in an order for more than the number of stock
![concert-this functionality](/screenshots/bamazon4.png)

### If that happens, a message stating that there is insufficient stock is displayed and the order is cancelled so the stock is not changed
![concert-this functionality](/screenshots/bamazon5.png)
