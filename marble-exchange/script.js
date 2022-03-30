//Initialize and load json data

let requestURL = 'data.json'
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const items = request.response;
    populateItems(items)
}

//SET CONSTANT VARIABLES FOR DYNAMICALLY UPDATED ELEMENTS//

//class elements
const itemButtons = document.querySelectorAll('[data-item]')
const clearButton = document.querySelector('[data-clear]')
const submitButton = document.querySelector('[data-submit]')
const totalTextElement = document.querySelector('[data-total]')
const item1SubTextElement = document.querySelector('[data-item1sub]')
const item2SubTextElement = document.querySelector('[data-item2sub]')
const item3SubTextElement = document.querySelector('[data-item3sub]')
const item4SubTextElement = document.querySelector('[data-item4sub]')
const item1QuantityTextElement = document.querySelector('[data-item1quantity]')
const item2QuantityTextElement = document.querySelector('[data-item2quantity]')
const item3QuantityTextElement = document.querySelector('[data-item3quantity]')
const item4QuantityTextElement = document.querySelector('[data-item4quantity]')
const item1PriceTextElement = document.querySelector('[data-item1price]')
const item2PriceTextElement = document.querySelector('[data-item2price]')
const item3PriceTextElement = document.querySelector('[data-item3price]')
const item4PriceTextElement = document.querySelector('[data-item4price]')
const item1Button = document.querySelector('#button1')
const item2Button = document.querySelector('#button2')
const item3Button = document.querySelector('#button3')
const item4Button = document.querySelector('#button4')
const item1NameTextElement = document.querySelector('#item1name')
const item2NameTextElement = document.querySelector('#item2name')
const item3NameTextElement = document.querySelector('#item3name')
const item4NameTextElement = document.querySelector('#item4name')
const purchaseTextElement = document.querySelector('.welcome')

//form elements
const form = document.querySelector('form')
const error = document.querySelector('#error')

//global variables
var item1Price;
var item2Price;
var item3Price;
var item4Price;
var item1img;
var item2img;
var item3img;
var item4img;
var item1totalQuantity = 0;
var item2totalQuantity = 0;
var item3totalQuantity = 0;
var item4totalQuantity = 0;
var customerTotal = 0;
var customerItem1Quantity = 0;
var customerItem2Quantity = 0;
var customerItem3Quantity = 0;
var customerItem4Quantity = 0;

//form values
const customerFirstName = document.querySelector('#fname')
const customerLastName = document.querySelector('#lname');
const customerDOB = document.querySelector('#dob');
const mr = document.querySelector("#mr");
const ms = document.querySelector("#ms");
const mrs = document.querySelector("#mrs");
const dr = document.querySelector("#dr");
const customerAddress = document.querySelector('#address');
const customerPostal = document.querySelector('#postal');
const customerPO = document.querySelector('#pobox');
const customerProvince = document.querySelector('#prov');

//form values -> list view
const liName = document.querySelector('#li-name')
const liAddress = document.querySelector('#li-address')
const liPobox = document.querySelector('#li-pobox')
const liPostal = document.querySelector('#li-postal')
const liProvince = document.querySelector('#li-province')

const liRed = document.querySelector('#li-red')
const liBlue = document.querySelector('#li-blue')
const liGreen = document.querySelector('#li-green')
const liRainbow = document.querySelector('#li-rainbow')

//form buttons
const submitForm = document.querySelector('#submit-form')
const infoForm = document.querySelector('#form')
const shipItems = document.querySelector('#ship-items')

//innerText memory
const liRedOriginal = liRed.innerText
const liBlueOriginal = liGreen.innerText
const liGreenOriginal = liBlue.innerText
const liRainbowOriginal = liRainbow.innerText

