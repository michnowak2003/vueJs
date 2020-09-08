new Vue({
    el: '#app',
    data: {
        playerOne: {hp: 80},
        playerTwo: {hp: 80},
        gameIsRunning: false,
        damageLogger: []
    },
    methods: {
        startNewGame: function (){
            this.playerOne.hp = 100;
            this.playerTwo.hp = 100;
            this.gameIsRunning = true;
            this.damageLogger = []
        },
        attack: function (){
            const damage = this.damage(3,10)
            const monsterDamage = this.monsterAttack()
            this.playerTwo.hp -= damage
            this.addLog(damage, monsterDamage)
            this.checkWin()
        },
        specialAttack: function (){
            const damage = this.damage(5,20)
            const monsterDamage = this.monsterAttack()
            this.playerTwo.hp -= damage
            this.addLog(damage, monsterDamage)
            this.checkWin()
        },
        heal: function (){
            if(this.playerOne.hp <=90){
                this.playerOne.hp += 10;
            }else {
                this.playerOne.hp = 100;
            }
            this.monsterAttack()
        },
        giveUp: function (){
            this.gameIsRunning = false;
            alert('Player Two is a winner')
        },
        addLog: function (damage, monsterDamage){
            this.damageLogger.push({playerOne:damage, PlayerTwo:monsterDamage})
        },
        monsterAttack: function (){
            const damage = this.damage(5,12)
          this.playerOne.hp -= damage;
          this.checkWin();
          return damage;
        },
        damage: function (min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin: function () {
            if(this.playerOne.hp <= 0){
                alert("Player Two is a winner")
                this.gameIsRunning = false;
            } else if(this.playerTwo.hp <=0) {
                alert("Player One is a winner")
                this.gameIsRunning = false;
            }
        }
    }
})
