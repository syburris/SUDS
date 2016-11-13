const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const AppViewController = require('./viewcontroll.js')
const STORE = require ('./store.js')


const AppRouter = Backbone.Router.extend ({
  routes: {
   //  "/singleview" : "renderSingleView",
   //  "/input" : "renderSUDSInput",
   //  "/suds"  : "renderMultiSUDSView",
   //  "/user" : "renderCreateUserView",
    "login" : 'renderAuthView'
  },

// renderSingleView: function(){
//   ReactDOM.render(<AppViewController routedFrom="SingleView"/>, document.querySelector('app-container'))
// },
//
// renderSUDSinput: function(){
//   ReactDOM.render(<AppViewController routedFrom="SUDSInput"/>, document.querySelector('app-container'))
// },
//
// renderMultiSUDSView: function (){
//   ReactDOM.render(<AppViewController routedFrom="MultiSUDSView"/>, document.querySelector('app-container'))
// },
//
// renderCreateUserView: function (){
//   ReactDOM.render(<AppViewController routedFrom="CreateUserView"/>, document.querySelector('app-container'))
// },

renderAuthView: function (){
   console.log("auth view router");
  ReactDOM.render(<AppViewController routedFrom="AuthView"/>, document.querySelector('#app-container'))
},

initialize: function(){
   console.log("router init");
  Backbone.history.start();
}


})





document.querySelector('#app-container').innerHTML = `<h1>Yah okay</h1>`

let app = new AppRouter()
