// products data of store
const products = [
  {
    id: 1,
    name: "سيارة",
    price: "5000YR",
    image: "../images/car 3.jpg",
    company: "هايبر العاب",
    description: "سيارة الوحش تتميز بالقوة والصلابة وبطارية تدوم كثيرا",
    rating: 3,
  },
  {
    id: 2,
    name: "هاتف",
    price: "1000YR",
    image: "../images/phone.jpg",
    company: "كميكو لصناعة الالعاب",
    description: "لعبة الهاتف الذكي تجعل طفلا سعيدا ",
    rating: 4,
  },
  {
    id: 3,
    name: "دمية ناطقة",
    price: "1500YR",
    image: "../images/gierl.jpg",
    company: "الطفل الذكي",
    description: "دمية جميلة تغني ويوجد ملابس اضافية وتوابع معها",
    rating: 2,
  },
  {
    id: 4,
    name: "سبيدرمان",
    price: "700YR",
    image: "../images/spiderman.jpg",
    company: "الرائد لمستلزمات الاطفال",
    description: "اشعر ابنك انه من الابطال الخارقين",
    rating: 5,
  },
];

//elements of dom
const slider = document.getElementById("slider");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalCompany = document.getElementById("modalCompany");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalStars = document.getElementById("modalStars");
const modalClose = document.getElementById("modalClose");


function renderProducts() {
  slider.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "min-w-[250px] bg-white shadow rounded-lg p-4 cursor-pointer transition hover:scale-105";
    card.setAttribute("data-index", index);

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded mb-4">
      <h4 class="text-lg font-bold mb-1">${product.name}</h4>
      <p class="text-blue-600 font-semibold mb-2">${product.price}</p>
      <div class="text-yellow-500 text-lg">
        ${renderStars(product.rating)}
      </div>
    `;

    card.addEventListener("click", () => openModal(index));
    slider.appendChild(card);
  });
}

function renderStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }
  return stars;
}

// Slider navigation
document.getElementById("next").addEventListener("click", () => {
  slider.scrollLeft += 300;
});

document.getElementById("previes").addEventListener("click", () => {
  slider.scrollLeft -= 300;
});

// auto slide every 5 seconds
setInterval(() => {
  slider.scrollLeft += 300;
}, 5000);

// Open modal
function openModal(index) {
  const product = products[index];
  modal.classList.remove("hidden");

  modalImg.src = product.image;
  modalName.textContent = product.name;
  modalCompany.textContent = `شركة ${product.company}`;
  modalDesc.textContent = product.description;
  modalPrice.textContent = product.price;

  // interactive stars
  modalStars.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.textContent = i <= product.rating ? "★" : "☆";
    star.className = "hover:scale-125 transition";
    star.addEventListener("click", () => updateRating(index, i));
    modalStars.appendChild(star);
  }
}

// Close modal
modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// card update 
function updateRating(index, newRating) {
  products[index].rating = newRating;
  renderProducts(); 
  openModal(index); 
}
renderProducts();

const toggleBtn = document.getElementById('menu-toggle');
    const menuMobile = document.getElementById('menu-mobile');

    toggleBtn.addEventListener('click', () => {
      menuMobile.classList.toggle('hidden');
      });