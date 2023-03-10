
const header = document.querySelector('header');
const main = document.querySelectorAll('main');
const skillPointsValue = document.querySelector(".skill-number")
const playerLen = document.querySelectorAll(".player")

document.addEventListener('click', (e)=>{
    e.preventDefault()
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    const parentForm = targetEl.closest("form");
    
    if (targetEl.classList.contains("btn-tutorial")) {
        let tutorial = document.querySelector("#tutorial-texto")
        tutorial.classList.toggle('hide')
    }       
    if (targetEl.classList.contains("btn-atack1")) {       
        
        hero1.atack()
        let btnHero1 = document.querySelector("#btn-atack1")
        let btnHero2 = document.querySelector("#btn-atack2")
        let turn1 = document.querySelector("#turn-player1")
        let turn2 = document.querySelector("#turn-player2")
        
        turn1.classList.toggle('hide')
        turn2.classList.toggle('hide')
        btnHero1.classList.toggle('hide')
        btnHero2.classList.toggle('hide')
        
    }
    if (targetEl.classList.contains("btn-atack2")) {      

        
        hero2.atack()
        let btnHero1 = document.querySelector("#btn-atack1")
        let turn1 = document.querySelector("#turn-player1")
        let btnHero2 = document.querySelector("#btn-atack2")
        let turn2 = document.querySelector("#turn-player2")

        turn1.classList.toggle('hide')
        btnHero1.classList.toggle('hide')
        btnHero2.classList.toggle('hide')
        turn2.classList.toggle('hide')

    }
    if (targetEl.classList.contains("btn-up")) {       
        newSkill = parentEl.querySelector('h3')
        currentSkillPoints = skillPointsValue.innerHTML
        btnUp()        
        lifeGen()                     
    }
    if (targetEl.classList.contains("btn-down")) {
        
        newSkill = parentEl.querySelector('h3')
        currentSkillPoints = skillPointsValue.innerHTML        
        btnDown()
        lifeGen()
    } 
    if(targetEl.classList.contains('btn-del-card')){
        if (confirm("Apagar esse Heroi?") == true) {
        parentForm.remove()
    }}
    if(targetEl.classList.contains('btn-edit-card')){
   
        newName = prompt("Qual o nome Do se Heroi?")
        if (newName){
            oldName = parentEl.querySelector('h2')
            
            oldName.innerHTML = newName.toUpperCase()
        }
    }
    if(targetEl.classList.contains('btn-save')){
        saveLocalStorage()     
    }    
    if(targetEl.classList.contains('btn-delet-card')){
        
        let deleteIdlocal = parentForm.querySelector('#save-id').innerHTML
        localStorage.removeItem(`${deleteIdlocal}`)
        location.reload()
        
    }
    if(targetEl.classList.contains('btn-add-user')){
        
        let skillPoints = document.querySelector('.skill-number').innerHTML
        
        if (skillPoints == 0 ){addHero()}
        else if(skillPoints != 0)
        {alert("Voc?? ainda tem " + `${skillPoints}` +  " pra usar...    Clique na '?' pra tirar duvidas")}
        return
                
    }
    if (targetEl.classList.contains("btn-load")){
        load()
        openHero()     
    }       
})
// function
function btnDown() {
    addSkill = newSkill.innerHTML
    if(addSkill > 0 && currentSkillPoints >= 0){
        newSkillValue = parseInt(addSkill)
        newSkill.innerHTML = newSkillValue -1 
        skillPointsValue.innerHTML = parseInt(currentSkillPoints) +1
    }  
}
function btnUp(){
    
    addSkill = newSkill.innerHTML
    if(addSkill < 6 && currentSkillPoints > 0){
        newSkillValue = parseInt(addSkill)
        newSkill.innerHTML = newSkillValue +1 
        skillPointsValue.innerHTML = currentSkillPoints -1
    }            
}
function lifeGen(){

    let lifeValue = document.querySelector(".life-number")
    
        
    let resistanceLife = document.querySelector(".resistance-number")
    newResLife = resistanceLife.innerHTML

    lifeValue.innerHTML = parseInt(newResLife *6 ) * 3 
    
}
function dice(max,r) {

    return Math.floor(Math.random() * max + 1)*r
}
//------------------------
 function openHero(){ 

    for (let[key] of Object.entries(localStorage)){
                        
        if(key == "hero1"){

            let savedHero1 = localStorage.getItem('hero1')
            preHero1 = JSON.parse(savedHero1)
            
            hero1 = new Hero("","","","","hero1",preHero1.name,"",preHero1.strong,
            preHero1.dextrecity,preHero1.resistance,preHero1.armor,preHero1.life,"","") 

            hero1.createHeader(preHero1.name,preHero1.life)
            hero1.createSkills("strong", "FOR??A" , preHero1.strong)
            hero1.createSkills("dextricity", "HABILIDADE" , preHero1.dextrecity)
            hero1.createSkills("resistance", "RESISTENCIA" , preHero1.resistance)
            hero1.createSkills("armor", "ARMADURA" , preHero1.armor)
                
        }else if(key == "hero2"){
                                     
            let savedHero2 = localStorage.getItem('hero2')
            preHero2 = JSON.parse(savedHero2)
    
            hero2 = new Hero("","","","","hero2",preHero2.name,"",preHero2.strong,
            preHero2.dextrecity,preHero2.resistance,preHero2.armor,preHero2.life,"","")
               
            hero2.createHeader(preHero2.name,preHero2.life)
            hero2.createSkills("strong", "FOR??A" , preHero2.strong)
            hero2.createSkills("dextricity", "HABILIDADE" , preHero2.dextrecity)
            hero2.createSkills("resistance", "RESISTENCIA" , preHero2.resistance)
            hero2.createSkills("armor", "ARMADURA" , preHero2.armor)
                
        }
    } 
    
      
}
function addHero(){


    let playerPosition = document.querySelectorAll('.player')
    
    player = playerPosition.length 
    
        if(player == 0){              
        
        let newNameHero = document.querySelector('.card-title').innerHTML
        let newStrongHero = document.querySelector('.strong-number').innerHTML
        let newDextricityHero = document.querySelector('.dextricity-number').innerHTML
        let newResistanceHero = document.querySelector('.resistance-number').innerHTML
        let newArmorHero = document.querySelector('.armor-number').innerHTML
        let newLifeHero = document.querySelector('.life-number').innerHTML

    
        let hero1 = {id:"hero1",name:newNameHero,strong:newStrongHero,dextrecity:newDextricityHero,
            resistance: newResistanceHero,armor: newArmorHero,life:newLifeHero}

        localStorage.setItem('hero1', JSON.stringify(hero1))

    hero1 = new Hero("","","","","hero1",newNameHero,"",newStrongHero,newDextricityHero,newResistanceHero,newArmorHero,newLifeHero,"","")
           
        hero1.createHeader(newNameHero,newLifeHero)
        hero1.createSkills("strong", "FOR??A" , newStrongHero)
        hero1.createSkills("dextricity", "HABILIDADE" , newDextricityHero)
        hero1.createSkills("resistance", "RESISTENCIA" , newResistanceHero)
        hero1.createSkills("armor", "ARMADURA" , newArmorHero)
              
    } else if(player == 1 ){
        
            let newNameHero = document.querySelector('.card-title').innerHTML
            let newStrongHero = document.querySelector('.strong-number').innerHTML
            let newDextricityHero = document.querySelector('.dextricity-number').innerHTML
            let newResistanceHero = document.querySelector('.resistance-number').innerHTML
            let newArmorHero = document.querySelector('.armor-number').innerHTML
            let newLifeHero = document.querySelector('.life-number').innerHTML
            
            let hero2 = {id:"hero2",name:newNameHero,strong:newStrongHero,dextrecity:newDextricityHero,
                resistance: newResistanceHero,armor: newArmorHero,life:newLifeHero}

    
            localStorage.setItem('hero2', JSON.stringify(hero2))

    hero2 = new Hero("","","","","hero2",newNameHero,"",newStrongHero,newDextricityHero,newResistanceHero,newArmorHero,newLifeHero,"","")
            
        hero2.createHeader(newNameHero,newLifeHero)
        hero2.createSkills("strong", "FOR??A" , newStrongHero)
        hero2.createSkills("dextricity", "HABILIDADE" , newDextricityHero)
        hero2.createSkills("resistance", "RESISTENCIA" , newResistanceHero)
        hero2.createSkills("armor", "ARMADURA" , newArmorHero)

        location.reload()
                
        let card = document.querySelector("#card")
        let combateBtn = document.querySelector("#combate-interaction")

        combateBtn.classList.toggle('hide')
        card.classList.toggle('hide')
        
        let btnHero2 = document.querySelector("#btn-atack2")
        let turn2 = document.querySelector("#turn-player2")
        
        turn2.classList.toggle('hide')
        btnHero2.classList.toggle('hide')

        let turn1name = document.querySelector("#turn-player1")
        let turn2name = document.querySelector("#turn-player2")
        turn1name.innerHTML = hero1.name
        turn2name.innerHTML = hero2.name

        

    }

    if(player >= 1){

        openHero()

    }

    
}
function load(){
    let cardContainer = document.querySelector("#card")
    let cardCombate = document.querySelector("#combate-interaction")

    let btnHero2 = document.querySelector("#btn-atack2")
    let turn2 = document.querySelector("#turn-player2")

    
    btnHero2.classList.toggle('hide')
    turn2.classList.toggle('hide')

    cardContainer.classList.toggle('hide')
    cardCombate.classList.toggle('hide')
}

