const header = document.querySelector('header');
const main = document.querySelectorAll('main');
const skillPointsValue = document.querySelector(".skill-number")

for (let[key, value] of Object.entries(localStorage)){
    let localStorage = document.getElementById('card-open')
    openContainer(`${key}`)      
    for(i=0, len = localStorage.length; i < len; i++){
    }
}
document.addEventListener('click', (e)=>{
    e.preventDefault()
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    const parentForm = targetEl.closest("form");
    //const parentCard = parentEl.closest(".card-score")
    
    if (targetEl.classList.contains("add-user")){

        newName = prompt("Qual o nome?")
        card = document.querySelector('form')

        card.remove()

        if (newName){

            createHeaderUser(newName)
            createSkillUser("strong","FORÇA",0)
            createSkillUser("dextricity","HABILIDADE",0)
            createSkillUser("resistance","RESISTENCIA",0)
            createSkillUser("armor","ARMADURA",0)
            createLifeUser("skill","PONTOS",10)
        }         
    }
    if (targetEl.classList.contains("btn-up")) {

        let skillPointsValue = document.querySelector(".skill-number")
        newSkill = parentEl.querySelector('h3')
        currentSkillPoints = skillPointsValue.innerHTML
        
        addSkill = newSkill.innerHTML
        if(addSkill < 6 && currentSkillPoints > 0){
            newSkillValue = parseInt(addSkill)
            newSkill.innerHTML = newSkillValue +1 
            skillPointsValue.innerHTML = currentSkillPoints -1
        }                        
        let lifeValue = document.querySelector(".life-number")
        
        let resistanceLife = document.querySelector(".resistance-number")
        newResLife = resistanceLife.innerHTML

        lifeValue.innerHTML = parseInt(newResLife) * 6



        
        
        

    }
    if (targetEl.classList.contains("btn-down")) {
        
        newSkill = parentEl.querySelector('h3')
        currentSkillPoints = skillPointsValue.innerHTML
        
        addSkill = newSkill.innerHTML
        if(addSkill > 0 && currentSkillPoints > 0){
        newSkillValue = parseInt(addSkill)
        newSkill.innerHTML = newSkillValue -1 
        skillPointsValue.innerHTML = parseInt(currentSkillPoints) +1
        }

    }   
    if (targetEl.classList.contains("clear-all")) {
        
        if (confirm("Apagar TODOS Jogadores?") == true) {
        let clearAllCards = document.querySelectorAll('.card')
        
        for(i=0, len = clearAllCards.length; i < len; i++){

            clearAllCards[i].remove()
        }        
    }}
    if(targetEl.classList.contains('btn-del-card')){
        if (confirm("Apagar esse Heroi?") == true) {
        parentForm.remove()
    }}
    if(targetEl.classList.contains('btn-edit-card')){
   
        newName = prompt("Qual o nome?")
        if (newName){
            oldName = parentEl.querySelector('h2')
            
            oldName.innerHTML = newName.toUpperCase() 

            console.log(oldName)
    }}
    if(parentEl.classList.contains('btn-reset-card')){
        if (confirm("Apagar PONTOS desse Jogador?") == true) {
                    
        scoreUser = parentForm.querySelectorAll('h3')
        scoreUserTotal = parentForm.querySelectorAll('h4')

        for(i=0, len = scoreUser.length; i < len; i++){

            
            scoreUser[i].innerHTML = "0"
        }
        for(i=0, len = scoreUserTotal.length; i < len; i++){

            
            scoreUserTotal[i].innerHTML = "0"
        }
    }}
    if(targetEl.classList.contains('btn-menu')){
        
        let cardContainer = document.querySelector('#card-container');
        let btnContainer = document.getElementById('btn-container')
        let cardOpen = document.querySelector('#card-open-container')
        //let titleFestival = document.querySelector('#name-festival') 
        
        cardContainer.classList.toggle('hide');
        btnContainer.classList.toggle('hide');        
        cardOpen.classList.toggle('hide');
        //titleFestival.classList.toggle('hide');
        titleOpen.classList.toggle('hide');
       
    }
    if(targetEl.classList.contains('btn-save')){
        saveLocalStorage()     
    }
    if(targetEl.classList.contains('btn-open')){
        let cardContainer = document.querySelector('#card-container');
        let btnContainer = document.getElementById('btn-container')
        let cardOpen = document.querySelector('#card-open')
        //let titleFestival = document.querySelector('#name-festival') 
                
        cardContainer.classList.toggle('hide');
        btnContainer.classList.toggle('hide');        
        cardOpen.classList.toggle('hide');
        //titleFestival.classList.toggle('hide');
       // titleOpen.classList.toggle('hide');

    }
    if(targetEl.classList.contains('btn-delete')){
        if (confirm("Apagar dados Salvos?") == true) {
            localStorage.clear()      
        }
        location.reload()
    
    }
    if(targetEl.classList.contains('btn-open-card')){
        
        let cardOpen = document.querySelector('#card-open')
        let openSaveId = parentForm.querySelector('#save-id').innerHTML
        let cardId = document.querySelector('#card-container')
        let btnContainerMenu = document.querySelector('#btn-container')

        cardOpen.classList.toggle('hide')
        cardId.classList.toggle('hide')
        btnContainerMenu.classList.toggle('hide')
        
        openId = JSON.parse(localStorage.getItem(`${openSaveId}`)) 

        cardId.innerHTML = ""
        
         
        for(i=0, len = openId.length; i < len; i++){

            createHeaderUser(openId[i].userName)
            createSkillUser("strong","FORÇA",openId[i].userStrong)
            createSkillUser("dextricity","HABILIDADE",openId[i].userDextricity)
            createSkillUser("resistance","RESISTENCIA",openId[i].userresistance)
            createSkillUser("armor","ARMADURA",openId[i].userArmor)
            createLifeUser("points","PONTOS",openId[i].userLife)

        }
        
    }    
    if(targetEl.classList.contains('btn-delet-card')){
        
        let deleteIdlocal = parentForm.querySelector('#save-id').innerHTML
        localStorage.removeItem(`${deleteIdlocal}`)
        location.reload()
        
    }
});

