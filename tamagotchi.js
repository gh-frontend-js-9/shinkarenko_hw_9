//My code is not very good because I didn't have much time to improve it :)

class Randomaizer {
    static getRandom(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
}
//stopwatch
window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    Interval = setInterval(startTimer, 10);
    window.onload = Interval
    function startTimer() {
        tens++;
        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}

let decrease

class TamagotchiModel {

    constructor(level) {
        this.level = level
    }

    _eat() {
        this.fullness += 30
        this.cleanness -= 20
        this.updateStats()
        this.edgesStats()
    }

    _play() {
        this.happiness += 15
        this.fullness -= 10
        this.updateStats()
        this.edgesStats()
    }

    _clean() {
        this.cleanness += 40
        this.happiness -= 20
        this.updateStats()
        this.edgesStats()
    }

    _visitDoctor() {
        this.health += 30
        this.money -= 20
        this.updateStats()
        this.edgesStats()
    }

    _goToBar() {
        this.socialization += 40
        this.food += 10
        this.money -= 20
        this.health -= 10
        this.updateStats()
        this.edgesStats()
    }

    _goToWork() {
        this.money += 50
        this.food -= 10
        this.health -= 10
        this.socialization -= 20
        this.updateStats()
        this.edgesStats()
    }

    _buyFood() {
        this.food += 20
        this.money -= 20
        this.updateStats()
        this.edgesStats()
    }

    _startBusinnes() {
        this.money += 100
        this.happiness += 100
        this.health -= 100
        this.socialization += 20
        this.updateStats()
        this.edgesStats()
    }

    stats() {
        if ( this.level == "1" || this.level == "3") {
            this.maxStat = 101;
        } 
        if (this.level == "2") {
            this.maxStat = 71;
        }

        this.minStat = 50
        this.happiness = Randomaizer.getRandom(this.minStat, this.maxStat);
        this.fullness = Randomaizer.getRandom(this.minStat, this.maxStat);
        this.cleanness = Randomaizer.getRandom(this.minStat, this.maxStat);
        this.health = Randomaizer.getRandom(this.minStat, this.maxStat);
        this.socialization = Randomaizer.getRandom(this.minStat, this.maxStat);
        this.money = Randomaizer.getRandom(this.minStat, this.maxStat);

        this.help()
        this.decraseStats()
        this.edgesStats()  
    }

    updateStats() {
        document.getElementById("happiness").innerHTML = this.happiness + "%";
        document.getElementById("fullness").innerHTML = this.fullness + "%";
        document.getElementById("cleanness").innerHTML = this.cleanness + "%";
        document.getElementById("health").innerHTML = this.health + "%"
        document.getElementById("socialization").innerHTML = this.socialization + "%"
        document.getElementById("money").innerHTML = this.money + "$"

        document.getElementById("happiness").style.width = this.happiness + "px";
        document.getElementById("fullness").style.width = this.fullness + "px";
        document.getElementById("cleanness").style.width = this.cleanness + "px";
        document.getElementById("health").style.width = this.health + "px"
        document.getElementById("socialization").style.width = this.socialization + "px"
        document.getElementById("money").style.width = this.money + "px"
    }
    
    decraseStats(){
        if (this.level == '2') {
            decrease = 5
            this.interval = setInterval(() => {
                this.fullness -= decrease;
                this.cleanness -= decrease;
                this.happiness -= decrease;
                this.health -= decrease;
                this.socialization -= decrease;
                this.money -= decrease;
                this.updateStats()
                this.edgesStats()   
            }, 5000);
        }

        else if (this.level == '1') {
            decrease = 3
            this.interval = setInterval(() => {
                this.fullness -= decrease;
                this.cleanness -= decrease;
                this.happiness -= decrease;
                this.health -= decrease;
                this.socialization -= decrease;
                this.money -= decrease;
                this.updateStats()
                this.edgesStats()
            }, 5000);
        }

        else if (this.level == '3') {    
            decrease = 7
            this.interval = setInterval(() => {
                this.fullness -= decrease;
                this.cleanness -= decrease;
                this.happiness -= decrease;
                this.health -= decrease;
                this.socialization -= decrease;
                this.money -= decrease;
                this.updateStats()
                this.edgesStats()
            }, 7000);
        }
    }

