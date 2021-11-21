const createFooter = () => {
    let footer = document.querySelector("footer");

    footer.innerHTML = `
        <div class="footer-content">
            <img src="./img/logo2.jpg" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">wathc</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">wathc</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about us</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, vel dolor porro minima vero nemo, nisi eum sit vitae asperiores cumque ducimus delectus et similique natus repudiandae nobis iste quas.</p>
        <p class="info">support emails - helpline@clothing.com, customersupport@clothing.com</p>
        <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privercy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();