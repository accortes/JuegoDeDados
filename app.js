var currentp1 = 0;
var currentp2 = 0;
var numRandom = 0;
var banderara = 0;
var resultado0 = 0;
var resultado1 = 0;


document.querySelector(".btn-new").addEventListener('click', function(){
    
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector(".player-0-panel").classList.add('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".btn-roll").disabled = false;
    document.querySelector(".btn-hold").disabled = false;
    document.querySelector("#name-0").innerText="Player 1";
    document.querySelector("#name-1").innerText="Player 2";
    
    if(banderara === 1){
        currentp1 = 0;
        currentp2 = 0;
        numRandom = 0;
        banderara = 0;
        resultado0 = 0;
        resultado1 = 0;
        
    }else{
        currentp1 = 0;
        currentp2 = 0;
        numRandom = 0;
        banderara = 0;
        resultado0 = 0;
        resultado1 = 0;
    }
    
})

    document.querySelector(".btn-roll").addEventListener('click', function(){ 
    
    switch(banderara){
        case 0:
            numRandom = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").src="dice-" + numRandom + ".png"
    
        document.getElementById("current-0").innerText = (currentp1 = currentp1 + numRandom);
             
            if(numRandom == 1){
                document.getElementById("current-0").innerText = 0;
                currentp1 = 0;
                banderara = 1;
                document.querySelector(".player-0-panel").classList.remove('active');
                document.querySelector(".player-1-panel").classList.add('active');
            }
            break;
        case 1:
            
            numRandom = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").src="dice-" + numRandom + ".png"
    
        document.getElementById("current-1").innerText = (currentp2 = currentp2 + numRandom);
            
            if(numRandom == 1){
                document.getElementById("current-1").innerText = 0;
                currentp2 = 0;
                banderara = 0;
                document.querySelector(".player-0-panel").classList.add('active');
                document.querySelector(".player-1-panel").classList.remove('active');
                
            }
            break;
           }
    });
    
document.querySelector(".btn-hold").addEventListener('click', function(){
    if(banderara === 0){
       
    document.getElementById("score-0").innerText = resultado0 = currentp1 + resultado0;
    document.getElementById("current-0").innerText = 0;
    currentp1 = 0;
    banderara = 1;
    
        if(resultado0 >= 100){
            document.querySelector("#name-0").innerText="WINNER!!"
                 
            document.querySelector(".btn-roll").disabled = true;
            document.querySelector(".btn-hold").disabled = true;
            
            document.querySelector(".player-0-panel").classList.remove('active');
            document.querySelector(".player-1-panel").classList.add('active');
        }
        
        document.querySelector(".player-0-panel").classList.remove('active');
        document.querySelector(".player-1-panel").classList.add('active');
       
}else{
    document.getElementById("score-1").innerText = resultado1 = currentp2 + resultado1;
    document.getElementById("current-1").innerText = 0;
    currentp2 = 0;
    banderara = 0;
    
        if(resultado1 >= 100){
            document.querySelector("#name-1").innerText="WINNER!!"
                
            document.querySelector(".btn-roll").disabled = true;
            document.querySelector(".btn-hold").disabled = true;
            
            ocument.querySelector(".player-0-panel").classList.add('active');
            document.querySelector(".player-1-panel").classList.remove('active');
                
        }
        
        document.querySelector(".player-0-panel").classList.add('active');
        document.querySelector(".player-1-panel").classList.remove('active');
    }
    
})