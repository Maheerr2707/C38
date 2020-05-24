class Player {
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    } 

  getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
          playerCount = data.val()
      })  
  }

  updateCount(count){
     database.ref('/').update({
         playerCount : count
     })
   } 
  
  update(){
      var playerIndex = "players/player"+this.index
      database.ref(playerIndex).set({
          Name : this.name,
          distance : this.distance
      })
  }

static getPlayerinfo(){
    var playerinforef = database.ref('players')
    playerinforef.on("value",(data)=>{
        allPlayers = data.val()
      console.log("getPlayerinfo" +allPlayers) 
    })
}

 }