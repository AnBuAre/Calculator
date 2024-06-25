
const h2Create= document.createElement("p");
h2Create.innerText = "Ciudad:";
h2Create.setAttribute("id", "ciudad");
document.body.appendChild(h2Create)

// Para crear un select, hay que añadir despues su input
const selectCreate= document.createElement("select");
const cities= ["Barcelona", "Madrid", "Valencia"];
cities.forEach(city=> {
    const option = document.createElement("option");
    option.value = city;
    option.innerText = city;
    selectCreate.appendChild(option);//añado cada opcion al select dentro de foreach(bucle)
    
});

document.body.appendChild(selectCreate);
selectCreate.setAttribute("id","selectCreate");

// para crar el numero de noches. Primero creamos el label(recuadro)
// y después el imput dónde vamos a introducir los números.

const nigthsDays= document.createElement("label");
nigthsDays.innerText = "Número de noches:";
document.body.appendChild(nigthsDays);

const nigthInput= document.createElement("input");
nigthInput.type = Number;
document.body.appendChild(nigthInput);


const carDays = document.createElement("label");
carDays.innerText = "Número de días de alquiler del coche:"
document.body.appendChild(carDays);

const carDaysInput = document.createElement("input");
carDaysInput.type = Number;
document.body.appendChild(carDaysInput);
carDays.id ="carDays";


const calculateButton= document.createElement("button");
calculateButton.innerText = "Calcular coste";
document.body.appendChild(calculateButton);
calculateButton.id= "calculateButton"

const costPrice= document.createElement("div");
costPrice.id = "costPrice";
costPrice.innerText = "coste: 0€";
document.body.appendChild(costPrice);

function costHotel(nights){
    const costPerNight = 140;
    return nights * costPerNight;
}

function costFlight (city, nights){
    let costFlight;
    switch (city){
        case "Madrid":
        case "Barcelona":
            costFlight = 90;
            break;
        case "Sevilla":
            costFlight = 50;
            break;
        case "Valencia":
            costFlight = 40;
            break;
        default:
            costFlight = 0;
    }

    if (nights >=3){
        costFlight *= 0.90;
    }
    
    return costFlight
}

function carCost (days){
    const costPerDay = 40;
    let totalCost = days * costPerDay;

    if(days >=7){
        totalCost -= 50;
    } else if (days >=3){
        totalCost -= 20;
    }

    return totalCost;
}

// finalmente calculamos todo lo que se halla seleccionado

calculateButton.addEventListener("click", () =>{
    const city = selectCreate.value;
    const nights = parseInt(nigthInput.value) || 0;
    const carDays = parseInt(carDaysInput.value) || 0;

    const hotelCost= costHotel(nights);
    const flightCost = costFlight(city,nights);
    const carCost = carCost (days);

    const allCost = hotelCost + flightCost + carCost;
    costPrice.innerText = `Coste: ${allCost}€`;




})

