// Функція для завантаження Резюме при клікові на кнопку

function downloadFile() {
  const fileUrl = "./Resume.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileUrl.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Слайдер

const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");
const galleryItem = document.querySelectorAll(".gallery-item");
const itemArray = Array.from(galleryItem);
const galleryList = document.querySelector(".gallery-list");

rightBtn.addEventListener("click", () => {
  const lastSlider = itemArray.pop();
  itemArray.unshift(lastSlider);
  galleryList.innerHTML = "";
  itemArray.forEach(image => {
    const listItem = document.createElement("div");
    listItem.appendChild(image);
    galleryList.appendChild(listItem);
    galleryList.appendChild(leftBtn);
    galleryList.appendChild(rightBtn);
  });
});

leftBtn.addEventListener("click", () => {
  const firstImage = itemArray.shift();
  itemArray.push(firstImage);
  galleryList.innerHTML = "";
  itemArray.forEach(image => {
    const listItem = document.createElement("div");
    listItem.appendChild(image);
    galleryList.appendChild(listItem);
    galleryList.appendChild(leftBtn);
    galleryList.appendChild(rightBtn);
  });
});
