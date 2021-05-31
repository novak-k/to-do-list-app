import React from 'react';
// import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';


import './index.css';
import App from './components/app/'; //по умолчанию ищет папку

ReactDOM.render(<App/>, document.getElementById('root'));



// class WhoAmI extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       years: 26
//       // nationality: ua
//     }
//     this.nextYear = this.nextYear.bind(this);    //#1
    // this.nextYear = () => {     //#2
    //   this.setState(state =>({
    //     years: ++state.years
    //   }))
    // }
  // }
  // state = {            //так же может и стейт работать(как #3)
  //   years: 26
  // }        
  // nextYear = () => {     //#3(classFields - not in standart yet) стрелочн_ф-ция
  //   this.setState(state =>({
  //     years: ++state.years
  //   }))
  // }

//   nextYear(){          //в метод записан класс
//     // this.state.years++ //так работает
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }
//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname - {surname}, years - {years} </h1>
//         <a href={link} target="_blank" rel="noreferrer">My profile</a>
//       </>
//     ) 
//   }
// }


// const All = () => {
//   return (
//      <>
//         <WhoAmI name="John" surname="Smth" link="https://facebook.com"/>
//         <WhoAmI name="Kate" surname="Smth" link="https://facebook.com"/>
//         <WhoAmI name="Sam" surname="Smth" link="https://vk.com"/>
//     </>
//   )
// }
// ReactDOM.render(<All/>, document.getElementById('root'));



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

