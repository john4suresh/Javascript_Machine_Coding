document.addEventListener("DOMContentLoaded", () => {
  const test = document.getElementById("test");

  test.addEventListener("click", (event) => {
    const target = event.target
    console.log({target})
  });
})