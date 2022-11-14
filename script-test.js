// RegExp SEGMENT

// Shevchenko Street 32, Kriviy Rih, Ukrain, 55555, +38(088)888-88-88 - test address

// name/surname - latin letters
function testAlph(str){
    let exp = /^[a-zA-Z]+$/
    if (!exp.test(str)){
        return "Can only contain latin letters"
    }
    else{
        return `You entered: ${str}`
    }
}

document.getElementById("testPush1").onclick = onClickName
function onClickName(){
    let str = document.getElementById("testName").value
    alert(testAlph(str))
}

document.getElementById("testPush2").onclick = onClickSurname
function onClickSurname(){
    let str = document.getElementById("testSurname").value
    alert(testAlph(str))
}

document.getElementById("testPush3").onclick = testFullAddress
function testFullAddress(){
    let str = document.getElementById("testAddress").value
    let strArr = str.split(", ")
    testAddress(strArr[0])
    testLocation(strArr[1])
    testLocation(strArr[2])
    testPostcode(strArr[3])
    testPhoneNumber(strArr[4])
}

// house number - third element
function testAddress(str){
    // let strThirdElem = str.split(" ")
    let exp = /^[0-9]+$/
    if(!exp.test(str.split(" ")[2])){
        alert("House number only contain digits and comes after street name")
    }
}

// City/country name starts with capital letter
function testLocation(str){
    let exp = /^[A-Z]$/
    if(!exp.test(str[0])){
        alert("First letter should be capital")
    }
}

// postcode - 5 digits
function testPostcode(str){
    let exp = /^[0-9]{5}$/
    if(!exp.test(str)){
        alert("Postcode can only contain 5 digits")
    }
}

// phone number - +38(xxx)xxx-xx-xx
function testPhoneNumber(str){
    let exp = /^\+38\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/
    if(!exp.test(str)){
        alert("Phone number fit the pattern: +38(xxx)xxx-xx-xx")
    }
}


// E-MAIL
document.getElementById("testPush4").onclick = testEmailAddress
function testEmailAddress(){
    let str = document.getElementById("testEmail").value
    let exp = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
    if(!exp.test(str)){
        alert("Invalid e-mail")
    }
}