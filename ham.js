function createHamburger() {
    const bun = document.getElementById("bun").value;
  
    const garnishElements = document.querySelectorAll('input[name="garnish"]:checked');
    const garnish = Array.from(garnishElements).map(element => element.value);
  
    const sauceElements = document.querySelectorAll('input[name="sauce"]:checked');
    const sauce = Array.from(sauceElements).map(element => element.value);
  
    const cheese = document.getElementById("cheese").value;
    const pattyType = document.getElementById("pattyType").value;
    const pattyCount = parseInt(document.getElementById("pattyCount").value, 10);
  
    const options = {
      bun: bun,
      garnish: garnish,
      sauce: sauce,
      cheese: cheese,
      pattyType: pattyType,
      pattyCount: pattyCount
    };

   

    // Build the hamburger description

      let description = `Your order is ${options.pattyCount} delicious hamburger with ${options.pattyType} patty`;
  
    if (options.pattyCount > 1) {
      description += "s";
    }
    description += ` on a ${options.bun} bun, topped with ${options.garnish.join(", ")}, and served with ${options.sauce.join(", ")} and ${options.cheese}.`;
  
    // Output the description in the result div
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = description;

    resultDiv.style.backgroundColor="#fff";
   resultDiv.style.boxShadow="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)";

  }
  