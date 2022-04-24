//********************************************************validation function***************************************************//
function validation(){
    var fullname = document.getElementById("fname").value;
    var lastnae = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("cntact").value;
    var address = document.getElementById("address").value;
    var cardh = document.getElementById("crdhld").value;
    var cardno = document.getElementById("crdnum").value;


    if(fullname=="null" || fullname=="" ){
    alert("Please Enter Your First Name!");
    }

    else if(lastnae=="null" || lastnae==""){
    alert("Please Enter Your Last Name!");
    }

    else if(email=="null" || email==""){
    alert("Please Provide the email address!"); 
    }

    else if(email.length < 8 || email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("You have entered an invalid email address");
    }

    else if(contact=="null" || contact==""){
    alert("Please Provide a phone number!");
    }

    else if(contact.length != 10){
        alert("You have entered an invalid phone number");
    }

    else if(address=="null" || address==""){
        alert("Please Provide your address!");
    }

    else if(cardh=="null" || cardh==""){
        alert("Please Provide card holder");
    }

    else if(cardno=="null" || cardno==""){
        alert("Please Provide your card number!");
    }

    else{
        placeorder();
    }
}

//**************************************************add products to array*****************************************************//

let array1 = []; // Product Title
let array2 = []; // Product Price
let array3 = []; // Product Quantity

function productdel(num) {
    let protitle = "item-title" + num;
    let proprice = "item-price" + num;
    let qty = "qty" + num;
    let a =  document.getElementById(protitle).textContent;
    let b =  document.getElementById(proprice).textContent;
    let c =  document.getElementById(qty).value;
    let lenArray = array1.length;
    array1[lenArray] = a;
    array2[lenArray] = b;
    array3[lenArray] = c;
}

// *******************************************************calculate total******************************************************//
function calc() {
    tot = 0;
    for (let i = 0; i < array2.length; i++) {
        value = Number(array2[i]);
        qty = Number(array3[i]);
        price = value*qty;
        tot += price;
        
    }
    return tot;
}

// ****************************************************Print invoice***********************************************************//
function placeorder() {
    var tot = calc()

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var cntact = document.getElementById("cntact").value;
    var address = document.getElementById("address").value;

    document.getElementById("invoice").innerHTML =
          "<h2>Invoice</h2><hr><p>Name: " + fname + " " + lname + "<br>E-mail: " + email + "<br>Phone No: " + cntact + "</p><hr>";

    for (let i = 0; i < array1.length; i++) {
        let prehtml = document.getElementById("invoice").innerHTML
        document.getElementById("invoice").innerHTML = prehtml + "<p>Product: " + array1[i] + "<br>Price: Rs. " + array2[i] + "<br>Quantity: " + array3[i] + "</p>";
        
    }

    let prehtml = document.getElementById("invoice").innerHTML
    document.getElementById("invoice").innerHTML = prehtml + "<hr><div>Total : Rs. " + tot + "</div><hr>";

}
