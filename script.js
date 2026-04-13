<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">

<style>
body {
font-family: Arial;
background: #111;
color: white;
text-align: center;
padding: 40px;
}

.box {
background: #1c1c1c;
padding: 20px;
border-radius: 10px;
width: 300px;
margin: auto;
}

input {
padding: 10px;
width: 100%;
margin-top: 10px;
}

button {
padding: 10px;
width: 100%;
margin-top: 10px;
cursor: pointer;
}

.result {
margin-top: 15px;
padding: 10px;
background: #000;
border-radius: 5px;
}

.pricing {
margin-top: 40px;
background: #1c1c1c;
padding: 20px;
border-radius: 10px;
width: 300px;
margin-left: auto;
margin-right: auto;
}
</style>

</head>
<body>

<div class="box">
<h2>Sprawdź kod</h2>

<input id="code" placeholder="Wpisz kod">
<button onclick="checkCode()">Sprawdź</button>

<div class="result" id="result">
Wpisz kod
</div>
</div>

<div class="pricing">
<h2>Cennik</h2>
<p>Badania podstawowe - 10000$</p>
<p>Badania podstawowe dla K9/R9 - 5000$</p>
<p>Badania specjalistyczne - 15000$</p>
<p>Podstawowe szczepienia - 4000$</p>
<p>Dodatkowe szczepienia - 5000$</p>
<p>Wprowadzenie chipu - 1000$</p>
  <p>Kastracja - 15000</p>
  <p>Sterylizacja - 15000</p>
</div>

<script>
const codes = {
"305698256": "Pies Blaze, Następne szczepienie:",
};

function checkCode() {
let code = document.getElementById("code").value;
let result = document.getElementById("result");

if (codes[code]) {
result.innerText = codes[code];
} else {
result.innerText = "Kod nie istnieje";
}
}
</script>

</body>
</html>