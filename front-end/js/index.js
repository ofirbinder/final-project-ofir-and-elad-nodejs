"use strict";

const aboutUsContainer = document.querySelector(".about-us");

//! listener that's add 2 class (shadow to border and scaling the element to magnifies 1.2 times the original size) to target element parent element and set rotate angle to the arrow-icon
aboutUsContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "ION-ICON") {
    const targetElement = e.target; // Check if the element already has a rotation transform
    const currentTransform = targetElement.style.transform;

    // Determine the rotation value based on the current transform
    const rotationValue =
      currentTransform && currentTransform.includes("rotate(90deg)")
        ? "0deg"
        : "90deg";

    // Set the new transform value
    targetElement.style.transform = "rotate(" + rotationValue + ")";

    e.target.parentElement.classList.toggle("hover-border");
    e.target.parentElement.classList.toggle("scaling");
  }
});