//Load and display items from json data
function populateItems(obj) {
    item1Price = obj['items'][0].price;
    item2Price = obj['items'][1].price;
    item3Price = obj['items'][2].price;
    item4Price = obj['items'][3].price;

    item1Img = obj['items'][0].image;
    item2Img = obj['items'][1].image;
    item3Img = obj['items'][2].image;
    item4Img = obj['items'][3].image;

    item1Name = obj['items'][0].name;
    item2Name = obj['items'][1].name;
    item3Name = obj['items'][2].name;
    item4Name = obj['items'][3].name;

    item1Button.style.backgroundImage = "url('" + item1Img + "')";
    item1Button.style.backgroundSize = "cover";
    item1Button.style.backgroundRepeat = "no-repeat";
    item1PriceTextElement.textContent = "$" + item1Price;
    item1NameTextElement.textContent = item1Name;

    item2Button.style.backgroundImage = "url('" + item2Img + "')";
    item2Button.style.backgroundSize = "cover";
    item2Button.style.backgroundRepeat = "no-repeat";
    item2PriceTextElement.textContent = "$" + item2Price;
    item2NameTextElement.textContent = item2Name;

    item3Button.style.backgroundImage = "url('" + item3Img + "')";
    item3Button.style.backgroundSize = "cover";
    item3Button.style.backgroundRepeat = "no-repeat";
    item3PriceTextElement.textContent = "$" + item3Price;
    item3NameTextElement.textContent = item3Name;

    item4Button.style.backgroundImage = "url('" + item4Img + "')";
    item4Button.style.backgroundSize = "cover";
    item4Button.style.backgroundRepeat = "no-repeat";
    item4PriceTextElement.textContent = "$" + item4Price;
    item4NameTextElement.textContent = item4Name;
}
//Shop class, used for storefront
class Shop {

    constructor(totalTextElement,
        item1SubTextElement,
        item2SubTextElement,
        item3SubTextElement,
        item4SubTextElement,
        item1QuantityTextElement,
        item2QuantityTextElement,
        item3QuantityTextElement,
        item4QuantityTextElement) {
        this.totalTextElement = totalTextElement;
        this.item1SubTextElement = item1SubTextElement;
        this.item2SubTextElement = item2SubTextElement;
        this.item3SubTextElement = item3SubTextElement;
        this.item4SubTextElement = item4SubTextElement;
        this.item1QuantityTextElement = item1QuantityTextElement;
        this.item2QuantityTextElement = item2QuantityTextElement;
        this.item3QuantityTextElement = item3QuantityTextElement;
        this.item4QuantityTextElement = item4QuantityTextElement;
        this.clear();
    }

    clear() {
        this.total = 0;

        this.item1Sub = 0;
        this.item2Sub = 0;
        this.item3Sub = 0;
        this.item4Sub = 0;

        this.item1Quantity = 0;
        this.item2Quantity = 0;
        this.item3Quantity = 0;
        this.item4Quantity = 0;

    }

    addToCart(item) {
        switch (item) {

            case 'item1':
                this.item1Quantity += 1;
                item1totalQuantity +=1;
                break;

            case 'item2':
                this.item2Quantity += 1;
                item2totalQuantity +=1;
                break

            case 'item3':
                this.item3Quantity += 1;
                item3totalQuantity +=1;
                break

            case 'item4':
                this.item4Quantity += 1;
                item4totalQuantity +=1;
                break

            default:
                return
        }
    }

    //calculate order total
    calculate() {
        this.item1Sub = this.item1Quantity * item1Price;
        this.item2Sub = this.item2Quantity * item2Price;
        this.item3Sub = this.item3Quantity * item3Price;
        this.item4Sub = this.item4Quantity * item4Price;

        this.total = this.item1Sub + this.item2Sub + this.item3Sub + this.item4Sub;

    }

    //validate and submit purchase
    submit() {
        if (this.total == 0) {
            return
        }
        else {
            let curHtml = purchaseTextElement.innerText
            purchaseTextElement.style.color = "green"
            purchaseTextElement.innerText = 'Added to order!'
            customerTotal += this.total
            setTimeout(function () {
                purchaseTextElement.style.color = "black"
                purchaseTextElement.innerText = curHtml;
            }, 3000);
        }

        if(this.item1Quantity != 0){
            liRed.innerText = item1totalQuantity + liRedOriginal
        }

        if(this.item2Quantity != 0){
            liBlue.innerText = item2totalQuantity + liBlueOriginal
        }

        if(this.item3Quantity != 0){
            liGreen.innerText = item3totalQuantity + liGreenOriginal
        }

        if(this.item4Quantity != 0){
            liRainbow.innerText = item4totalQuantity + liRainbowOriginal
        }

        shipItems.innerText = "Ship Items: (Total: $"+customerTotal+".00)"

        this.clear();
        this.updateView();
    }

