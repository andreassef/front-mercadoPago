const btnPost = document.getElementById('paymentForm');
const btnGet = document.getElementById('listarLog');

// campos do email
const email = document.getElementById('email').value;
const docType = document.getElementById('docType').value;
const docNumber = document.getElementById('docNumber').value;
const cardholderName = document.getElementById('cardholderName').value;
const cardExpirationMonth = document.getElementById('cardExpirationMonth').value;
const cardExpirationYear = document.getElementById('cardExpirationYear').value;
const cardNumber = document.getElementById('cardNumber').value;
const securityCode = document.getElementById('securityCode').value;
const issuer = document.getElementById('issuer').value;
const installments = document.getElementById('installments').value;
const amount = document.getElementById('amount').value;
const paymentMethodId = document.getElementById('paymentMethodId').value;
const description = document.getElementById('description').value;
const token = document.getElementsByName('token').value;

const sendData = () => {
    axios.post('http://localhost:3000/process_payment', {
        email: email,
        docType: docType,
        docNumber: docType,
        cardholderName: cardholderName,
        cardExpirationMonth: cardExpirationMonth,
        cardExpirationYear: cardExpirationYear,
        cardNumber: cardNumber,
        securityCode: securityCode,
        issuer: issuer,
        installments: installments,
        amount: amount,
        paymentMethodId: paymentMethodId,
        description: description,
        token: token
    }).then(response => {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
      }); 
}

const getData = () => {
    axios.get('http://localhost:3000/users').then(response => {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    })
}

btnGet.addEventListener('click', getData);
btnPost.addEventListener('submit', sendData);