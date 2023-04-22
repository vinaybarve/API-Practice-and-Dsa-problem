const getData = async () => {
  await fetch(`http://localhost:3000/posts`)
    .then((res) => res.json())
    .then((res) => appendData(res));
};

const appendData = (arr) => {
  const container = document.querySelector("#container");

  container.innerHTML = null;

  arr.map((ele) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card2");

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
        </div>
        `;
    const browseBtn = document.createElement("button");
    browseBtn.innerText = "Brows";
    browseBtn.addEventListener("click", function () {
      createModal(ele);
    });

    card.append(browseBtn);
    container.append(card);
  });
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

  const modalcard = document.createElement("div");
  modalcard.innerHTML = `
    <div>
    <img width="200px" src=${payload.image_url} />
    </div>
    <div>
    <h3>${payload.book_name}</h3>
    <p>${payload.author}</p>
    <p>${payload.genre}</p>
    <p>${payload.edition}</p>
    <p>${payload.publisher}</p>
    <p>${payload.cost}</p>
    </div>
    `;
  const closeBtm = document.createElement("button");
  closeBtm.innerText = "Cancel";
  closeBtm.addEventListener("click", closeModal);

  const confromBtn = document.createElement("button");
  confromBtn.innerText = "Confirm";
  confromBtn.addEventListener("click", function () {
    BorrowFunction(payload);
  });

  modalcard.append(closeBtm);
  modalcard.append(confromBtn);
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalBody);
  modalContent.append(modalcard);
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

const BorrowFunction = async (payload) => {
  const obj = {
    borrowed: true,
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


const FilterFunc = async () => {
  const filterBy = document.querySelector("#filter").value;
  if (filterBy == "") {
    getData();
  } else {
    const data = await fetch(`http://localhost:3000/posts`);
    const actualData = await data.json();

    const filteredData = actualData.filter((ele) => ele.genre === filterBy);

    appendData(filteredData);
  }
};

const SortFunc = async () => {
  const sortBy = document.querySelector("#sort").value;
  if (sortBy == "") {
    getData();
  } else {
    const data = await fetch(
      `http://localhost:3000/posts/?_sort=cost&_order=${sortBy}`
    );
    const actualData = await data.json();

    appendData(actualData);
  }
};

getData();
