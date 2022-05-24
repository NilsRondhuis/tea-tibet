const refs = {
  forms: document.querySelectorAll(".js-form"),
  inputNames: document.querySelectorAll(".form-input-name"),
  inputPhones: document.querySelectorAll(".form-input-phone"),
  errorMessageNames: document.querySelectorAll(".form-name-error"),
  errorMessagePhones: document.querySelectorAll(".form-phone-error"),
  btns: document.querySelectorAll(".js_submit"),
  successSubmit: document.querySelector(".success-submit"),
  errorSubmit: document.querySelector(".error-submit"),
};

refs.forms.forEach((input) => {
  input.addEventListener("input", handleErrorInput);
});

function handleSuccessSubmit() {
  refs.successSubmit.classList.add("is-show-message");

  setTimeout(() => {
    refs.successSubmit.classList.remove("is-show-message");
  }, 5000);
}

function handleErrorSubmit() {
  refs.errorSubmit.classList.add("is-show-message");
  setTimeout(() => {
    refs.errorSubmit.classList.remove("is-show-message");
  }, 5000);
}

function handleErrorInput(e) {
  const { name, value } = e.target;

  if (name === "name") {
    errorInputName(value);
  }
  if (name === "phone") {
    errorInputPhone(value);
  }
}

function errorInputPhone(value) {
  const { errorMessagePhones, btns } = refs;

  if (/[a-zA-Zа-яїёА-ЯЁЇ]/g.test(value)) {
    errorMessagePhones.forEach((errorMessage) => {
      errorMessage.textContent =
        "Поле Телефон не повинно містити в себе букви.";
      errorMessage.classList.remove("visually-hidden");
    });
    disabledBtnSubmit(btns);
  } else {
    errorMessagePhones.forEach((errorMessage) => {
      errorMessage.classList.add("visually-hidden");
    });
    enabledBtnSubmit(btns);
  }
}

function errorInputName(value) {
  const { errorMessageNames, btns } = refs;

  if (/\d/g.test(value)) {
    errorMessageNames.forEach((errorMessage) => {
      errorMessage.textContent = "Поле Ім'я не повинно містити в себе цифри.";
      errorMessage.classList.remove("visually-hidden");
    });
    disabledBtnSubmit(btns);
  } else {
    errorMessageNames.forEach((errorMessage) => {
      errorMessage.classList.add("visually-hidden");
    });
    enabledBtnSubmit(btns);
  }
}

function disabledBtnSubmit(btns) {
  btns.forEach((btn) => {
    btn.setAttribute("disabled", "true");
  });
}
function enabledBtnSubmit(btns) {
  btns.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
}

export { handleSuccessSubmit, handleErrorSubmit };

// refs.forms.forEach((form) => {
//   form.addEventListener("submit", handleSubmit);
// });

// function handleSubmit(e) {
//   e.preventDefault();
//   const { name, phone } = e.target.elements;
//   const { errorMessageNames, errorMessagePhones } = refs;

//   if (name.value === "") {
//     errorMessageNames.forEach((errorMessage) => {
//       errorMessage.textContent = "Поле Ім'я не може бути пустим.";
//       errorMessage.classList.remove("visually-hidden");
//     });
//     return;
//   }
//   if (phone.value === "") {
//     errorMessagePhones.forEach((errorMessage) => {
//       errorMessage.textContent = "Поле Телефон не може бути пустим.";
//       errorMessage.classList.remove("visually-hidden");
//     });
//     return;
//   }

//   const data = {
//     name: name.value,
//     phone: phone.value,
//   };

//   console.log(data);
// }
