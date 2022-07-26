document.getElementById("head").innerHTML = `
<link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="icons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
<link rel="manifest" href="manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-title" content="Jonathan" />
<meta name="apple-mobile-web-app-status-bar-style" content="white" />
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
const mobnav = `<nav class="nomargin">
<div class="navbar">
  <div class="container nav-container">
  <input class="checkbox" type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>  
    <div class="logo center">
      <a href="index.html"><img src="JFC-Logo-Round.png" height="50"></a>
  </div>
    <div class="menu-items">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="products.html">Products</a></li>
      <li><a href="#orderSection">Order</a></li>
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
	try {
		document.getElementById(
			"logo"
		).innerHTML = `<img class="fit" src="JFC-Logo-Round.png" />`;
	} catch (error) {}
	document.getElementById("mobBack");
	document.getElementById("nav").innerHTML = mobnav;
	console.log("You are using Mobile");
} else {
	try {
		document.getElementById(
			"logo"
		).innerHTML = `<img class="fit" src="JFC-Logo-Full.png" />`;
	} catch (error) {}

	document.getElementById("nav").innerHTML = nonmobnav;
	console.log("You are using Desktop");
}

// document.getElementById('hidden')