    edgesStats(){
        if (this.happiness < 0 || this.fullness < 0 || this.cleanness < 0 || this.health < 0 || this.socialization < 0 || this.money < 0) {
            text.innerHTML = "You lost (сlick on restart to start the game again)"
            document.getElementById("happiness").innerHTML = 0 + "%";
            document.getElementById("fullness").innerHTML = 0 + "%";
            document.getElementById("cleanness").innerHTML = 0 + "%";
            document.getElementById("health").innerHTML = 0 + "%"
            document.getElementById("socialization").innerHTML = 0 + "%"
            document.getElementById("money").innerHTML = 0 + "$"
            document.getElementById("btnRestart").style.display = "block";

            document.getElementById("happiness").style.width = 25 + "px";
            document.getElementById("fullness").style.width =  25 + "px";
            document.getElementById("cleanness").style.width =  25 + "px";
            document.getElementById("health").style.width =  25 + "px";
            document.getElementById("socialization").style.width =  25 + "px";
            document.getElementById("money").style.width =  25 + "px";
            clearInterval(Interval);
        }

        if (this.level == "1" || this.level == '2') {
            if (this.happiness > this.maxStat) {
                this.happiness = this.maxStat
            
            } else if (this.fullness > this.maxStat) {
                this.fullness = this.maxStat
            
            } else if (this.cleanness > this.maxStat) {
                this.cleanness = this.maxStat
            
            } else if (this.health > this.maxStat) {
                this.health = this.maxStat
            
            } else if (this.socialization > this.maxStat) {
                this.socialization = this.maxStat
            
            } else if (this.money > this.maxStat) {
                this.money = this.maxStat
            }
        }
    }

    help() {
        this.help = setInterval(() => {
            let i = Randomaizer.getRandom(1, 7)
            if (i == 1) {
                this.fullness += Randomaizer.getRandom(10, 51)
            } else if (i == 2) {
                this.happiness += Randomaizer.getRandom(10, 51)
            } else if (i == 3) {
                this.cleanness += Randomaizer.getRandom(10, 51)
            } else if (i == 4) {
                this.health += Randomaizer.getRandom(10, 51)
            } else if (i == 5) {
                this.socialization += Randomaizer.getRandom(10, 51)
            } else if (i == 6) {
                this.money += Randomaizer.getRandom(10, 51)
            }
            this.updateStats()
        }, 60000)
    }
}

let Tamagotchi = new TamagotchiModel( prompt('Select a level: 1-Fluffy Kitty, 2-Lazy Pug, 3-Ninja, click start, and wait a few seconds  ', '1'));


document.getElementById("start").addEventListener("click", () => {
    Tamagotchi.stats();
    document.getElementById("start").style.display = "none";
    text.innerHTML = "You can play, press any button or wait a few seconds. Good Luck"
});

document.getElementById("btnPet").addEventListener("click", () => {
    Tamagotchi._play();
});

document.getElementById("btnFeed").addEventListener("click", () => {
    Tamagotchi._eat();
});

document.getElementById("btnClean").addEventListener("click", () => {
    Tamagotchi._clean();
});

document.getElementById("btnVisitDoctor").addEventListener("click", () => {
    Tamagotchi._visitDoctor();
});

document.getElementById("btnStartBusiness").addEventListener("click", () => {
    Tamagotchi._startBusinnes();
});

document.getElementById("btnGoToWork").addEventListener("click", () => {
    Tamagotchi._goToWork();
});

document.getElementById("btnGoToBar").addEventListener("click", () => {
    Tamagotchi._goToBar();
});

document.getElementById("btnBuyFood").addEventListener("click", () => {
    Tamagotchi._buyFood();
});

document.getElementById("btnRestart").addEventListener("click", function () {
    location.reload();
});











