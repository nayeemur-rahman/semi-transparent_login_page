const loginHeadline = document.querySelector("#login-headline");
const usernameInputBox = document.querySelector("#username");
const passwordInputBox = document.querySelector("#password");
const submitBtn = document.querySelector("#login-btn");
const ltpTogglerBtn = document.querySelector("#ltp-toggler");
loginHeadline.addEventListener("click", () => {
  usernameInputBox.focus();
});

usernameInputBox.addEventListener("keypress", (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    if (usernameInputBox.value == "") {
      return;
    }
    passwordInputBox.focus();
  }
});
passwordInputBox.addEventListener("keypress", (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    if (usernameInputBox.value == "" || passwordInputBox.value.length < 6) {
      return;
    } else {
      submitBtn.click();
    }
  }
});
ltpTogglerBtn.addEventListener("click", () => {
  const container = document.querySelector("#container").classList;
  if (container.contains("landscape")) {
    container.remove("landscape");
    ltpTogglerBtn.innerHTML = "Landscape<br>view";
  } else {
    container.add("landscape");
    ltpTogglerBtn.innerHTML = "Portrait<br>view";
  }
});
