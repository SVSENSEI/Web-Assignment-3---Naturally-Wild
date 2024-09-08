let cartAmount = 0;
let numCartItems = 0;
let cartItemsArr = [];


function addToCart(price, itemName) {
    cartAmount = cartAmount + price;
    numCartItems += 1;

    let itemIndex = cartItemsArr.indexOf(itemName);

    document.getElementById("myCartAmount").innerHTML = 'Cart Amount: $' + cartAmount;
    document.getElementById("myCartItems").innerHTML = 'No of items: ' + numCartItems;

    // Create a new item object 
    itemObj = {"rowNum": itemIndex, "product": itemName, "price": price, "quantity": 1};
    
    // Check if this item already exists, if so increase the quantity of the existing item
    if (cartItemsArr.includes(itemName)) {
        addRow(itemObj, true);
    }
    else {
        cartItemsArr.push(itemName);
        addRow(itemObj, false);
    }
}


function clearCart() {
    cartAmount = 0;
    numCartItems = 0;

    document.getElementById("myCartAmount").innerHTML = 'Cart Amount: $0.00';
    document.getElementById("myCartItems").innerHTML = 'No of items: 0';

    cartItemsArr = [];

    // Remove all rows from the cart table
    $("#cart-table tr").remove(); 

}


function getCartItems() {
    let totalStr = 'Total: $' + String(cartAmount.toFixed(2));
    document.getElementById("popupCartTotal").innerHTML = totalStr;
}


function addRow(obj, itemAlreadyExists){
    // If the item already exists increment its quantity column in the table
    if (itemAlreadyExists) {
        let table = document.getElementById("cart-table");
        let row = table.getElementsByTagName("tr")[obj.rowNum];
        let quantity = row.cells[1];
  
        quantity.innerHTML = parseInt(quantity.innerHTML) + 1;

    }
    // If it is a new item, add a new row to the table
    else {
        var row = `<tr scope="row" class="test-row-${obj.id}">
                   <td class="table-body-text">${obj.product}</td>
                   <td class="table-body-text">${obj.quantity}</td>
                   <td class="table-body-text">${"$ " + obj.price.toFixed(1)}</td>
               </tr>`
    }

    $('#cart-table').append(row)
    
}