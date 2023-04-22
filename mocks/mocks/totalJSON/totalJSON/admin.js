let addProduct = async () => {
  let img = document.getElementById("image").value;
  let id = document.getElementById("id").value;
  let title = document.getElementById("title").value;
  let brand = document.getElementById("brand").value;
  let price = document.getElementById("price").value;

  let obj = {
    image: img,
    id: id,
    title,
    brand,
    price,
  };

  let res = await fetch(`http://localhost:4000/products`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

let deleteProduct = async () => {
  let id = document.getElementById("idDelete").value;

  let res = await fetch(`http://localhost:4000/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

let putProduct = async () => {
  let id = document.getElementById("idPut").value;

  let res = await fetch(`http://localhost:4000/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      image:
        "https://lh3.googleusercontent.com/ogw/AAEL6sh6UOv_pfDOadWogtN4BX4NO88o72Gi8mQlGLW_=s32-c-mo",
      id: id,
      title: "tshirt",
      brand: "puma",
      price: 1254,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

let patchProduct = async () => {
  let id = document.getElementById("idpatch").value;

  let res = await fetch(`http://localhost:4000/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      price: 2501,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
