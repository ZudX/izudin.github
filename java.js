class Start {
    constructor() {
        this.playerName = "Player"
        this.botName = "Deabot"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const option = ["ð", "â", "â"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "ð" && this.playerOption == "â") {
            return this.winner = this.playerName
        } else if (this.botOption == "ð" && this.playerOption == "â") {
            return this.winner = this.botName;
        } else if (this.botOption == "â" && this.playerOption == "ð") {
            return this.winner = this.botName;
        } else if (this.botOption == "â" && this.playerOption == "â") {
            return this.winner = this.playerName
        } else if (this.botOption == "â" && this.playerOption == "ð") {
            return this.winner = this.playerName
        } else if (this.botOption == "â" && this.playerOption == "â") {
            return this.winner = this.botName;
        } else {
            return this.winner = "SERI"
        }
    }

    matchResult() {
        if (this.winner != "SERI") {
            return `${this.winner} MENANG!`;
        } else {
            return `WAAA ${this.winner}, GAK ADA YG MENANG ðĪŠ`;
        }
    }
}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");

    inGame.textContent = "..."
    result.textContent = "..."

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.matchResult();
    }, 1500);

}
 module.exports = pickOption;