const sections = document.querySelectorAll("section"); 

sections.forEach(section => {
  const h2Elements = section.querySelectorAll("h2");  // Select h2 inside each section

  section.addEventListener("mouseenter", () => {
    h2Elements.forEach(h2 => {
      h2.style.transform = "scale(1.5)";
      h2.style.color = "#00274C";
      h2.style.background = "#FFCB05";
    });
  });

  section.addEventListener("mouseleave", () => {
    h2Elements.forEach(h2 => {
      h2.style.transform = "scale(1)";
      h2.style.background = "#00274C";
      h2.style.color = "#FFCB05";
    });
  });
});

document.getElementById("year").innerHTML = new Date().getFullYear();

/*


h2Elements.forEach(h2 => {
  h2.addEventListener("mouseenter", () => {
    h2.style.transform = "scale(1.5)";
    h2.style.color = "#00274C";
    h2.style.background = "#FFCB05";
  });

  h2.addEventListener("mouseleave", () => {
    h2.style.transform = "scale(1)";
    h2.style.background = "#00274C"
    h2.style.color = "#FFCB05";
  });
});

*/