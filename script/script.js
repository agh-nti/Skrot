function buildMenu()
{
    var links = [
        ["Startsidan", "index.html"],
        ["Produkter", "products.html"],
        ["Media", "media.html"],
        ["Kontakt", "contact.html"]
        
    ]

    var menyHtml = ""
    for(var i = 0; i < links.length; i = i + 1)
    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"
    }
    document.getElementById("meny").innerHTML = menyHtml

}

function sumPrice()
{
   var input = document.getElementsByName("product");
   var total = 0;
   for (var i = 0; i < input.length; i++)
   {
      if (input[i].checked)
      {
         total += parseFloat(input[i].value);
      }
   }
   document.getElementById("total").value = total.toFixed(0) + " SEK";
}

function taxCalc(val)
{	
	if (val === 'true') {
	document.getElementById('taxButton').setAttribute('value', 'false');
	document.getElementById('taxButton').innerHTML = "inklusive moms";
	document.getElementById('checkbox_grav').setAttribute('value', '2200000');
	document.getElementById('price_grav').innerHTML = "2 200 000";
	document.getElementById('checkbox_kran').setAttribute('value', '3300000');
	document.getElementById('price_kran').innerHTML = "3 300 000";
	document.getElementById('checkbox_last').setAttribute('value', '4400000');
	document.getElementById('price_last').innerHTML = "4 400 000";
	} else {
		document.getElementById('taxButton').setAttribute('value', 'true');
		document.getElementById('taxButton').innerHTML = "exklusive moms";
		document.getElementById('checkbox_grav').setAttribute('value', '2000000');
		document.getElementById('price_grav').innerHTML = "2 000 000";
		document.getElementById('checkbox_kran').setAttribute('value', '3000000');
		document.getElementById('price_kran').innerHTML = "3 000 000";
		document.getElementById('checkbox_last').setAttribute('value', '4000000');
		document.getElementById('price_last').innerHTML = "4 000 000";
	}
	sumPrice();
}