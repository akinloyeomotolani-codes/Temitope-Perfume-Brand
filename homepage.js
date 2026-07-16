/* Women Section */

const button = document.querySelector(".heading1");

const links = document.querySelector(".Womenlinks");

button.addEventListener("click", function()  {


  if (links.style.display === "block")  {

    links.style.display = "none";
    button.textContent = "Women    +";

  }

  else  {

    links.style.display = "block";
    button.textContent = "Women    -";

  }

});

/* Men Section */

const buttonSecond = document.querySelector(".heading2");

const MenLinks = document.querySelector(".Menlinks");

buttonSecond.addEventListener("click", function ()  {

  if (MenLinks.style.display === "block")  {

      MenLinks.style.display = "none";
      buttonSecond.textContent = "Men    +";

  }

  else  {

    MenLinks.style.display = "block";
    buttonSecond.textContent = "Men    -";

  }

});

/*The House of TemiTope Section */

const buttonThird = document.querySelector(".heading3");

const StoryLinks = document.querySelector(".Storylinks");

buttonThird.addEventListener("click", function ()  {

  if (StoryLinks.style.display === "block")  {

    StoryLinks.style.display = "none";

    buttonThird.textContent = "The House of TemiTope    +";
  }

  else  {

    StoryLinks.style.display = "block";

    buttonThird.textContent = "The House of TemiTope    -";

  }

});

/* Jewellery Section */

const buttonFourth = document.querySelector(".heading4");

const JewelleryLinks = document.querySelector(".Jewellerylinks");

buttonFourth.addEventListener("click", function ()  {

  if (JewelleryLinks.style.display === "block")  {

    JewelleryLinks.style.display = "none";
    buttonFourth.textContent = "Jewellery    +";
  }

  else  {
    JewelleryLinks.style.display = "block";
    buttonFourth.textContent = "Jewellery    -";
  }

});

/* Signature Collection */

const buttonFifth = document.querySelector(".heading5");

const SCLinks = document.querySelector(".SClinks");

buttonFifth.addEventListener("click", function()  {

  if (SCLinks.style.display === "block")  {
    SCLinks.style.display = "none";
    buttonFifth.textContent = "Signature Collection    +";

  }

  else  {
    SCLinks.style.display = "block";
    buttonFifth.textContent = "Signature Collection    -"

  }

});

/* The Journal Section */

const buttonSixth = document.querySelector(".heading6");

const TJLinks = document.querySelector(".TJlinks");

buttonSixth.addEventListener("click", function()  {

  if (TJLinks.style.display === "block")  {

    TJLinks.style.display = "none";
    buttonSixth.textContent = "The Journal    +";

  }

  else  {
    TJLinks.style.display = "block";
    buttonSixth.textContent = "The Journal    -";
  }

});