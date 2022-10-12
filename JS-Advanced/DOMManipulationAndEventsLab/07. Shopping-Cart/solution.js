function solve() {
   let buttons = Array.from(document.getElementsByClassName('add-product'));
   let resultArea = document.getElementsByTagName('textarea')[0];
   let checkOutButton = document.getElementsByClassName('checkout')[0];
   let totalPrice = 0;
   let itemsBought = [];
   for (const button of buttons) {

      button.addEventListener('click', addProduct);
      function addProduct() {
         let productName = button.parentElement.parentElement.getElementsByClassName('product-title')[0].textContent;
         let productPrice = button.parentElement.parentElement.getElementsByClassName('product-line-price')[0].textContent;
         productPrice = Number(productPrice);
         if (!itemsBought.includes(productName)) {
            itemsBought.push(productName);
         }
         totalPrice += productPrice;
         resultArea.value += `Added ${productName} for ${(productPrice).toFixed(2)} to the cart.\n`
      }

   }
   checkOutButton.addEventListener('click', buyProducts);

   function buyProducts() {
      resultArea.value += `You bought ${itemsBought.join(", ")} for ${totalPrice.toFixed(2)}.`
      checkOutButton.disabled=true;
      for (const button of buttons) {
         button.disabled = true;
      }
   }

}