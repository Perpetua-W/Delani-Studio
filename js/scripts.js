$(document).ready(function () {
  var timeoutId;
  var isDoubleClick = false;

  $(".icon").on("mousedown touchstart", function (e) {
    e.preventDefault();
    var icon = $(this).find("img");
    var desc = $(this).find(".description");
    icon.hide();
    desc.show();

    timeoutId = setTimeout(function () {
      icon.show();
      desc.hide();
      $(document).off("mouseup touchend");
      isDoubleClick = false;
    }, 1000);

    $(document).on("mouseup touchend", function () {
      clearTimeout(timeoutId);
      if (!isDoubleClick) {
        icon.show();
        desc.hide();
        $(document).off("mouseup touchend");
      }
    });
  });

  $(".icon").on("dblclick touchstart", function (e) {
    e.preventDefault();
    var icon = $(this).find("img");
    var desc = $(this).find(".description");
    icon.hide();
    desc.show();
    isDoubleClick = true;

    $(document).on("mouseup touchend", function () {
      clearTimeout(timeoutId);
      isDoubleClick = false;
      $(document).off("mouseup touchend");
    });
  });
});

$(document).ready(function () {
  $(".thumbnail").each(function () {
    var projectName = $(this).find(".project-name").text();
    $(this)
      .find(".overlay")
      .append('<div class="project-name">' + "" + "</div>");
  });
});

// Select the form and message input elements
const form = document.querySelector("#contact-form");
const messageInput = document.querySelector("#message");

// Listen for the Enter key press event on the message input field
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the user's input values
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // Validate the email address using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  

  // Show a popup message to the user
  alert(
    `${name} We have received your message. Thank you for reaching out to us.`
  );

  // Reset the form field
  form.reset();

});
