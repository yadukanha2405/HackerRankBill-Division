import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function bonAppetit(bill, k, b) {
  // Write your code here
  let totalBill = 0;
  let tempBill = 0;
  let annaBill = 0;
  let baraineatCost = bill[k];
  let result = "";
  for (let i = 0; i < bill.length; i++) {
    tempBill += bill[i];
  }
  annaBill = (tempBill - baraineatCost) / 2;
  totalBill = tempBill / 2;
  if (annaBill === b) {
    result = "Bon Appetit";
  } else {
    result = b - annaBill;
  }
  return result;
}

let bill = [3, 10, 2, 9];
let test = bonAppetit(bill, 1, 12);
console.log(test);
