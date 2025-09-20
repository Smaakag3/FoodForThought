// Først findes alle knapper/elementer med klassen accordion
const accordionTrigger = document.querySelectorAll('.accordionButton');

// Går igennem alle AccordionTrigger og så beder vi den om at når nogen klikker på en af disse, kør funktionen toggleAccordion
accordionTrigger.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

// Starter funktionen der kører når der klikkes på accordionen
function toggleAccordion() {
  
  // Finde alle elementer med klassen xxx
  const items = document.querySelectorAll('.accordion');
  // Vælger den boks der hører til elementet der blev klikket på (forældreelementet)
  const thisItem = this.parentNode;

  // Går igennem alle accordion-boksene en ad gangen
  items.forEach(item => {
    // Hvis den boks vi kigger på lige nu er den du klikkede på
    if (thisItem == item) {
      // Skift mellem åben og lukket for den boks
      thisItem.classList.toggle('accordionOpen');
      // Stop med at tjekke videre for denne omgang
      return;
    }
    // For alle andre bokse: fjern 'is-open' så de lukkes
    item.classList.remove('accordionOpen');
  });
}