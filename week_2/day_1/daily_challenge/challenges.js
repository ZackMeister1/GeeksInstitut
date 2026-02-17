// ======= Daily challenge: Groceries

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};



// 1) displayGroceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();


// 2) cloneGroceries
const cloneGroceries = () => {

    // ==== Copy of primitive ====
    let user = client;

    // Change client
    client = "Betty";

    console.log("client:", client); // Betty
    console.log("user:", user);     // John

    // Explanation:
    // client is a primitive (string)
    // It is copied by VALUE
    // So changing client does NOT affect user


    // ==== Copy of object ====
    let shopping = groceries;

    // Change totalPrice
    groceries.totalPrice = "35$";

    console.log("groceries totalPrice:", groceries.totalPrice); // 35$
    console.log("shopping totalPrice:", shopping.totalPrice);   // 35$

    // Change paid
    groceries.other.paid = false;

    console.log("groceries paid:", groceries.other.paid); // false
    console.log("shopping paid:", shopping.other.paid);   // false


    // Explanation:
    // Objects are copied by REFERENCE.
    // shopping and groceries point to the same object in memory.
    // So when we change groceries, shopping changes too.
};



// 3) Invoke function

cloneGroceries();
