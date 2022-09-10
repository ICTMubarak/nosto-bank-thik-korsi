// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  //console.log(newDepositAmount);

  if(Number.isNaN(newDepositAmount) == true){
    alert('kidisos bolod');
    return;
}
  /* 
    1. get previous deposit total by id

    */
  
    const previousDepositTotal =getTextElementValueById('deposit-total');
  //const previousDepositTotal = getTextElementValueById("deposit-total");
  console.log("Pd koi", previousDepositTotal);
  // const previousDepositTotaS = previousDepositTota.innerText;
  
  //const previousDepositTotal = parseFloat(previousDepositTotaS);
  
  console.log("pd = ", previousDepositTotal);
  
 

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
   setTextElementValueById("deposit-total", newDepositTotal);
  //document.getElementById("deposit-total").value = newDepositTotal;


  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