// function

function createHeaderUser(name) {
    
    

    let cardContainer = document.querySelector('main');
    
    let card = document.createElement("form");
    card.setAttribute('id', 'card')
    card.classList.add("card");
    cardContainer.appendChild(card);    
    
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    let btnEditCard = document.createElement("button");
    btnEditCard.classList.add('btn-edit-card');
    btnEditCard.innerHTML = '<i class="fa-solid fa-user-pen"></i>';
    cardHeader.appendChild(btnEditCard);

    let cardTitle = document.createElement("h2");
    cardTitle.classList.add('card-title')
    userName = name.toUpperCase();
    cardTitle.innerHTML = userName.slice(0,8);
    cardHeader.appendChild(cardTitle);
    
    let btnResetCard = document.createElement("button");
    btnResetCard.classList.add('btn-reset-card');
    btnResetCard.innerHTML = '<i class="fa-solid fa-eraser"></i>';
    cardHeader.appendChild(btnResetCard);

    let btnDelCard = document.createElement("button");
    btnDelCard.classList.add('btn-del-card');
    btnDelCard.innerHTML = '<i class="fa-solid fa-x"></i>';
    cardHeader.appendChild(btnDelCard);
    
    
    let cardScore = document.createElement("div");
    cardScore.classList.add("card-score");
    card.appendChild(cardScore);
}

