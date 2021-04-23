const currency1 = document.querySelector('#currency-one');
const currency2 = document.querySelector('#currency-two');
const amount1 = document.querySelector('#amount-one');
const amount2 = document.querySelector('#amount-two');
const swapBtn = document.querySelector('.btn');
const rate = document.querySelector('.rate');


// first way
const calculate = async()=>{
    const curr1 = currency1.value;
    const curr2 = currency2.value;
    
    // const config = {Params:{base:curr1}}
    const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/${curr1}`);
    const rates = res.data.rates;
    const exchangeRate = rates[curr2];

    rate.innerText = `1 ${curr1} = ${exchangeRate} ${curr2}`;
    amount2.value = (amount1.value * exchangeRate).toFixed(2);
}


// seceond way
// function calculate(){
//     const curr1 = currency1.value;
//     const curr2 = currency2.value;

//     fetch(`https://api.exchangerate-api.com/v4/latest/${curr1}`)
//         .then(res => res.json())
//         .then(data =>{
//             const ExchangeRate = data.rates[curr2];
//             rate.innerText =`1 ${curr1} = ${ExchangeRate} ${curr2}`;
//             amount2.value = (amount1.value * ExchangeRate).toFixed(2);
//         })
// }


currency1.addEventListener('change',calculate);
currency2.addEventListener('change',calculate);
amount1.addEventListener('input',calculate);
amount2.addEventListener('input',calculate);
swapBtn.addEventListener('click',function(){
    const temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculate();
})

calculate()

