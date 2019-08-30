
// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (mealObj) {
        this.orders.push(mealObj)
    },
    getAllOrders: function () {
        return this.orders
    }

}
const meals =[

 chickenComboMeal = {
    sandwhichType: "chicken",
    fries: true,
    drinkSize: "medium",
},
 burgerComboMeal = {
    sandwhichType: "burger",
    fries: false,
    drinkSize: "large",
},
 wrapComboMeal = {
    sandwhichType: "wrap",
    fries: true,
    drinkSize: "small", 
}
]

// Place an order
restaurant.placeOrder();
restaurant.getAllOrders();

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
console.table(meals);
