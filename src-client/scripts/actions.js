const Backbone = require('backbone');
// const UserModel  = require('./model-user.js')
// const {TodoModel, TodoCollection}  = require('./model-user.js')


const ACTIONS = {
  authenticateUser: function(userDataObj){
     console.log(userDataObj)
     let userMod = new UserModel()
     userMod.set(userDataObj)
     console.log(userMod)


    userMod.save().then(function(serverRes){
      console.log(serverRes)
      location.hash = ""
    })
  },

  fetchSudsCollection: function(queryObj){
     const sudsColl = new SudsCollection()
     .fetch().then(function(){
        STORE.setStore('currentSuds', sudsColl.models )
     })

  },

  createNewSuds: function(newSudsData){
     const sudsMod = new SudsModel()
     sudsMod.set(newSudsData)
     return sudsMod.save().then(function(){
        window.location.hash = "suds"
     })
  },


}

module.exports = ACTIONS