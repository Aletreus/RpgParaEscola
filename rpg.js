const maxbig = 2
const maxmed = 3
const maxsmall = 5
const maxhp = 250
const maxdef = 500
const maxatk = 250
const maxesc = 1
const maxmj = 1
const maxpes = 1
const maxor = 1
const rodada = 3


class Guerreiro{
    constructor(player, hp, defesa, ataque){
        this.pl = player
        this.hp = hp
        this.def = defesa
        this.atk = ataque
        this.smallUsadas = 0;
        this.medUsadas = 0;
        this.bigUsadas = 0;
        this.defUsadas = 0;
        this.atkUsadas = 0;
    }

    upgradeatk(ataque){
        this.atk += ataque
        console.log(`O Jogador ${this.pl} conseguiu um buff de ataque e aumentou seu ataque em ${ataque}.`)
        stats()
    }

    upgradedef(defesa){
        this.def += defesa
        console.log(`O Jogador ${this.pl} conseguiu um buff de defesa e aumentou sua defesa em ${defesa}.`)
        stats()
    }


    slash(player){
        if(this.atk < player.def){
            console.log(`Seu ataque não causou dano pois a defesa do jogador ${player.pl} é muito alta.`)
            player.def = player.def - this.atk
        }
        else{
            player.hp = player.hp - (this.atk - player.def)
            console.log(`O ataque causou ${this.atk - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 5
        }
        this.morte(player)
        stats()
    }

    info(player){
        console.log(`${this.pl}\nHP: ${this.hp}\nAtaque: ${this.atk}\nDefesa: ${this.def}`)
        stats()
    }

    small(player){
        if(player.smallUsadas < maxsmall){
            player.hp = player.hp + 25
            if(player.hp > maxhp){
                player.hp = maxhp
            }
            console.log(`Jogador ${this.pl} usou uma poção de cura pequena e agora está com ${player.hp} de vida`)
            stats()
        }
    }

    medium(player){
        if(player.medUsadas < maxmed){
            player.hp = player.hp + 50
            if(player.hp > maxhp){
                player.hp = maxhp
            }
            console.log(`Jogador ${this.pl} usou uma poção de cura média e agora está com ${player.hp} de vida`)
            stats()
        }
    }

    big(player){
        if(player.bigUsadas < maxbig){
            player.hp = player.hp + 75
            if(player.hp > maxhp){
                player.hp = maxhp
            }
            console.log(`Jogador ${this.pl} usou uma poção de cura grande e agora está com ${player.hp} de vida`)
            stats()
        }
    }

    escalibur(player){
        if(player.atkUsadas <= 1){
            this.atk += 60
            if(player.atk > maxatk){
                player.atk = maxatk
            }
            console.log(`O Jogador ${this.pl} pegou a ESCALIBUR e aumentou seu ataque em 100 de dano.`)
            stats()
        }
    }

    mjolnir(player){
        if(player.atkUsadas <= 1){
           this.atk += 90
            if(player.atk > maxatk){
                player.atk = maxatk
            }
            console.log(`O Jogador ${this.pl} pegou O MJOLNIR e aumentou seu ataque em 200.`)
            stats() 
        }
    }

    ornamental(player){
        if(player.defUsadas <= 1){
           this.def += 50
            if(player.def > maxdef){
                player.def = maxdef
            }
            console.log(`O Jogador ${this.pl} pegou o escudo ornamental e aumentou sua defesa em 100.`)
            stats() 
        }
    }

    pesado(player){
        if(player.defUsadas <= 1){
            this.def += 80
            if(player.def > maxdef){
                player.def = maxdef
            }
            console.log(`O Jogador ${this.pl} pegou o escudo pesado e aumentou sua defesa em 100.`)
            stats()
        }
    }

    critico(player){
        var chance = Math.floor(Math.random() * 20) + 1
        console.log(`chance ${chance}`)
        if(chance == 11){
            if((this.atk * 1.2) < player.def){
                player.hp = player.hp - (this.atk * 1.2)
                console.log(`O ataque causou ${(this.atk * 1.2) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 1.2)
            }
            else{
            player.hp = player.hp - ((this.atk * 1.2) - player.def)
            console.log(`O ataque causou ${(this.atk * 1.2) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        
        }
        if(chance == 12){
            if((this.atk * 1.4) < player.def){
                player.hp = player.hp - (this.atk * 1.4)
                console.log(`O ataque causou ${(this.atk * 1.4) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 1.4)
            }
            else{
            player.hp = player.hp - ((this.atk * 1.4) - player.def)
            console.log(`O ataque causou ${(this.atk * 1.4) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        if(chance == 13){
            if((this.atk * 1.6) < player.def){
                player.hp = player.hp - (this.atk * 1.6)
                console.log(`O ataque causou ${(this.atk * 1.6) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 1.6)
            }
            else{
            player.hp = player.hp - ((this.atk * 1.6) - player.def)
            console.log(`O ataque causou ${(this.atk * 1.6) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        if(chance == 14){
            if((this.atk * 1.8) < player.def){
                player.hp = player.hp - (this.atk * 1.8)
                console.log(`O ataque causou ${(this.atk * 1.8) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 1.8)
            }
            else{
            player.hp = player.hp - ((this.atk * 1.8) - player.def)
            console.log(`O ataque causou ${(this.atk * 1.8) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        if(chance == 15){
            if((this.atk * 2) < player.def){
                player.hp = player.hp - (this.atk * 2)
                console.log(`O ataque causou ${(this.atk * 2) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 2)
            }
            else{
            player.hp = player.hp - ((this.atk * 2) - player.def)
            console.log(`O ataque causou ${(this.atk * 2) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        if(chance == 16){
            if((this.atk * 2.2) < player.def){
                player.hp = player.hp - (this.atk * 2.2)
                console.log(`O ataque causou ${(this.atk * 2.2) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 2.2)
            }
            else{
            player.hp = player.hp - ((this.atk * 2.2) - player.def)
            console.log(`O ataque causou ${(this.atk * 2.2) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        if(chance == 17){
            if((this.atk * 2.4) < player.def){
                player.hp = player.hp - (this.atk * 2.4)
                console.log(`O ataque causou ${(this.atk * 2.4) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 2.4)
            }
            else{
            player.hp = player.hp - ((this.atk * 2.4) - player.def)
            console.log(`O ataque causou ${(this.atk * 2.4) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        if(chance == 18){
            if((this.atk * 2.6) < player.def){
                player.hp = player.hp - (this.atk * 2.6)
                console.log(`O ataque causou ${(this.atk * 2.6) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 2.6)
            }
            else{
            player.hp = player.hp - ((this.atk * 2.6) - player.def)
            console.log(`O ataque causou ${(this.atk * 2.6) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        if(chance == 19){
            if((this.atk * 2.8) < player.def){
                player.hp = player.hp - (this.atk * 2.8)
                console.log(`O ataque causou ${(this.atk * 2.8) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 2.8)
            }
            else{
            player.hp = player.hp - ((this.atk * 2.8) - player.def)
            console.log(`O ataque causou ${(this.atk * 2.8) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        if(chance == 20){
            if((this.atk * 3) < player.def){
                player.hp = player.hp - (this.atk * 3)
                console.log(`O ataque causou ${(this.atk * 3) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - (this.atk * 3)
            }
            else{
            player.hp = player.hp - ((this.atk * 3) - player.def)
            console.log(`O ataque causou ${(this.atk * 3) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 10
        }
        }
        else{
            console.log(`Você errou o ataque crítico.`)
        }
        
        this.morte(player)
        stats()
    }

    morte(player){
        if(player.hp <= 0){
            console.log(`O jogador ${player.pl} Morreu.`)
            alert(`O jogador ${player.pl} Morreu.`)
            player.hp = 0;
            player.def = 0;
            player.atk = 0;
        }

        }
    
    
    }




const defensor = new Guerreiro('Sagat', 120, 80, 35)
const atacante = new Guerreiro('Blanka', 70, 50, 85)






function morte(){
    if(defensor.hp <= 0){
        console.log(`O jogador ${defensor.pl} Morreu.`)
    }
    if(atacante.hp <= 0){
        console.log(`O jogador ${atacante.pl} Morreu.`)
    }
}



function stats(){
var nomep1 = document.getElementById('nomep1')
nomep1.textContent = `${defensor.pl}`
var hpp1 = document.getElementById('hpp1')
hpp1.textContent = `HP: ${defensor.hp}/${maxhp}`
var atkp1 = document.getElementById('atkp1')
atkp1.textContent = `ATK: ${defensor.atk}/${defensor.atk}`
var defp1 = document.getElementById('defp1')
defp1.textContent = `DEF: ${defensor.def}/${defensor.def}`
var nomep2 = document.getElementById('nomep2')
nomep2.textContent = `${atacante.pl}`
var hpp2 = document.getElementById('hpp2')
hpp2.textContent = `HP: ${atacante.hp}/${maxhp}`
var atkp2 = document.getElementById('atkp2')
atkp2.textContent = `ATK: ${atacante.atk}/${atacante.atk}`
var defp2 = document.getElementById('defp2')
defp2.textContent = `DEF: ${atacante.def}/${atacante.def}`
}


stats();
stats();
