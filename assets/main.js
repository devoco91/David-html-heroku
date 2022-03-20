const form = document.getElementById('payForm');
form.addEventListener("submit", payNow);

function payNow(e) {
 e.preventDefault();
 
    FlutterwaveCheckout({
      public_key:'FLWPUBK_TEST-7f251b060e30a4e6328d606d77c37581-X',
      tx_ref: "AK_"+Math.floor((Math.random() * 1000000000) + 1),
      amount: document.getElementById("amount").value,
      currency: "NGN",
	  
      //payment_options: "card,mobilemoney,ussd",
	  
      customer: {
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phoneNumber").value,
        name: document.getElementById("fullName").value,
      },
	  
      callback: (data)=> { // specified callback function
        //console.log(data);
		  const reference = data.tx_ref;
      alert('Payment complete! Reference: ' + reference);
      },
	  
      customizations: {
        title: "Lagos School of Programming",
        description: "Training Fee.",
        logo:src='https://www.shutterstock.com/image-photo/poznan-pol-jan-6-2021-laptop-1928627741'
		
       // logo: "flutterwave/usecover.gif",
      },
    });
  }