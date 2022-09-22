import "./index.css";
function MainPage() {
  return (
    <div>
      <header id="header">
        <div id="header-area">
          <img src="./images/icons/logo.png" alt="" />
        </div>
      </header>
      <main id="body">
        <section id="banner">
          <img src="./images/banners/banner1.png" alt="" />
        </section>
        <h1>판매되는 상품들</h1>
        <div id="product-list"></div>
      </main>
      <div id="footer">sa</div>
    </div>
  );
}

export default MainPage;