function createSkillUser(classe,title,value){  
    
    let cardScore = document.querySelector(".card-score");
    
    let card = document.createElement("div");
    card.classList.add(`card-${classe}`);
    cardScore.appendChild(card);

    let titleP = document.createElement("p");
    titleP.classList.add("score-title");
    titleP.innerHTML = title
    card.appendChild(titleP);

    let btnWinUp = document.createElement("button");
    btnWinUp.classList.add('btn-up');
    btnWinUp.innerHTML = '<i class="fa-solid fa-caret-up">';
    card.appendChild(btnWinUp);
    
    let scoreNumberWin = document.createElement('h3')
    scoreNumberWin.classList.add(`${classe}-number`)
    scoreNumberWin.innerHTML = value
    card.appendChild(scoreNumberWin)

    let btnWinDown = document.createElement("button");
    btnWinDown.classList.add('btn-down');
    btnWinDown.innerHTML = '<i class="fa-solid fa-caret-down">';
    card.appendChild(btnWinDown);
}

function createLifeUser(classe,title,value){

    let cardScore = document.querySelector('.card-score')
    let form = document.querySelector('form')
    
    let userTotalScore = document.createElement('div')
    userTotalScore.classList.add(`card-skill`)
    cardScore.appendChild(userTotalScore)

    let titleUserTotal = document.createElement('p')
    titleUserTotal.classList.add('score-title')
    titleUserTotal.innerHTML = title
    userTotalScore.appendChild(titleUserTotal)

    let scoreTotalUser = document.createElement('h3')
    scoreTotalUser.classList.add('skill-number')
    scoreTotalUser.innerHTML = value
    userTotalScore.appendChild(scoreTotalUser)   

    let titleUser = document.createElement('p')
    titleUser.innerHTML = "*PONTOS DE VIDA É SUA RESISTENCIA x6"
    form.appendChild(titleUser)

    let lifePoints = document.createElement('h3')
    lifePoints.classList.add('life-number')
    lifePoints.innerHTML = 0
    form.appendChild(lifePoints)    


}

function openContainer(openId){

    let cardOpenLocal = document.getElementById('card-open')

    saveForm = document.createElement('form')
    saveForm.classList.add('card-open')        
    saveForm.setAttribute('id', 'card-open')
    cardOpenLocal.appendChild(saveForm)
    
    btnEditCard = document.createElement("button");
    btnEditCard.classList.add('btn-open-card');
    btnEditCard.innerHTML = '<i class="fa-regular fa-folder-open"></i>';
    saveForm.appendChild(btnEditCard);
    
    saveId = document.createElement('h3')
    saveId.classList.add('save-id')
    saveId.setAttribute("id","save-id")
    saveId.innerHTML = openId
    saveForm.appendChild(saveId)

    btnEditCard = document.createElement("button");
    btnEditCard.classList.add('btn-delet-card');
    btnEditCard.innerHTML = '<i class="fa-solid fa-x"></i>';
    saveForm.appendChild(btnEditCard);

      
}

function saveLocalStorage(){
    
    let cardSave = document.querySelectorAll('#card')
        
    let localFestival = new Array() 

    for(i=0, len = cardSave.length; i < len; i++){
        
       
        const userSaveName = document.querySelector('.card-title')
        const userSaveStrong = document.querySelector('.strong-number')
        const userSaveDextricity = document.querySelector('.dextricity-number')
        const userSaveresistance = document.querySelector('.resistance-number')
        const userSaveArmor = document.querySelector('.armor-number')
        const userSaveLife = document.querySelector('.life-number')
        
        let userName = userSaveName.innerHTML 
        let userStrong = userSaveStrong.innerHTML 
        let userDextricity = userSaveDextricity.innerHTML
        let userresistance = userSaveresistance.innerHTML
        let userArmor = userSaveArmor.innerHTML
        let userLife = userSaveLife.innerHTML




    if(localStorage.hasOwnProperty(`${userName}`)){
        localFestival =  JSON.parse(localStorage.getItem(`${userName}${i}`))
    }
    
    localFestival.push({userName, userStrong, userDextricity, userresistance, userArmor, userLife})
    
    localStorage.setItem(`${userName}`,JSON.stringify(localFestival));
    

        cardSave[i].remove()
    }

    location.reload()
}