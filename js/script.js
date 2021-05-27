

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1196},"pages":[{"id":"page-germanophone","displayName":"germanophone","link":{"linkType":"LinkTypePage","href":"#!page-germanophone"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-anglophone","displayName":"anglophone","link":{"linkType":"LinkTypePage","href":"#!page-anglophone"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-francophone","displayName":"francophone","link":{"linkType":"LinkTypePage","href":"#!page-francophone"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
function handleClick(myRadio) {
    if(myRadio.value =="1")
		{
			form_devis1.style.display = "block";
			form_devis2.style.display = "none";

			form_devis3.style.display = "block";
			form_devis4.style.display = "none";

			form_devis5.style.display = "block";
			form_devis6.style.display = "none";
		}
		else
		{
			form_devis2.style.display = "block";
			form_devis1.style.display = "none";

			form_devis4.style.display = "block";
			form_devis3.style.display = "none";

			form_devis6.style.display = "block";
			form_devis5.style.display = "none";
		}
}

function rgpd() {
  var response = grecaptcha.getResponse();
  var r = confirm("blablabla");
  if (r == true && response.length != 0)
  {
		document.getElementById("submit").disabled = false;
		document.getElementById("submit2").disabled = false;

		document.getElementById("submit3").disabled = false;
		document.getElementById("submit4").disabled = false;

		document.getElementById("submit5").disabled = false;
		document.getElementById("submit6").disabled = false;
  } 
  else
  {
	    if(response.length == 0 && r == true)
		{
			alert("You have to agree to the captcha if you want to validate the form.");
		}
		else if(response.length != 0 && r == false)
		{
			alert("You have to agree to the conditions if you want to validate the form.");
		}
		else
		{
			alert("You have to agree to the conditions and the captcha if you want to validate the form.");
		}

		document.getElementById("submit").disabled = true;
		document.getElementById("submit2").disabled = true;

		document.getElementById("submit3").disabled = true;
		document.getElementById("submit4").disabled = true;

		document.getElementById("submit5").disabled = true;
		document.getElementById("submit6").disabled = true;
  }
}
