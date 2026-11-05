console.log("3주차 시작");

const wishButtons = document.querySelectorAll(".wish-button");
const wishList=document.querySelector(".wish-list");

wishButtons.forEach((button) => {
    let liked = false;
    let wishItem = null;
    
    button.addEventListener("click", () => {
        liked = !liked;

        if (liked) {
            button.textContent = "찜 완료";

            wishItem = document.createElement("div");
            wishItem.textContent = button.dataset.title;
            wishList.appendChild(wishItem);
            wishItem.classList.add("wish-item");

        } else {
            button.textContent = "찜";
            wishItem.remove();
        }
        button.classList.toggle("active");

        console.log(button.dataset.title);
    })
})

const searchForm = document.querySelector(".search-section form");
const movieInput = document.querySelector("#movie");
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const keyword = movieInput.value.trim();

    if (keyword === "") {
        alert("검색어를 입력하세요.")
        return;
    }
    console.log("검색한 영화:", keyword);
});

const detailButtons = document.querySelectorAll(".detail-button");
const detailModal = document.querySelector(".detail-modal");

detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
        detailModal.classList.add("open");
    });
});

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
    detailModal.classList.remove("open");
});