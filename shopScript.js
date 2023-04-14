async function searchFunc() {
  
  let keyword = document.getElementById("search-text").value;
  if (keyword == "" || keyword == null) {
    window.alert("Please Enter a keyword");
    return;
  }
  let newData = [];
  await fetch("data.json")
    .then((result) => result.json())
    .then((data) => {
      data?.data?.map((item) => {
        const catToSearch = item.category.toLowerCase();
        const brandToSearch = item.brand.toLowerCase();
        if (
          catToSearch.includes(keyword.toLowerCase()) ||
          brandToSearch.includes(keyword.toLowerCase())
        ) {
          newData.push(item);
        }
      });
    });

  proCont.innerHTML = "";
  mapData({ data: newData });
}
const proCont = document.getElementById("pro-container");

async function redirectHandler(item) {

  await localStorage.setItem("ProductDescription", JSON.stringify(item));

  setTimeout(() => {
    window.location.href = "./singleProduct.html";
  }, 2000);
}

function mapData(data, newData) {
  const products = data.data || newData;
  products.map((item) => {
    // Main Div
    let pro = document.createElement("div");
    pro.classList.add("pro");
    pro.addEventListener("click", (e) => {
      e.preventDefault();
      redirectHandler(item);
    });
    // //Card image
    let img = document.createElement("img");
    img.src = item.img;

    pro.appendChild(img);
    // // Desc
    let desc = document.createElement("div");
    desc.classList.add("desc");

    let category = document.createElement("span");
    category.innerHTML = item.category;
    desc.appendChild(category);
    let h5 = document.createElement("h5");
    h5.innerHTML = item.brand;
    desc.appendChild(h5);

    let stars = document.createElement("div");
    stars.classList.add("star");

    for (var i = 0; i < item.stars; i++) {
      let star = document.createElement("i");
      star.classList.add("fa-star");
      star.classList.add("fa");
      stars.appendChild(star);
    }

    desc.appendChild(stars);

    let price = document.createElement("h4");
    price.innerHTML = "₹ " + item.price;

    desc.appendChild(price);

    pro.appendChild(desc);

    // Cart Icon
    let iconBody = document.createElement("a");

    let icon = document.createElement("i");
    icon.classList.add("fal");
    icon.classList.add("fa-shopping-cart");
    icon.classList.add("cart");

    pro.appendChild(iconBody);
    proCont?.appendChild(pro);
    
  });
}

fetch("data.json")
  .then((result) => result.json())           
  .then((data) => mapData(data));
  