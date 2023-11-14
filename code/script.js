// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const accordion = document.querySelector(".accordion");

// Check if the accordion element exists before using it
if (accordion) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post, index) => {
        const title = document.createElement("div");
        title.classList.add("title");
        title.setAttribute("id", `section${index + 1}`);
        title.textContent = post.title;

        const description = document.createElement("div");
        description.classList.add("description");
        description.innerHTML = `<p>${post.body}</p>`;

        title.addEventListener("click", toggle);

        accordion.appendChild(title);
        accordion.appendChild(description);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
} else {
  console.error("Accordion element not found");
}