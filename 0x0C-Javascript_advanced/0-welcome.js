function welcome(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  new function displayFullName() {
    alert(`Welcome ${fullName}!`);

  };
}
