document.getElementById("head").innerHTML = `
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-title" content="Jonathan" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<link rel="stylesheet" href="./style.css" />
<link rel="stylesheet" href="aos.css"> 
<script type="module">
   import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';
   const el = document.createElement('pwa-update');
   document.body.appendChild(el);
</script>
<meta charset="utf-8" />
<meta name="description" content="JForCell" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
`; //head
const mobnav = `<nav>
<div class="navbar">
  <div class="container nav-container">
      <input class="checkbox" type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>  
    <center>
      <a href="index.html"><img src="JFC-Logo-Round.png" height="50"></a>
  </center>
    <div class="menu-items">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/products.html">Products</a></li>
      <li><a href="/#orderSection">Order</a></li>
    </div>
  </div>
</div>
</nav>`;
const nonmobnav = `<nav>
<a href="index.html">
    <img alt="Logo" src="JFC-Logo-Full.png" height="35" />
</a>
<ul>
    <li>
        <a href="about.html">About JForCell</a>
    </li> 
    <li>
        <a href="/product.html">
            Products
        </a>
        <ul>
        
            <li>
            <a href="/product1.html">
            Product 1
        </a>
            <a href="/product2.html">
            Product 2
        </a>
        <a href="/product3.html">
        Product 3
        </a>
            </li>
        </ul>
    </li>
    <li><a href="/#orderSection">Order</a></li>
</ul>
</nav>`; //nav
// import "./pwabuilder-sw";

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
	document.getElementById(
		"logo"
	).innerHTML = `<img class="fit" src="JFC-Logo-Round.png" />`;
	document.getElementById("nav").innerHTML = mobnav;
	console.log("You are using Mobile");
} else {
	document.getElementById(
		"logo"
	).innerHTML = `<img class="fit" src="JFC-Logo-Full.png" />`;
	document.getElementById("nav").innerHTML = nonmobnav;
	console.log("You are using Desktop");
}
