document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  // Add click event listener to each FAQ item
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove the 'active' class from all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      // Add the 'active' class to the clicked FAQ item
      item.classList.add("active");
    });
  });

  // By default, set the first FAQ item to be active
  faqItems[0].classList.add("active");
});
