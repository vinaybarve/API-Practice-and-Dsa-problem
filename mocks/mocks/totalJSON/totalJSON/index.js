const url = "http://localhost:4000/products";
const page = document.getElementById("page");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const handlePage = (p) => {
  page.innerText = p || 1;

  if (page.innerText == 1) {
    prev.setAttribute("disabled", "disabled");
  } else {
    prev.removeAttribute("disabled", "disabled");
  }

  getData();
};

window.onload = () => {
  handlePage();
};
prev.addEventListener("click", () => {
  handlePage(+page.innerText - 1);
});

next.addEventListener("click", () => {
  handlePage(+page.innerText + 1);
});

let getData = async () => {
  const loading = document.getElementById("loading");
  loading.classList.remove("display_none");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.classList.add("display_none");
  let order = document.getElementById("sorting").value;
  let brand = document.getElementById("filtering").value;
  let page = document.getElementById("page").innerText;
  let query = document.getElementById("query").value;

  let obj = {};
  if (order) {
    obj._sort = "price";
    obj._order = order;
  }
  if (brand) {
    obj.brand = brand;
  }
  if (page) {
    obj._page = page;
    obj._limit = 10;
  }
  if (query) {
    obj.q = query;
  }

  let urlsearch = new URLSearchParams(obj);

  let res = await fetch(`http://localhost:4000/products?${urlsearch}`);

  let data = await res.json();
  // console.log(data)
  loading.classList.add("display_none");
  mainContainer.classList.remove("display_none");

  appendData(data);
};

let appendData = (data) => {
  //console.log(data)

  let container = document.getElementById("mainContainer");
  container.innerText = null;

  data.forEach((ele, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "product");

    let img = document.createElement("img");
    img.src = ele.image1;

    let title = document.createElement("p");
    title.innerText = ele.title;

    let brand = document.createElement("h3");
    brand.innerText = ele.brand;

    let price = document.createElement("p");
    price.innerText = `₹ ${ele.price}`;

    let btn = document.createElement("button");
    btn.innerText = "add to cart";
    btn.addEventListener("click", function () {
      addTocart(ele);
    });

    div.append(img, title, brand, price, btn);

    container.append(div);
  });
};

let addTocart = (ele) => {
  let arr = JSON.parse(localStorage.getItem("products")) || [];
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == ele.id) {
      alert("Already Placed order");
      flag = true;
      return;
    }
  }
  if (flag == false) {
    arr.push(ele);

    localStorage.setItem("products", JSON.stringify(arr));
    alert("prduct added successfully");
  }
};

let sorting = document.getElementById("sorting");

sorting.addEventListener("change", function () {
  getData();
});

let filtering = document.getElementById("filtering");

filtering.addEventListener("change", function () {
  getData();
});

let query = document.getElementById("filtering");

let id;

let debounce = (search, time) => {
  if (id) {
    clearInterval(id);
  }
  id = setTimeout(() => {
    search();
  }, time);
};

let search = () => {
  getData();
};
