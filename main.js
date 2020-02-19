const allAnimals = [
  {
    image: 'img/_0000_dino.png',
    name: 'Clive',
    color: 'Green',
    skill: 'Can reach the top shelf with a long neck',
    type: 'dino',
  },
  {
    image: 'img/_0001_dino.png',
    name: 'Don',
    color: 'Green',
    skill: 'Don can look under beds and find lost balls',
    type: 'dino',
  },
  {
    image: 'img/_0002_dino.png',
    name: 'Richie',
    color: 'Brown',
    skill: 'Richie can put a whole whoppers in his mouth',
    type: 'dino',
  },
  {
    image: 'img/_0003_dino.png',
    name: 'Rex',
    color: 'Green',
    skill: 'Rex can balance a ball on his noise without help',
    type: 'dino',
  },
  {
    image: 'img/_0004_dino.png',
    name: 'Mary',
    color: 'Green',
    skill: 'hornsMary can roast marshmallows on her ',
    type: 'dino',
  },
  //--------------------------------------------------------------- birds
  {
    image: 'img/_0005_bird.png',
    name: 'Chi Chi',
    color: 'To Many!!',
    skill: 'Chi Chi can ask for crackers in 3 different languages',
    type: 'bird',
  },
  {
    image: 'img/_0006_bird.png',
    name: 'Tweet',
    color: 'Green',
    skill: 'Tweet can beat anyone in a staring contest',
    type: 'bird',
  },
  {
    image: 'img/_0007_bird.png',
    name: 'Rodney',
    color: 'Yellow',
    skill: 'Rodney can open his own beer watching foot ball',
    type: 'bird',
  },
  {
    image: 'img/_0008_bird.png',
    name: 'Yogi',
    color: 'Blue',
    skill: 'Yogi can chirp the thong song by Sisco',
    type: 'bird',
  },
  {
    image: 'img/_0009_bird.png',
    name: 'Bing',
    color: 'White',
    skill: 'Bing can tell dirty joke while standing on one leg',
    type: 'bird',
  },
  // ----------------------------------------------cats
  {
    image: 'img/_0010_cat.png',
    name: 'Cole',
    color: 'Black',
    skill: 'Cole can catch squarls and leave their dead bodies on your porch',
    type: 'cat',
  },
  {
    image: 'img/_0011_cat.png',
    name: 'Snow',
    color: 'White',
    skill: 'Snow can hypnotize mice from 20 feet away',
    type: 'cat',
  },
  {
    image: 'img/_0012_cat.png',
    name: 'Toni',
    color: 'Tiger',
    skill: 'Can knock all of the boxes of Frosted Flakes off the shelf',
    type: 'cat',
  },
  {
    image: 'img/_0013_cat.png',
    name: 'Ming',
    color: 'Tan',
    skill: 'Ming can look at you and make you feel silly for calling his name',
    type: 'cat',
  },
  {
    image: 'img/_0014_cat.png',
    name: 'Yikes',
    color: 'White',
    skill: 'Yikes Can ignore you for days when her bowl is full ',
    type: 'cat',
  },
  {
    image: 'img/_0015_cat.png',
    name: 'Biggie',
    color: 'Grey',
    skill: 'Has the ability to make you want to give him all your love and kisses',
    type: 'cat',
  },
  {
    image: 'img/_0016_cat.png',
    name: 'Rumble',
    color: 'Orange',
    skill: 'Rumble is skilled at hunting toes as you walk by',
    type: 'cat',
  },
  {
    image: 'img/_0017_cat.png',
    name: 'Ringo',
    color: 'Tan',
    skill: 'Ring has the ability to sleep all day on his back to get belly rubs',
    type: 'cat',
  },
  //-------------------------------------------------- dogs
  {
    image: 'img/_0018_dog.png',
    name: 'Lucy',
    color: 'Ginger',
    skill: 'Returns the ball every time you throw it',
    type: 'dog',
  },
  {
    image: 'img/_0019_dog.png',
    name: 'Brolly',
    color: 'White',
    skill: 'Brolly can jump high enough to get the sandwich off the table',
    type: 'dog',
  },
  {
    image: 'img/_0020_dog.png',
    name: 'Roxy',
    color: 'Ginger',
    skill: 'Roxy can stay still in your purse as you shop',
    type: 'dog',
  },
  {
    image: 'img/_0021_dog.png',
    name: 'Dinky',
    color: 'Gold',
    skill: 'Dinky is a frisbee catching master even on windy days',
    type: 'dog',
  },
  {
    image: 'img/_0022_dog.png',
    name: 'Fido',
    color: 'Brown',
    skill: 'Fido collects socks and places then in his bed to chew on later',
    type: 'dog',
  },
  {
    image: 'img/_0023_dog.png',
    name: 'Dino',
    color: 'Tan',
    skill: 'Dino is able to balance himself on the rumba as it cleans the floor',
    type: 'dog',
  },
  {
    image: 'img/_0024_dog.png',
    name: 'Milo',
    color: 'Golden',
    skill: 'Milo has the ability to slide on wood floors when running real fast',
    type: 'dog',
  },
];



const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const printCards = (animals) => {
  let domString = '';
  for (let i = 0; i < animals.length; i += 1) {

    domString += `<div class="card text-center col-m d-inline-flex offset-">`;
    domString += ` <div class="card-header">`;
    domString += `<h5> ${animals[i].name}</h5>`;
    domString += `</div>`;
    domString += `<div class="card-body">`;
    domString += `<img src=${animals[i].image} alt="">`;
    domString += `<div>color</div>`;
    domString += `<h5 class="card-title">${animals[i].color}</h5>`;
    domString += `Skillz`;
    domString += `<p class="card-text">${animals[i].skill}</p>`;
    domString += `<a href="#contact" class="btn btn-primary">adopt</a>`;
    domString += `</div>`;
    domString += `<div class="card-footer text-muted">`;
    domString += `<div class="${animals[i].type}">`;
    domString += `<h5 class="${animals[i].type}">${animals[i].type}</h5>`;
    console.log('type', animals[i]);
    // if(animals[i].type === "cat") {
    //   domString += `<h5 class=${animals[i].type}>${animals[i].type}</h5>`;
    // } else if(animals[i].type === "dog") {
    //   domString += `<h5 class=${animals[i].type}>${animals[i].type}</h5>`;
    // } else if(animals[i].type === "bird") {
    //   domString += `<h5 class="bird">${animals[i].type}</h5>`;
    // } else if(animals[i].type === "dino") {
    //   domString += `<h5 class="dino">${animals[i].type}</h5>`;
    // }
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;


  }
  // console.log('domString', domString);
  printToDom(domString, 'card-spot');

};



const dogsCards = (e) => {
  console.log('dog');
  const buttonId = e.target.id;
  const selectedAnimal = [];
  allAnimals.forEach((adoption) => {
    if (adoption.type === buttonId) {
      selectedAnimal.push(adoption);
      console.log(buttonId)
    }
  });
  if (buttonId === 'all') {
    printCards(allAnimals)
    console.log('all')
  } else {
    printCards(selectedAnimal);
    console.log(buttonId)
  }
};



const buttonClicks = () => {
  document.getElementById('dog').addEventListener('click', dogsCards);
  document.getElementById('cat').addEventListener('click', dogsCards);
  document.getElementById('bird').addEventListener('click', dogsCards);
  document.getElementById('dino').addEventListener('click', dogsCards);
  document.getElementById('all').addEventListener('click', dogsCards);
};


const init = () => {
  buttonClicks()
  printCards(allAnimals);
};

init();
