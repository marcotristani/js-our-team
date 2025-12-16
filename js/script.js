const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];


//Richiamo riferimenti in pagina
const cardContainer = document.querySelector(".card-container");

//dichiaro variabile dove andare a stampare la stringa con il testo html della cards
let outputCards = "";

//faccio un ciclo per destrutturare gli oggetti e andare a implementarli nel posto giusto della stringa cards
for (let i = 0; i < teamMembers.length; i++) {
  //Destrutturo oggetto singolo array
  const { name, role, email, img } = teamMembers[i];
  outputCards += `
         <div class="card-member">
           <div class="image-member">
             <img src="${img}" alt="${name}" />
           </div>
           <div class="description-member">
            <h3>${name.toUpperCase()}</h3>
            <p>${role}</p>
            <a href="#">${email}</a>
           </div>
          </div>
`;
}
// Output
cardContainer.innerHTML = outputCards;
