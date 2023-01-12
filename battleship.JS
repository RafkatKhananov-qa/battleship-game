var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = prompt("Это игра Морской бой! На поле из 7 клеток расположен корабль, занимающий 3 клетки. Введите число 0-6:");
    if (guess < 0 || guess > 6) {
        alert("Пожалуйста введите корректное число!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попал!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Корабль потоплен!");

            }
        } else {
            alert("Промах!");
        }

    }
}
var status = "Вы выстрелили " +  guesses  + " раза для того чтобы потопить корабль," + " точность вашей стрельбы " + ((3/guesses)*100) + "%";
alert(status);