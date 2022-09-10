function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
  inputField.value = "";
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
  console.log("in f= ", textElementValue)
}

function setTextElementValueById(elementId, newValue) {
  console.log("set f = ", elementId, newValue);
  const textElement = document.getElementById(elementId);
  //newValue = textElement.value;
  textElement.innerText = newValue;
  console.log("f n = ", newValue);
  
}
