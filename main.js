const allAnimals = [
  {
    Image: 'img/_0000_dino.png',
    Name: 'Clive',
    Color: 'Green',
    Skill: 'Can reach the top shelf with a long neck',
    Type: 'dino',
  },

  {
    Image: 'img/_0001_dino.png',
    Name: 'Don',
    Color: 'Green',
    Skill: 'Don can look under beds and find lost balls',
    Type: 'dino',
  },
  {
    Image: 'img/_0002_dino.png',
    Name: 'Richie',
    Color: 'Brown',
    Skill: 'Richie can put a whole whoppers in his mouth',
    Type: 'dino',
  },
  {
    Image: 'img/_0003_dino.png',
    Name: 'Rex',
    Color: 'Green',
    Skill: 'Rex can balance a ball on his noise without help',
    Type: 'dino',
  },
  {
    Image: 'img/_0004_dino.png',
    Name: 'Mary',
    Color: 'Green',
    Skill: 'hornsMary can roast marshmallows on her ',
    Type: 'dino',
  },
  //--------------------------------------------------------------- birds
  {
    Image: 'img/_0005_bird.png',
    Name: 'Chi Chi',
    Color: 'To Many!!',
    Skill: 'Chi Chi can ask for crackers in 3 different languages',
    Type: 'bird',
  },
  {
    Image: 'img/_0006_bird.png',
    Name: 'Tweet',
    Color: 'Green',
    Skill: 'Tweet can beat anyone in a staring contest',
    Type: 'bird',
  },
  {
    Image: 'img/_0007_bird.png',
    Name: 'Rodney',
    Color: 'Yellow',
    Skill: 'Rodney can open his own beer watching foot ball',
    Type: 'bird',
  },
  {
    Image: 'img/_0008_bird.png',
    Name: 'Yogi',
    Color: 'Blue',
    Skill: 'Yogi can chirp the thong song by Sisco',
    Type: 'bird',
  },
  {
    Image: 'img/_0009_bird.png',
    Name: 'Bing',
    Color: 'White',
    Skill: 'Bing can tell dirty joke while standing on one leg',
    Type: 'bird',
  },
  // ----------------------------------------------cats
  {
    Image: 'img/_0010_cat.png',
    Name: 'Cole',
    Color: 'Black',
    Skill: 'Cole can catch squarls and leave their dead bodies on your porch',
    Type: 'cat',
  },
  {
    Image: 'img/_0011_cat.png',
    Name: 'Snow',
    Color: 'White',
    Skill: 'Snow can hypnotize mice from 20 feet away',
    Type: 'cat',
  },
  {
    Image: 'img/_0012_cat.png',
    Name: 'Toni',
    Color: 'Tiger',
    Skill: 'Can knock all of the boxes of Frosted Flakes off the shelf',
    Type: 'cat',
  },
  {
    Image: 'img/_0013_cat.png',
    Name: 'Ming',
    Color: 'Tan',
    Skill: 'Ming can look at you and make you feel silly for calling his name',
    Type: 'cat',
  },
  {
    Image: 'img/_0014_cat.png',
    Name: 'Yikes',
    Color: 'White',
    Skill: 'Yikes Can ignore you for days when her bowl is full ',
    Type: 'cat',
  },
  {
    Image: 'img/_0015_cat.png',
    Name: 'Biggie',
    Color: 'Grey',
    Skill: 'Has the ability to make you want to give him all your love and kisses',
    Type: 'cat',
  },
  {
    Image: 'img/_0016_cat.png',
    Name: 'Rumble',
    Color: 'Orange',
    Skill: 'Rumble is skilled at hunting toes as you walk by',
    Type: 'cat',
  },
  {
    Image: 'img/_0017_cat.png',
    Name: 'Ringo',
    Color: 'Tan',
    Skill: 'Ring has the ability to sleep all day on his back to get belly rubs',
    Type: 'cat',
  },
  //-------------------------------------------------- dogs
  {
    Image: 'img/_0018_dog.png',
    Name: 'Lucy',
    Color: 'Ginger',
    Skill: 'Returns the ball every time you throw it',
    Type: 'dog',
  },
  {
    Image: 'img/_0019_dog.png',
    Name: 'Brolly',
    Color: 'White',
    Skill: 'Brolly can jump high enough to get the sandwich off the table',
    Type: 'dog',
  },
  {
    Image: 'img/_0020_dog.png',
    Name: 'Roxy',
    Color: 'Ginger',
    Skill: 'Roxy can stay still in your purse as you shop',
    Type: 'dog',
  },
  {
    Image: 'img/_0021_dog.png',
    Name: 'Dinky',
    Color: 'Gold',
    Skill: 'Dinky is a frisbee catching master even on windy days',
    Type: 'dog',
  },
  {
    Image: 'img/_0022_dog.png',
    Name: 'Fido',
    Color: 'Brown',
    Skill: 'Fido collects socks and places then in his bed to chew on later',
    Type: 'dog',
  },
  {
    Image: 'img/_0023_dog.png',
    Name: 'Dino',
    Color: 'Tan',
    Skill: 'Dino is able to balance himself on the rumba as it cleans the floor',
    Type: 'dog',
  },
  {
    Image: 'img/_0024_dog.png',
    Name: 'Milo',
    Color: 'Golden',
    Skill: 'Milo has the ability to slide on wood floors when running real fast',
    Type: 'dog',
  },
];



const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const printCards = () => {
  let domString = '';
  for (let i = 0; i < allAnimals.length; i += 1) {
    domString += `

    <div class="card text-center col-m d-inline-flex offset-">
        <div class="card-header">
         <h5> ${allAnimals[i].Name}</h5>
        </div>
        <div class="card-body">
          <img src=${allAnimals[i].Image} alt="">
          <div>Color</div>
          <h5 class="card-title">${allAnimals[i].Color}</h5>
          Skillz
          <p class="card-text">${allAnimals[i].Skill}</p>
          <a href="#" class="btn btn-primary">adopt</a>
        </div>
        <div class="card-footer text-muted">
        <div class="${allAnimals.Type}">
        ${allAnimals[i].Type}
        </div>
      </div>
      </div>
          `;
  }
  // console.log('domString', domString);
  printToDom(domString, 'card-spot');

};



const dogsCards = (e) => {
  console.log('dog');
  const buttonId = e.target.id;
  const selectedAnimal = [];
  allAnimals.forEach((adoption) => {
      if (adoption.Type === buttonId) {
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
