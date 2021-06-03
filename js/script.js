

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

function handleClick2(myRadio) {
    if(myRadio.value =="1")
		{
			var result_style = document.getElementById('prestations').style;
			result_style.display = 'table-row';

			var result_style2 = document.getElementById('prestations2').style;
			result_style2.display = 'table-row';

			var result_style3 = document.getElementById('prestations3').style;
			result_style3.display = 'table-row';

			var result_style4 = document.getElementById('prestations4').style;
			result_style4.display = 'table-row';

			var result_style5 = document.getElementById('prestations5').style;
			result_style5.display = 'table-row';

			var result_style6 = document.getElementById('prestations6').style;
			result_style6.display = 'table-row';
		}
		else
		{
			var result_style = document.getElementById('prestations').style;
			result_style.display = 'none';

			var result_style2 = document.getElementById('prestations2').style;
			result_style2.display = 'none';

			var result_style3 = document.getElementById('prestations3').style;
			result_style3.display = 'none';

			var result_style4 = document.getElementById('prestations4').style;
			result_style4.display = 'none';

			var result_style5 = document.getElementById('prestations5').style;
			result_style5.display = 'none';

			var result_style6 = document.getElementById('prestations6').style;
			result_style6.display = 'none';
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

function price() {
    
	valeur = document.getElementById("nb_cristaline").value;
	valeur*=30;
	prix = document.getElementById("prix");
	prix.value = valeur;

	valeur2 = document.getElementById("nb_cristaline2").value;
	valeur2*=30;
	prix2 = document.getElementById("prix2");
	prix2.value = valeur2;

	valeur3 = document.getElementById("nb_cristaline3").value;
	valeur3*=30;
	prix3 = document.getElementById("prix3");
	prix3.value = valeur3;

	valeur4 = document.getElementById("nb_cristaline4").value;
	valeur4*=30;
	prix4 = document.getElementById("prix4");
	prix4.value = valeur4;

	valeur5 = document.getElementById("nb_cristaline5").value;
	valeur5*=30;
	prix5 = document.getElementById("prix5");
	prix5.value = valeur5;

	valeur6 = document.getElementById("nb_cristaline6").value;
	valeur6*=30;
	prix6 = document.getElementById("prix6");
	prix6.value = valeur6;
}