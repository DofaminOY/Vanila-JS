window.addEventListener('DOMContentLoaded', () => {
       // Calculator

       const result = document.querySelector('.calculating__result span');
       let calc = quantity, commission, costWeek, quantitySubscriptions, middleWeek, noPay, cpi, returnPay;
       
       
       function calcTotal() {
        
           if (!quantity || !commission || !costWeek || !quantitySubscriptions || !middleWeek || !noPay || !cpi || !returnPay) {
               result.textContent = '____'; // Можете придумать что угодно
               return;
           } else {
               
               result.textContent = quantity / ((((costWeek * middleWeek) * quantitySubscriptions) / 100) - (((100 - noPay) * cpi) / 100) - ((((costWeek * middleWeek) * quantitySubscriptions) * (returnPay / 100)) / 100) - ((((costWeek * middleWeek) * quantitySubscriptions) * (commission / 100)) / 100)) 
              
            //   (((costWeek * middleWeek) * quantitySubscriptions) / 100)
            //   (((100 - noPay) * cpi) / 100)
            //   ((((costWeek * middleWeek) * quantitySubscriptions) * (returnPay / 100)) / 100)
            //   ((((costWeek * middleWeek) * quantitySubscriptions) * (commission / 100)) / 100)
            //   quantity / ()  

           }
       }
   
       calcTotal();
   
    
   
       
       
   
       function getDynamicInformation(selector) {
           const input = document.querySelector(selector);
   
           input.addEventListener('input', () => {
               switch(input.getAttribute('id')) {
                   case "quantity":
                    quantity = +input.value;
                       break;
                   case "commission":
                    commission = +input.value;
                       break;
                   case "costWeek":
                    costWeek = +input.value;
                       break;
                   case "quantitySubscriptions":
                    quantitySubscriptions = +input.value;
                        break;
                   case "middleWeek":
                    middleWeek = +input.value;
                        break;
                   case "noPay":
                    noPay = +input.value;
                        break;
                   case "cpi":
                    cpi = +input.value;
                        break;
                   case "returnPay":
                    returnPay = +input.value;
                        break;
               }
   
               calcTotal();
           });
       }
   
       getDynamicInformation('#quantity');
       getDynamicInformation('#commission');
       getDynamicInformation('#costWeek');
       getDynamicInformation('#quantitySubscriptions');
       getDynamicInformation('#middleWeek');
       getDynamicInformation('#noPay');
       getDynamicInformation('#cpi');
       getDynamicInformation('#returnPay');
   
});