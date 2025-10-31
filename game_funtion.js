 const space_ship = document.getElementById("space_ship");
    const body = document.querySelector("body");
    const ammo_img = "GAME_ASSET/Fir_Ammo.PNG" 
    let x_position = window.innerWidth/2
    space_ship.style.left = x_position+"px"
    space_ship.style.translateX = "-50%";
    let score = 0;
    const score_board  = document.createElement("div")
    score_board.id = "score_board"
    score_board.innerText = `Score: ${score}`
    body.appendChild(score_board);


    // generate all enemy in frame 
    let enemy_widht = 100
    let enemy_height = 100
    let screen_width = window.innerWidth
    let gap = (screen_width-8*enemy_widht)/(8+1)

    for(let i=1; i<=2; i++){ 
      for(let j=1; j<=9; j++){
        let enemy = document.createElement("div");
        enemy.classList.add("enemy")
        let img = document.createElement("img")
        const enemy_img = "GAME_ASSET/gun-alien-firing-animation.gif"
        img.src = enemy_img
        enemy.appendChild(img);

        const positionX = j * (enemy_widht+gap); 
        const positionY = 20 + i * (enemy_height+10);
        enemy.style.position = "absolute";
        enemy.style.left = `${positionX}px`;
        enemy.style.top = `${positionY}px`;
        enemy.style.width = enemy_widht+"px";
        enemy.style.height = enemy_height+"px";
       
        body.appendChild(enemy)
      }
        console.log("")
    }


    // moving space shipe 
    document.addEventListener("keydown",  (e)=>{
        let step = 20
        let rect = space_ship.getBoundingClientRect();
        let currentLeft = parseInt(space_ship.style.left) || window.innerWidth/2;

        // console.log(rect)
        // console.log(window.innerWidth)
        
        if(e.key === "ArrowRight" && rect.right< window.innerWidth){
            space_ship.style.left = currentLeft + step +"px"
            
        }
        if (e.key === "ArrowLeft" && rect.left > 0) {
            space_ship.style.left = currentLeft - step + "px";
        }

    })

    
    // shooting funtion 
    document.addEventListener("keypress" , (e)=>{
      if(e.code === "Space"){
        const ammo = document.createElement("div")
        const img = document.createElement("img");
        img.src = ammo_img
        ammo.appendChild(img)
        let rect = space_ship.getBoundingClientRect();
        let positionX = rect.x + 60 - 7.5
        let positionY =  rect.y - 15
        console.log("ammo positon ", positionX)
        ammo.style.position = "absolute"
        ammo.style.width = "15px"
        ammo.style.height = "15px"
        ammo.style.left = positionX +"px";
        ammo.style.top = positionY+"px"
        ammo.style.zIndex = "100";
        body.appendChild(ammo)

        // moving  ammo upward
        const interval = setInterval(()=>{
          positionY -= 10;
          ammo.style.top = positionY+"px"
          // check collition of enemy and 
          document.querySelectorAll(".enemy").forEach((enemy)=>{
            const enmey_rect = enemy.getBoundingClientRect();
            const ammo_rect  = ammo.getBoundingClientRect();
            const all_enemy= document.querySelectorAll(".enemy")
            
            if(
              ammo_rect.left<enmey_rect.right&&
              ammo_rect.right>enmey_rect.left&&
              ammo_rect.top<enmey_rect.bottom&&
              ammo_rect.bottom>enmey_rect.top
            ){
              enemy.remove();
              ammo.remove();
              score ++
              score_board.innerText  = `Score: ${score}`
              if(all_enemy.length === 1){
                alert("you win space war!")
                location.reload();
              }
            }
          })
          if(positionY<0){
            ammo.remove();
            clearInterval(interval);
          }
        },30)
      }
    })