// Aller sur la page d’inscription
// https://app.exchangerate-api.com/sign-up

// Créer un compte
// Email
// Mot de passe
// Valider email
// Récupérer clé API
// Une fois connecté :
// Dashboard → Your API Key
// Tu verras un code comme :
// 1234567890abcdef
// remplace le dans la variable API_KEY ci-dessous

const API_KEY = "REPLACE-YOUR-KEY-HERE";

// DOM
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

// LOAD CURRENCIES
// objectif : charger les devises disponibles dans les selects

const loadCurrencies = async () => {
  try {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`,
    );
    const data = await res.json();

    const currencies = data.supported_codes;

    currencies.forEach(([code, name]) => {
      const option1 = new Option(`${code} - ${name}`, code);
      const option2 = new Option(`${code} - ${name}`, code);

      fromCurrency.add(option1);
      toCurrency.add(option2);
    });
  } catch (error) {
    resultDiv.textContent = "Error loading currencies";
  }
};

loadCurrencies();

// CONVERT FUNCTION

const convertCurrency = async () => {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount) {
    resultDiv.textContent = "Please enter an amount";
    return;
  }

  resultDiv.textContent = "⏳ Converting...";

  try {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`,
    );

    const data = await res.json();

    resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
  } catch (error) {
    resultDiv.textContent = "Conversion failed ❌";
  }
};

// SWITCH BUTTON
document.getElementById("switchBtn").addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
});

// EVENTS
document
  .getElementById("convertBtn")
  .addEventListener("click", convertCurrency);
