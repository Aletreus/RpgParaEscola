const maxbig = 2;
const maxmed = 3;
const maxsmall = 5;
const maxhp = 250;
const maxdef = 500;
const maxatk = 250;
const maxesc = 1;
const maxmj = 1;
const maxpes = 1;
const maxor = 1;

let turnoAtual = "Blanka"; // Começa com Blanka
let acoesRestantes = 2;

class Guerreiro {
    constructor(player, hp, defesa, ataque) {
        this.pl = player;
        this.hp = hp;
        this.def = defesa;
        this.atk = ataque;
        this.smallUsadas = 0;
        this.medUsadas = 0;
        this.bigUsadas = 0;
        this.defUsadas = 0;
        this.atkUsadas = 0;
    }

    upgradeatk(ataque) {
        this.atk += ataque;
        console.log(`O Jogador ${this.pl} conseguiu um buff de ataque e aumentou seu ataque em ${ataque}.`);
        stats();
    }

    upgradedef(defesa) {
        this.def += defesa;
        console.log(`O Jogador ${this.pl} conseguiu um buff de defesa e aumentou sua defesa em ${defesa}.`);
        stats();
    }

    slash(player) {
        if (this.atk < player.def) {
            console.log(`Seu ataque não causou dano pois a defesa do jogador ${player.pl} é muito alta.`);
            player.def -= this.atk;
        } else {
            player.hp -= (this.atk - player.def);
            console.log(`O ataque causou ${this.atk - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`);
            player.def -= 5;
        }
        this.morte(player);
        stats();
        registrarAcao();
    }

    small(player) {
        if (player.smallUsadas < maxsmall) {
            player.smallUsadas++;
            player.hp += 25;
            if (player.hp > maxhp) player.hp = maxhp;
            console.log(`Jogador ${this.pl} usou uma poção pequena e agora está com ${player.hp} de vida.`);
            stats();
            registrarAcao();
        }
    }

    medium(player) {
        if (player.medUsadas < maxmed) {
            player.medUsadas++;
            player.hp += 50;
            if (player.hp > maxhp) player.hp = maxhp;
            console.log(`Jogador ${this.pl} usou uma poção média e agora está com ${player.hp} de vida.`);
            stats();
            registrarAcao();
        }
    }

    big(player) {
        if (player.bigUsadas < maxbig) {
            player.bigUsadas++;
            player.hp += 75;
            if (player.hp > maxhp) player.hp = maxhp;
            console.log(`Jogador ${this.pl} usou uma poção grande e agora está com ${player.hp} de vida.`);
            stats();
            registrarAcao();
        }
    }

    escalibur(player) {
        if (player.atkUsadas <= 1) {
            player.atkUsadas++;
            this.atk += 60;
            if (player.atk > maxatk) player.atk = maxatk;
            console.log(`O Jogador ${this.pl} pegou a ESCALIBUR e aumentou seu ataque.`);
            stats();
            registrarAcao();
        }
    }

    mjolnir(player) {
        if (player.atkUsadas <= 1) {
            player.atkUsadas++;
            this.atk += 90;
            if (player.atk > maxatk) player.atk = maxatk;
            console.log(`O Jogador ${this.pl} pegou o MJOLNIR e aumentou seu ataque.`);
            stats();
            registrarAcao();
        }
    }

    ornamental(player) {
        if (player.defUsadas <= 1) {
            player.defUsadas++;
            this.def += 50;
            this.atk += 25;
            if (player.def > maxdef) player.def = maxdef;
            if (player.atk > maxatk) player.atk = maxatk;
            console.log(`O Jogador ${this.pl} pegou o escudo ornamental.`);
            stats();
            registrarAcao();
        }
    }

    pesado(player) {
        if (player.defUsadas <= 1) {
            player.defUsadas++;
            this.def += 80;
            if (player.def > maxdef) player.def = maxdef;
            console.log(`O Jogador ${this.pl} pegou o escudo pesado.`);
            stats();
            registrarAcao();
        }
    }

    critico(player) {
        const chance = Math.floor(Math.random() * 20) + 1;
        console.log(`chance ${chance}`);

        let multiplicador = 0;
        if (chance >= 11 && chance <= 20) {
            multiplicador = 1 + ((chance - 10) * 0.2);
        }

        if (multiplicador > 0) {
            const dano = (this.atk * multiplicador) - player.def;
            const danoFinal = dano > 0 ? dano : 0;
            player.hp -= danoFinal;
            player.def -= danoFinal > 0 ? 10 : (this.atk * multiplicador);
            console.log(`Crítico! Causou ${danoFinal} de dano. Vida restante: ${player.hp}`);
        } else {
            console.log("Você errou o ataque crítico.");
        }

        this.morte(player);
        stats();
        registrarAcao();
    }

    morte(player) {
        if (player.hp <= 0) {
            player.hp = 0;
            player.atk = 0;
            player.def = 0;
            alert(`O jogador ${player.pl} morreu.`);
            stats();
        }
    }
}

const defensor = new Guerreiro('Sagat', 120, 80, 35);
const atacante = new Guerreiro('Blanka', 45, 50, 85);

// Funções auxiliares

function stats() {
    document.getElementById('nomep1').textContent = defensor.pl;
    document.getElementById('hpp1').textContent = `HP: ${defensor.hp}/${maxhp}`;
    document.getElementById('atkp1').textContent = `ATK: ${defensor.atk}/${maxatk}`;
    document.getElementById('defp1').textContent = `DEF: ${defensor.def}/${maxdef}`;

    document.getElementById('nomep2').textContent = atacante.pl;
    document.getElementById('hpp2').textContent = `HP: ${atacante.hp}/${maxhp}`;
    document.getElementById('atkp2').textContent = `ATK: ${atacante.atk}/${maxatk}`;
    document.getElementById('defp2').textContent = `DEF: ${atacante.def}/${maxdef}`;

    atualizarBotoes();
}

function registrarAcao() {
    acoesRestantes--;
    if (acoesRestantes <= 0) {
        setTimeout(trocarTurno, 300);
    }
}

function trocarTurno() {
    turnoAtual = (turnoAtual === "Sagat") ? "Blanka" : "Sagat";
    acoesRestantes = 2;
    console.log(`Turno de ${turnoAtual}`);
    atualizarBotoes();
}

function atualizarBotoes() {
    const botoesP1 = document.querySelectorAll('#player1 input[type="button"]');
    const botoesP2 = document.querySelectorAll('#player2 input[type="button"]');

    botoesP1.forEach(btn => btn.disabled = turnoAtual !== "Sagat");
    botoesP2.forEach(btn => btn.disabled = turnoAtual !== "Blanka");
}

// Inicialização
stats();
atacante.small(atacante);
atacante.smallUsadas = 0;
