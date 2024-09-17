// const getData = () => {
//     fetch('https://api.example.com/data')  // Replace with your API endpoint
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();  // Parse the JSON data from the response
//   })
//   .then(data => {
//     console.log(data);  // Handle the data here
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });
// }

const dataArray = [
  {
    title: "<span>NORDEUS</span>",
    PIB: "PIB: 106525606",
    maticniBroj: "Matični broj: 5123123",
    body: "11070 BEOGRAD<br>MILUTINA MILANKOVICA 11<br><br>PREDUZEĆE ZA PROJEKTOVANJE I RAZVOJ SOFTVERA DOO",
    url: "https://nordeus.com/",
  },
  {
    title: "<span>ENDAVA</span>",
    PIB: "PIB: 100026798",
    maticniBroj: "Matični broj: 06425747",
    body: "11070 BEOGRAD<br>MILUTINA MILANKOVICA 9-Đ<br><br>PRIVREDNO DRUŠTVO DOO",
    url: "https://www.endava.com/",
  },
  {
    title: "<span>KPMG</span>",
    PIB: "PIB: 100058593",
    maticniBroj: "Matični broj: 17148656",
    body: "11000 BEOGRAD<br>KRALJICE NATALIJE 11<br><br>DRUŠTVO ZA KONSALTING I REVIZIJU DOO",
    url: "https://kpmg.com/rs/en/home.html",
  },
  {
    title: "<span>DELOITTE</span>",
    PIB: "PIB: 100048772",
    maticniBroj: "Matični broj: 07770413",
    body: "11000 BEOGRAD<br>TERAZIJE 8<br><br>PREDUZEĆE ZA REVIZIJU I KONSALTING DOO",
    url: "https://www.deloitte.com/ce/en.html",
  },
];

const cardContainer = document.querySelector(".cards-container");

console.log(cardContainer);

const numberOfElements = 8;

const addCards = (data) => {
  data.forEach((object) => {
    const data = `
    <h2>${object.title}</h2>
    <hr>
    <h3>${object.PIB}</h3>
    <h3>${object.maticniBroj}</h3>
    <p>${object.body}.</p>
     <a class="card-btn" href=${object.url}>Take me there!</a>`;

    const card = document.createElement("div");
    card.className = "company-card";
    card.innerHTML = data;
    cardContainer.appendChild(card);
  });
};

addCards(dataArray);
