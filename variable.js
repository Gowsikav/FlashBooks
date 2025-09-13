var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel-popup");
cancelbutton.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();

  var bookTitle = booktitleinput.value;
  if (bookTitle === "" || !isNaN(bookTitle) || /\d/.test(bookTitle)) {
    alert("Please enter a valid book title that is not empty or a number");
    booktitleinput.value = "";
    return;
  }
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const date = `${year}-${month}-${day} ${hours}:${minutes}`;

  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>
          ${bookdescriptioninput.value}
        </p>
        <p>${date}</p>
        <button onclick="deletebook(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
  bookauthorinput.value = "";
  bookdescriptioninput.value = "";
  booktitleinput.value = "";
});
function deletebook(event) {
  let r = confirm("Want to delete?");
  if (r) {
    event.target.parentElement.remove();
  }
}
