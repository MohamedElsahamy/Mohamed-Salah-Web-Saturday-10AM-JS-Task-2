
var OldIndex = [];
function GetNumber() {

    var randomNumber = GetRandomNumber();

    ChangeText(randomNumber);
    OldIndex.push(randomNumber)

    console.log(OldIndex)
    
    if (OldIndex.length > 2) {

        for (var i = 0; i < 99999999; i++) {
            if (OldIndex[OldIndex.length - 2] == OldIndex[OldIndex.length - 1]) {

                var NewNumber = GetRandomNumber();
                OldIndex.push(NewNumber);
                console.log(NewNumber)
                ChangeText(NewNumber);
            }
            else {
                break;
            }
        }
    }
}

function GetRandomNumber() {
    var numbers = [10, 20, 30, 40, 50];

    // Generate a random index
    var randomIndex = Math.floor(Math.random() * numbers.length);
    var randomNumber = numbers[randomIndex];

    return randomNumber;
}

function ChangeText(Index) {
    if (Index == 10) {
        document.getElementById("Text").innerHTML = "“Be yourself; everyone else is already taken.”― Oscar Wilde";
    } else if (Index == 20) {
        document.getElementById("Text").innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein";
    } else if (Index == 30) {
        document.getElementById("Text").innerHTML = "“A room without books is like a body without a soul.”― Marcus Tullius Cicero";
    } else if (Index == 40) {
        document.getElementById("Text").innerHTML = "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch";
    } else if (Index == 50) {
        document.getElementById("Text").innerHTML = "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss";
    }
}

