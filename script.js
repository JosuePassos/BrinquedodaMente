
const WHATSAPP_PHONE = "4799766769";

// Replace these sample entries with your real products and image paths.
const products = [
  {
    id: 1,
    name: "Alfabeto",
    category: "Novidades",
    description: "Quebra-cabeça educativo com letras e figuras associativas que estimulam a alfabetização, a coordenação motora fina e o reconhecimento das letras de forma lúdica.",
    price: 49.9,
    image: "images/alfabeto.jpeg",
  },
  {
    id: 2,
    name: "Mapa",
    category: "Novidades",
    description: "Mapa do Brasil com estados removíveis e encaixes que ajudam a explorar a geografia, reconhecer os estados e desenvolver a percepção espacial de forma interativa.",
    price: 79.9,
    image: "images/mapa.jpeg",
  },
  {
    id: 3,
    name: "Números",
    category: "Novidades",
    description: "Material educativo que associa números às suas quantidades por meio de encaixes, estimulando o raciocínio lógico, a contagem e a coordenação motora fina.",
    price: 99.9,
    image: "images/numeros.jpeg",
  },
];

const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const orderStatus = document.querySelector("#order-status");

function formatPrice(price) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

function setupCategories() {
  const categories = [...new Set(products.map((product) => product.category))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const visual = document.createElement("div");
visual.className = "product-visual";

const image = document.createElement("img");
image.src = product.image;
image.alt = product.name;
image.loading = "lazy";

visual.appendChild(image);

  const info = document.createElement("div");
  info.className = "product-info";

  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.category;

  const name = document.createElement("h3");
  name.textContent = product.name;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const bottom = document.createElement("div");
  bottom.className = "product-bottom";

  const price = document.createElement("span");
  price.className = "product-price";
  price.textContent = formatPrice(product.price);

  const orderButton = document.createElement("button");
  orderButton.className = "order-button";
  orderButton.type = "button";
  orderButton.dataset.productId = String(product.id);
  orderButton.textContent = "Pedir pelo WhatsApp";

  bottom.append(price, orderButton);
  info.append(category, name, description, bottom);
  card.append(visual, info);
  return card;
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const selectedCategory = categoryFilter.value;
  const filteredProducts = products.filter((product) => {
    const matchesSearch = [product.name, product.description, product.category]
      .some((value) => value.toLocaleLowerCase("pt-BR").includes(searchTerm));
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  productGrid.replaceChildren(...filteredProducts.map(createProductCard));
  resultCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? "produto" : "produtos"}`;
  emptyState.hidden = filteredProducts.length > 0;
}

function orderProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    return;
  }

  const phone = WHATSAPP_PHONE.replace(/\D/g, "");
  if (!phone) {
    orderStatus.textContent = "Configure o número do WhatsApp no arquivo script.js para receber pedidos.";
    return;
  }

  const message = `Olá! Tenho interesse em ${product.name} (${formatPrice(product.price)}).`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  orderStatus.textContent = `Pedido de ${product.name} aberto no WhatsApp.`;
}

setupCategories();
renderProducts();

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (button) {
    orderProduct(Number(button.dataset.productId));
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
