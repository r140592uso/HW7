let mainwrapperPost = document.getElementById("post-wrapperBlock");
let postOverlay = document.getElementById("overlay");
let overlayContent = document.getElementById("postcontent");
let overlayClose = document.getElementById("close");

function ajax(url, callback) {
  let requestPost = new XMLHttpRequest();
  requestPost.open("GET", url);
  requestPost.addEventListener("load", function () {
    let dataResponse = JSON.parse(requestPost.responseText);
    callback(dataResponse);
  });
  requestPost.send();
}
function createPostRenderLogic(item) {
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("posts");
  divWrapper.setAttribute("data-id", item.id);

  const h3Post = document.createElement("h3");
  h3Post.innerText = item.id;

  const h2Post = document.createElement("h2");
  h2Post.innerText = item.title;

  const deletebutton = document.createElement("button");
  deletebutton.textContent = "Delete this post";
  deletebutton.setAttribute("data-id", item.id);

  divWrapper.appendChild(h3Post);
  divWrapper.appendChild(h2Post);
  divWrapper.appendChild(deletebutton);

  divWrapper.addEventListener("click", function (event) {
    const id = event.target.getAttribute("data-id");
    postOverlay.classList.add("activeoverlay");
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    ajax(url, function (dataResponse) {
      let p = document.createElement("p");
      p.classList.add("posttext");
      p.innerText = item.body;
      overlayContent.appendChild(p);
    });
  });
  deletebutton.addEventListener("click", function (event) {
    event.stopPropagation();
    const id = event.target.getAttribute("data-id");
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then(() => divWrapper.remove());
  });
  mainwrapperPost.appendChild(divWrapper);
}
overlayClose.addEventListener("click", function () {
  postOverlay.classList.remove("activeoverlay");
  overlayContent.innerHTML = " ";
});
ajax("https://jsonplaceholder.typicode.com/posts", function (dataResponse) {
  dataResponse.forEach((item) => {
    createPostRenderLogic(item);
  });
});