    //update view after purchase
    updateView() {
        this.totalTextElement.innerText = '$' + this.total + '.00';
        this.item1SubTextElement.innerText = '$' + this.item1Sub + '.00';
        this.item2SubTextElement.innerText = '$' + this.item2Sub + '.00';
        this.item3SubTextElement.innerText = '$' + this.item3Sub + '.00';
        this.item4SubTextElement.innerText = '$' + this.item4Sub + '.00';
        this.item1QuantityTextElement.innerText = this.item1Quantity;
        this.item2QuantityTextElement.innerText = this.item2Quantity;
        this.item3QuantityTextElement.innerText = this.item3Quantity;
        this.item4QuantityTextElement.innerText = this.item4Quantity;
    }
}

//create store object
const shop = new Shop(totalTextElement,
    item1SubTextElement,
    item2SubTextElement,
    item3SubTextElement,
    item4SubTextElement,
    item1QuantityTextElement,
    item2QuantityTextElement,
    item3QuantityTextElement,
    item4QuantityTextElement);

//Event listeners
itemButtons.forEach(button => {
    button.addEventListener('click', () => {
        shop.addToCart(button.value);
        shop.calculate();
        shop.updateView();
    })
})

clearButton.addEventListener('click', button => {
    shop.clear();
    shop.updateView();
})

submitButton.addEventListener('click', button => {
    shop.submit();
})

//form validation
submitForm.addEventListener('click', (e) => {

    let errorCode = 0;
    let messages = [];
    let title;
    let po;
    var date1 = customerDOB.value.split('-');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    var date2 = today.split('-');

    var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/

    if (customerFirstName.value.length < 3 || customerFirstName.value.length > 20) {
        messages.push('First name must be between 3 and 20 characters')
    }

    if (customerLastName.value.length < 3 || customerLastName.value.length > 20) {
        messages.push('Last name must be between 3 and 20 characters')
    }

    if (!(mr.checked || ms.checked || mrs.checked || dr.checked)) {
        messages.push("Please select your title")
    }

    if (mr.checked) {
        title = 'Mr.'
    }

    if (ms.checked) {
        title = 'Ms.'
    }

    if (mrs.checked) {
        title = 'Mrs.'
    }

    if (dr.checked) {
        title = 'Dr.'
    }

    if (customerPO.checked) {
        po = 'Yes'
    }else{
        po= 'No'
    }

    if ((date2[0] - date1[0] < 18) || (date2[0] - date1[0] == 18 && date2[1] < date1[1]) || (date2[0] - date1[0] == 18 && date2[1] == date1[1] && date1[2] > date2[2])) {
        messages.push('You must be at least 18 years of age to order')
    }

    if (customerDOB.value == (null || '')) {
        messages.push("Please enter your date of birth")
    }

    if(customerAddress.value == (null || '')){
        messages.push('Please enter your street address')
    }

    if (!(regEx.test(customerPostal.value))) {
        messages.push('Please enter a valid postal code')
    }

    if(customerProvince.value == (null || '')){
        messages.push('Please select your province')
    }

    //create error aray and display errors in case of invalid value(s)
    if (messages.length > 0) {
        e.preventDefault();
        error.innerHTML = ''
        errorCode = 1;
        for(i=0; i<messages.length;i++){
            error.innerHTML +=  "<li>" + messages[i] + "</li>";
        }
    }

    //submit form in case of valid values
    if (messages.length == 0) {

        error.innerText = ''
        liName.innerText = liName.innerText + ' ' + title + ' ' + customerFirstName.value + ' ' + customerLastName.value;
        //liDOB.innerText = customerDOB.value
        liAddress.innerText = liAddress.innerText + ' ' + customerAddress.value;
        liPostal.innerText = liPostal.innerText + ' ' + customerPostal.value;
        liPobox.innerText = liPobox.innerText + ' ' + po;
        liProvince.innerText = liProvince.innerText + ' ' + customerProvince.value;
        error.innerHTML = ''
        infoForm.reset();
    }

    messages = [];
})