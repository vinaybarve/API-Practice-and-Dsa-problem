const Post = async () => {
  event.preventDefault();
  const obj = {
    image_url: document.querySelector("#image_url").value,
    book_name: document.querySelector("#book_name").value,
    author: document.querySelector("#author").value,
    genre: document.querySelector("#genre").value,
    edition: document.querySelector("#edition").value,
    publisher: document.querySelector("#publisher").value,
    cost: Number(document.querySelector("#cost").value),
    borrowed: false,
  };
  await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const getData = async () => {
  await fetch(`http://localhost:3000/posts`)
    .then((res) => res.json())
    .then((res) => appendData(res));
};

const appendData = (arr) => {
  const container = document.querySelector("#container");

  arr.map((ele) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    card.innerHTML = `
        <div>
            <img width="200px" src=${ele.image_url} />
        </div>
        <div>
            <h3>${ele.book_name}</h3>
            <p>${ele.author}</p>
            <p>${ele.genre}</p>
            <p>${ele.edition}</p>
            <p>${ele.publisher}</p>
            <p>${ele.cost}</p>
            <p>${ele.borrowed}</p>
        </div>
        `;

    const EditBtn = document.createElement("button");
    EditBtn.innerText = "Edit";
    EditBtn.addEventListener("click", function () {
      showModal(ele);
    });

    const DeleteBtn = document.createElement("button");
    DeleteBtn.innerText = "Delete";
    DeleteBtn.addEventListener("click", function () {
      deletePost(ele.id);
    });

    card.append(EditBtn, DeleteBtn);
    container.append(card);
  });
};

const deletePost = async (id) => {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const createModal = (payload) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", closeModal);

  const modalTitle = document.createElement("h2");
  modalTitle.textContent = payload.book_name;

  const modalBody = document.createElement("p");
  modalBody.textContent = payload.author;

  const formContainer = document.createElement("form");

  formContainer.innerHTML = `
    <input type='url' placeholder="Book Cover Image" id="Update_image_url">
    <input type='text' placeholder="Name of the book" id="Update_book_name">
    <input type='text' placeholder="Author of the book" id="Updated_author">
    <select id="Update_genre">
        <option value="">genre</option>
        <option value="Science">Science</option>
        <option value="Fiction">Fiction</option>
        <option value="History">History</option>
        <option value="Tech">Tech</option>
        <option value="Business">Business</option>
    </select>
    <select id="Update_edition">
        <option value="">Edition</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
    </select>
    <input type="text" placeholder="Publisher" id="Update_publisher">
    <input type="number" placeholder="Cost" id="Update_cost">
    <select id="Update_borrow" >
    <option value='' >Borrow</option>
    <option value='true' >true</option>
    <option value='false' >false</option>
    </select>
    <input type="submit">   
    `;
  formContainer.addEventListener("submit", function () {
    event.preventDefault();
    updateData(payload);
  });

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalBody);
  modalContent.append(formContainer);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
  modal.style.display = "block";
};

const showModal = (ele) => {
  createModal(ele);
};

const closeModal = () => {
  const modal = document.querySelector(".modal");
  document.body.removeChild(modal);
};

const updateData = async (payload) => {
  event.preventDefault();
  let obj = {
    image_url:
      document.querySelector("#Update_image_url").value || payload.image_url,
    book_name:
      document.querySelector("#Update_book_name").value || payload.book_name,
    author: document.querySelector("#Updated_author").value || payload.author,
    genre: document.querySelector("#Update_genre").value || payload.genre,
    edition: document.querySelector("#Update_edition").value || payload.edition,
    publisher:
      document.querySelector("#Update_publisher").value || payload.publisher,
    cost: Number(document.querySelector("#Update_cost").value) || payload.cost,
    borrowed:
      document.querySelector("#Update_borrow").value || payload.borrowed,
  };

  await fetch(`http://localhost:3000/posts/${payload.id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    // .then(res => getData())
    .catch((err) => console.log(err));
};

getData();
