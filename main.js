
//rendering cars api
// fetching from the car api

let carData ;

async function getCar (){
    // here using try and catch

    try {
        //getting item with fetch method from car api
        const response = await fetch(
            'https://freetestapi.com/api/v1/cars' // car api
        );
        //here we are coverting response from car api to json
        carData = await response.json()

        updataUi();
        //setting the result we got from the car api to data
        //console.log(carData, 'car data')
        //

    }catch(error){
        //here is catching error
        console.log(error, 'errors');
    }
}
getCar();
console.log(carData,'data')

const carContainer= document.querySelector('.carContainer');

const updataUi = () =>{
    for (let car of carData){
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        console.log(car , 'car here');
        carCard.innerHTML = `
             <img src="${car.image}" alt="">
             <div>
                 <p>Product Name:</p>
                 <p>${car.make}</p>
             </div>
             <div>
                 <p>Year:</p>
                 <p>${car.year}</p>
             </div>
             <div>
                 <p>Model:</p>
                 <p>${car.model}</p>
             </div>
             <div>
                 <p>Color:</p>
                 <p>${car.color}</p>
             </div>
             <div>
                 <p>Price:$</p>
                 <p>${car.price}</p>
             </div>
        `;
          carContainer.appendChild(carCard);
    }
}


//rendering jet api
// fetching from the jet api

let JetData ;

async function getJet (){
    // here using try and catch

    try {
        //getting item with fetch method from jet api
        const response = await fetch(
            'https://freetestapi.com/api/v1/actors' // jet api
        );
        //here we are coverting response from jet api to json
        JetData = await response.json()

        updataUiJet();
        //setting the result we got from the jet api to data
        //console.log(JetData, 'jet data')
        //

    }catch(error){
        //here is catching error
        console.log(error, 'errors');
    }
}
getJet();
console.log(JetData,'data')

const JetContainer= document.querySelector('.JetContainer');

const updataUiJet = () =>{
    for (let Jet of JetData){
        const JetCard = document.createElement('div');
        JetCard.classList.add('Jet-card');
        console.log(Jet , 'jet here');
        JetCard.innerHTML = `
             <img src="${Jet.image}" alt="">
             <div>
                 <p> Name:</p>
                 <p>${Jet.name}</p>
             </div>
             <div>
                 <p>Birth Year:</p>
                 <p>${Jet.birth_year}</p>
             </div>
             <div>
                 <p>Nationality:</p>
                 <p>${Jet.nationality}</p>
             </div>
             <div>
                 <p>awards:</p>
                 <p>${Jet.awards}</p>
             </div>
             <div>
                 <p>Biography:</p>
                 <p>${Jet.biography}</p>
             </div>
        `;
          JetContainer.appendChild(JetCard);
    }
}