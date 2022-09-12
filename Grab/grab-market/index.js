// 더미 데이터
axios
  .get("https://8bce70f8-579d-4b27-a9f2-bf7f4fbcec6a.mock.pstmn.io/products")
  .then((res) => {
    console.log(res);
    const products = res.data.products;
    let inHTML = "";

    for (let el of products) {
      inHTML += `
      <div class="product-card">
      <img
        class="product-img"
        src="${el.imageUrl}"
        alt=""
      />
      <div class="product-contents">
        <!-- span태그는 텍스트에 스타일을 먹일 때 많이 사용 -->
        <span class="product-name">${el.name}</span>
        <span class="product-price">${el.price}</span>
        <!-- 영역을 나눌때 많이 사용 div -->
        <div class="product-seller">
          <img
            class="product-avartar"
            src="./images/icons/avatar.png"
            alt=""
          />
          <span>${el.seller}</span>
        </div>
      </div>
      </div>`;
    }
    document.querySelector("#product-list").innerHTML = inHTML;
  });