class Hero {
 
    constructor(container, player, form, header,id , name, cardSkill,
    Strong, Dextrecity, Resistance, Armor, Life, ProgressBar, Dano ) {
        
        this.container = container
        this.player = player
        this.form = form
        this.header = header
        this.id = id
        this.name = name
        this.cardSkill = cardSkill
        this.Strong = Strong
        this.Dextrecity = Dextrecity
        this.Resistance = Resistance
        this.Armor = Armor
        this.Life = Life
        this.ProgressBar = ProgressBar
        this.Dano = Dano
    }
    createHeader(nameHero,lifeHero) {
        
        this.container = document.querySelector('#combate-container');
                
        this.player = document.createElement("div");
        this.player.classList.add("player");
        this.container.appendChild(this.player);    
    
        this.form = document.createElement("form");
        this.form.setAttribute('id', 'card-combate')
        this.form.classList.add("card-combate")
        this.player.appendChild(this.form);    
        
        this.header = document.createElement("div");
        this.header.classList.add("card-header");
        this.form.appendChild(this.header);

        let btnEditCard = document.createElement("button");
        btnEditCard.classList.add('btn-edit-card');
        btnEditCard.innerHTML = '<i class="fa-solid fa-x"></i>';
        this.header.appendChild(btnEditCard);
        
        let cardTitle = document.createElement("h2");
        cardTitle.classList.add('card-title')
        this.Name = nameHero.toUpperCase();
        cardTitle.innerHTML = this.Name;
        this.header.appendChild(cardTitle);
    
        let btnDelCard = document.createElement("button");
        btnDelCard.classList.add('btn-del-card');
        btnDelCard.innerHTML = '<i class="fa-solid fa-x"></i>';
        this.header.appendChild(btnDelCard);
            
        this.ProgressBar = document.createElement("progress");
        this.ProgressBar.classList.add("progress-bar");
        this.ProgressBar.setAttribute("max", lifeHero)
        this.ProgressBar.setAttribute("value", this.Life)
        this.ProgressBar.innerHTML = this.life
        this.form.appendChild(this.ProgressBar);

        this.cardSkill = document.createElement('div');
        this.cardSkill.classList.add('card-skill-combate');
        this.form.appendChild(this.cardSkill)
                
    }
    createSkills(classe,title,value){     
       
        this.player = document.createElement("div");
        this.player.classList.add(`player-${classe}`);
        this.cardSkill.appendChild(this.player);

        let titleP = document.createElement("p");
        titleP.classList.add("skill-title");
        titleP.innerHTML = title
        this.player.appendChild(titleP);
        
        let skillNumberWin = document.createElement('h3')
        skillNumberWin.classList.add(`${classe}-number`)
        skillNumberWin.innerHTML = value
        this.player.appendChild(skillNumberWin)
    }       
    atack(){        
              
        const combateText = document.querySelector('#combate-text')
        let rollDice = dice(6,0)
        if(rollDice == 6 || rollDice == 1){            
            switch (rollDice) {
                    
                case 6:
                    this.Life --
                    this.ProgressBar.setAttribute("value", this.Life)
                    
                    if(this.Life <= 0 ){
                        combateText.innerHTML = this.Name + ", se machucou com a pr??pria arma e morreu. Tragico, tragico"

                    }else{
                    combateText.innerHTML = this.Name + ", se machucou com a pr??pria arma."
                    }

                break;
                
                case 1:
                    this.Dano = dice(6,this.Strong)*2;
                    
                    if(this.id == "hero1"){
                    hero2.Life = hero2.Life - (hero2.Armor - this.Dano)
                    hero2.ProgressBar.setAttribute("value", hero2.Life)
                
                    combateText.innerHTML = this.Name + " causou " + this.Dano +
                    " de Dano CRITICO <br>"  + hero2.Name + " esta com " + hero2.Life + " de Vida"
                    
                    
                } else if ( this.id == "hero2"){
                    hero1.Life = hero1.Life - (hero1.Armor - this.Dano)
                    hero1.ProgressBar.setAttribute("value", hero1.Life)
                                
                    combateText.innerHTML = this.Name + " causou " + this.Dano +
                    " de Dano CRITICO <br>"  + hero1.Name + " esta com " + hero1.Life + " de Vida"
                    
                    
                }
                
                break;
                

                default:
                } } else {                                 
                let resDice = ((this.Dextrecity > rollDice) ? "maior" : "menor")
                    
                    switch (resDice) {
                        
                        case "maior":
                            this.Dano = dice(6,this.Strong);
                                                
                            if(this.id == "hero1"){
                            hero2.Life = hero2.Life - (this.Dano - hero2.Armor)
                        
                            combateText.innerHTML = this.Name + " causou " + this.Dano +
                            " de Dano <br>"  + hero2.Name + " esta com: " + hero2.Life + " de Vida"
                            
                            hero2.ProgressBar.setAttribute("value", hero2.Life)
                       

                        } else if ( this.id == "hero2"){
                            hero1.Life = hero1.Life - (this.Dano - hero1.Armor)

                            combateText.innerHTML = this.Name + " causou " + this.Dano +
                            " de Dano <br>"  + hero1.Name + " esta com: " + hero1.Life + " de Vida"
                            
                            hero1.ProgressBar.setAttribute("value", hero1.Life)
                          

                        }
                        break;
                            
                        case "menor":
                            combateText.innerHTML = this.Name + ", errou o Ataque"
                            console.log(this.Name + ", errou o Ataque")
                                                        
                        break;
                            
                    default:
                        
                }
                if (hero1.Life <= 0){
                    
                    if(confirm('????'+hero1.Name + ' morreu'+'????,  !!'
                    + hero2.Name +"????????"+ " ?? o VENCEDOR!! " + "Quer uma revanche?") == true){
                        location.reload()
                        openHero()
                    } else {
                    location.reload()}
                    
                } else if(hero2.Life <= 0) {
                    
                    if(confirm('????'+hero2.Name+  ' morreu'+'????, !!'+ hero1.Name +"????????"+ " ?? o VENCEDO!! " + "Quer uma revanche?") == true){
                        location.reload()
                        openHero()
                    } else {
                    location.reload()}
                }
            
            }        
        }               
    info(){
        console.log("container: "+this.container)
        console.log("player: "+this.player)
        console.log("form: "+this.form)
        console.log("header :"+this.header)
        console.log("name: "+this.name)
        console.log("cardSkil: "+this.cardSkill)
        console.log("strong: "+this.Strong)
        console.log("dextricity: "+this.Dextrecity)
        console.log("resistance: "+this.Resistance)
        console.log("life: "+this.Life)
        console.log("armor: "+this.Armor)
        console.log("dano: "+this.Dano)
            
    }
   
}

