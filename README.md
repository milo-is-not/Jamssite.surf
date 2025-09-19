<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Jam's Site</title>
  <style>
    body {
      background-color: #000000;
      background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
      background-repeat: repeat;
      background-size: auto;
      background-blend-mode: screen;
      filter: brightness(1.6);
      color: #00ff00;
      font-family: "Comic Sans MS", cursive, sans-serif;
      text-align: center;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
    }
    h1 {
      color: #00ff00;
      text-shadow: 2px 2px #0000ff;
      display: inline-block;
      font-size: 72px;
      transform: rotate(-5deg);
      margin-top: 100px;
      margin-bottom: 60px;
    }
    .content {
      flex: 1;
      max-width: 800px;
    }
    .nav {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      gap: 100px;
    }
    .nav a {
      display: inline-block;
      text-align: center;
      color: cyan;
      font-size: 24px;
      text-decoration: none;
      font-weight: bold;
    }
    .nav img {
      width: 128px;
      height: 128px;
      display: block;
      margin: 0 auto;
      border: 2px solid #ffffff;
      background: linear-gradient(145deg, #c0c0c0, #e0e0e0);
      padding: 8px;
      box-shadow: 0 0 10px rgba(0,255,255,0.6), 0 0 20px rgba(0,255,255,0.4);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    .nav img:hover {
      box-shadow: 0 0 20px rgba(0,255,255,0.9), 0 0 40px rgba(0,255,255,0.6);
      transform: scale(1.1);
    }
    .nav span {
      display: block;
      margin-top: 10px;
      font-family: "MS Sans Serif", Arial, sans-serif;
      color: white;
      font-size: 20px;
      text-shadow: 1px 1px #000000;
    }
    .ad {
      width: 200px;
      background: #111;
      color: #ff0;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      padding: 20px;
      margin-top: 100px;
      border: 3px solid #f00;
      animation: flash 1s infinite alternate, scrollText 5s linear infinite;
    }
    @keyframes flash {
      0% { color: #ff0; box-shadow: 0 0 5px #ff0; }
      50% { color: #0ff; box-shadow: 0 0 15px #0ff; }
      100% { color: #f0f; box-shadow: 0 0 25px #f0f; }
    }
    @keyframes scrollText {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    footer {
      margin-top: 80px;
      padding: 20px;
      font-size: 14px;
      color: cyan;
    }
    footer img {
      width: 88px;
      height: 31px;
      margin: 5px;
    }
  </style>
</head>
<body>
  <div class="ad">🐶 Dogs and 🐱 Cats available in your area ;)</div>
  
  <div class="content">
    <h1>Jam's Site</h1>

    <div class="nav">
      <a href="about.html">
        <img src="computer.png" alt="About Me">
        <span>About Me</span>
      </a>
      <a href="art.html">
        <img src="paint.png" alt="Art Work">
        <span>Art Work</span>
      </a>
    </div>

    <footer>
      <p><small>© 1999 Jam's Site - Best viewed in Netscape Navigator 4.0 or Internet Explorer 5.0 at 800x600 resolution.</small></p>
      <p>
        <img src="https://www.w3.org/Icons/valid-html401" alt="Valid HTML 4.01">
        <img src="https://www.w3.org/Icons/valid-css" alt="Valid CSS">
        <img src="https://www.webpagesthatsuck.com/images/under_construction.gif" alt="Under Construction">
      </p>
    </footer>
  </div>

  <div class="ad">🐶 Dogs and 🐱 Cats available in your area ;)</div>
</body>
</html>
