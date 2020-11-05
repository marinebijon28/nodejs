/*
    1) On vous donne un robot qui est sur une grille, en position (0,0,N) 
    2) grille de 10 cases x/y
    3) directions: N/E/S/W 
    4) Actions possibles:
        - Rotation Gauche / Rotation Droite (L / R)
        - Se deplacer de 1 case (move / M)
    5) Les commandes sont recues via une chaine de caracteres "RMMRMM"
    6) RMMLM - la nouvelle du robot est (2,1,N)
    7) MMMMMMMMMM - revient a son point de depart (0,0,N)
*/
 
class MarsBot {
    constructor(grid = { x: 10, y: 10 }) {
        this.grid = grid
    }
 
    Execute(command = "") {
        let direction = 'N';
        let x = 0;
        let y = 0;
        for (let i in command)
        {
            if (command[i] == 'R') {
                if (direction == 'N')
                    direction = 'W';
                else if (direction == 'W')
                    direction = 'S';
                else if (direction == 'S')
                    direction = 'E';
                else if (direction == 'E')
                    direction = 'N';
            }
            else if (command[i] == 'L')
            {
                if (direction == 'N')
                    direction = 'E';
                else if (direction == 'E')
                    direction = 'S';
                else if (direction == 'S')
                    direction = 'W';
                else if (direction == 'W')
                    direction = 'N';
            }
            if (command[i] == 'M')
            {
                if (direction == 'N')
                        y += 1;
                if (direction == 'E')
                        x += 1;
                if (direction == 'S')
                        y -= 1;
                if (direction == 'W')
                        x -= 1;
                if (x < 0)
                    x = this.grid.y
                else if (x > this.grid.y)
                    x = 0;
                if (y < 0)
                    y = this.grid.y
                else if (y > this.grid.y)
                    y = 0;
            }
        }
        console.log("x : " + x + " y : " + y + " direction : " + direction)
    }
}
 
// exemple d'utilisation
const myBot = new MarsBot()
console.log(myBot)
myBot.Execute('RMMLM')
