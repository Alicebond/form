"use strict";

const email = document.getElementById('mail')
const form = document.getElementsByTagName('form')[0];

email.addEventListener('input', event => {
  if (!email.value) return;
  if (email.validity.typeMismatch) {
    email.classList.remove('pass')
    email.classList.add('alert');
    email.setCustomValidity("I am expecting an e-mail addressssssssssss!")
  } else {
    email.setCustomValidity("");
    email.classList.remove('alert');
    email.classList.add('pass')
  }
})

const pwd = document.getElementById("password");
const confirmPwd = document.getElementById("confirm");
const indicator = document.getElementById("indicator");
pwd.addEventListener('input', () => {
  if (!pwd.value) return;
  if (pwd.validity.valueMissing) {
    pwd.classList.remove('pass');
    pwd.classList.add("alert");
    pwd.setCustomValidity(`Password should be at least ${pwd.minLenght} characters; you entered ${pwd.value.length}`)
  } else if (pwd.validity.tooShort) {
    pwd.classList.remove('pass');
    pwd.classList.add("alert");
    pwd.setCustomValidity(`Please fill out this field`)
  } else {
    pwd.classList.remove('alert')
    pwd.classList.add('pass')
    pwd.setCustomValidity("")
  }
})

confirmPwd.addEventListener('input', function (event) {
  if (!confirmPwd.value) return;
  if (confirmPwd.validity.valueMissing) {
    confirmPwd.classList.remove('pass');
    confirmPwd.classList.add("alert")
    confirmPwd.setCustomValidity(`Password should be at least ${confirmPwd.minLenght} characters; you entered ${confirmPwd.value.length}`)
  } else if (confirmPwd.validity.tooShort) {
    confirmPwd.classList.remove('pass');
    confirmPwd.classList.add("alert");
    confirmPwd.setCustomValidity(`Please fill out this field`)
  } else {
    confirmPwd.classList.remove('alert')
    confirmPwd.classList.add('pass')
    confirmPwd.setCustomValidity("")
  }
  if (pwd.value === confirmPwd.value) {
    confirmPwd.classList.remove('alert');
    confirmPwd.classList.add('pass');
    confirmPwd.setCustomValidity("")
  } else {
    confirmPwd.classList.remove('pass');
    confirmPwd.classList.add('alert');
    confirmPwd.setCustomValidity("Password don't match")
    event.preventDefault();
  }
})

form.addEventListener('submit', function (event) {
  if (!email.validity.valid || !pwd.validity.valid || !confirmPwd.validity.valid) {
    event.preventDefault();
  }
})
