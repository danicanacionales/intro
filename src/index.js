import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './FancyBorder.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// Chapter 2
  // function formatName(user){
  //   return user.firstName + ' ' + user.lastName;
  // }
  //
  // const user = {
  //   // firstName: 'Danica',
  //   // lastName: 'Nacionales'
  // };
  //
  // // function getGreeting(user){
  // //   if(user !== undefined){
  // //     return <h1> Hello, {formatName(user)}!</h1>;
  // //   }
  // //
  // //   return <h1>Hello, Stranger.</h1>
  // // }
  //
  // // const element = (
  // //   // <h1>
  // //   //   Hello, {formatName(user)}!
  // //   // </h1>
  // //
  // //   // getGreeting(user)
  // // );
  //
  // const element = React.createElement(
  //   'h1',
  //   {className: 'greeting'},
  //   'Hello, world!'
  // );
  //
  // ReactDOM.render(
  //   element,
  //   document.getElementById('root')
  // );


// // Chapter 3
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);

// Chapter 4
  // function Welcome(props){
  //   return <h1>Hello, {props.name}</h1>;
  // }
  //
  // function App() {
  //   return(
  //     <div>
  //       <Welcome name="Sara" />
  //       <Welcome name="Cahal" />
  //       <Welcome name="Edite" />
  //     </div>
  //   );
  // }
  //
  // // const element = <Welcome name="Sara" />
  // ReactDOM.render(
  //   // element,
  //   <App />,
  //   document.getElementById('root')
  // );
  // ReactDOM.render(<App />, document.getElementById('root'));


  // //Extracting Components
  //   function formatDate(date){
  //     return date.toLocaleTimeString();
  //   }
  //
  //   function UserInfo(props){
  //     return(
  //       <div className="UserInfo">
  //         <Avatar user={props.user} />
  //         <div className="UserInfo-name">
  //           {props.user.name}
  //         </div>
  //       </div>
  //     );
  //   }
  //
  //   function Avatar(props){
  //     return(
  //       <img className="Avatar"
  //         src={props.user.avatarUrl}
  //         alt={props.user.name}
  //       />
  //     );
  //   }
  //
  //   function Comment(props){
  //     return(
  //       <div className="Comment">
  //         <UserInfo user={props.author} />
  //
  //         <div className="Comment-text">
  //           {props.text}
  //         </div>
  //         <div className="Comment-date">
  //           {formatDate(props.date)}
  //         </div>
  //       </div>
  //     );
  //   }
  //
  //   const comment = {
  //     date: new Date(),
  //     text: 'I hope you enjoy learning React!',
  //     author: {
  //       name: 'Hello Kitty',
  //       avatarUrl: 'https://placekitten.com/g/64/64',
  //     }
  //   };
  //
  //   ReactDOM.render(
  //     <Comment
  //       date={comment.date}
  //       text={comment.text}
  //       author={comment.author}
  //     />,
  //     document.getElementById('root')
  //   );

// Chapter 5
  // function Clock(props){
  //   return (
  //     <div>
  //       <h1>Hello, world!</h1>
  //       <h2>It is {props.date.toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  // }

//   function FormattedDate(props) {
//     return <h2>It is {props.date.toLocaleTimeString()}.</h2>
//   }
//
//   class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//
//   render() {
//     return(
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }
//
// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }
//
//   // function tick(){
//     ReactDOM.render(
//       // <Clock date={new Date()} />,
//       // <Clock />,
//       <App />,
//       document.getElementById('root')
//     );
//   // }

// Chapter 6
// class Toggle extends React.Component {
//
//   constructor(props){
//     super(props);
//     this.state = {isToggleOn: true};
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick(){
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }
//
//   render() {
//     return (
//       // <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
//
// }
//
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// Chapter 7
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>
// }
//
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn) {
//     return <UserGreeting />;
//   }
//
//   return <GuestGreeting />;
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
//
// class LoginControl extends React.Component {
//   constructor(props){
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false}
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
//
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return(
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }
//
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );

// Chapter 8
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
// // console.log(doubled);
//
// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
//
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

  // function ListItem(props){
  //   return <li>{props.value}</li>
  // }
  //
  // function NumberList(props) {
  //   const numbers = props.numbers;
  //   const listItems = numbers.map((number) =>
  //     <ListItem key={number.toString()}
  //               value={number} />
  //   );
  //
  //   return(
  //     <ul>
  //       {listItems}
  //     </ul>
  //   );
  // }
  //
  // const numbers = [1, 2, 3, 4, 5];
  // ReactDOM.render(
  //   <NumberList numbers={numbers} />,
  //   document.getElementById('root')
  // );

// function Blog(props){
//   const sidebar = (
//       <ul>
//         {props.posts.map((post) =>
//           <li key={post.id}>
//             {post.title}
//           </li>
//         )}
//       </ul>
//   );
//
//   const content =  props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//
//   return(
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }
//
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
//
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );


// Chapter 9
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value.toUpperCase()});
//   }
//
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
//
//
// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );

// class Reservation extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     }
//
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
//
//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
//
//     this.setState({
//       [name]: value
//     });
//   }
//
//   render(){
//     return(
//       <form>
//         <label>
//           Is going:
//           <input name="isGoing"
//                 type="checkbox"
//                 checked={this.state.isGoing}
//                 onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//            Number of guests:
//           <input name="numberOfGuests"
//                 type="number"
//                 value={this.state.numberOfGuests}
//                 onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// );

// Chapter 10
// function BoilingVerdict(props) {
//   if(props.celcius >= 100) {
//     return <p>The water would boil.</p>
//   }
//   return <p>The water would not boil.</p>
// }
//
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }
//
//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }
//
//   render() {
//     const temperature = this.state.temperature;
//     return(
//       <fieldset>
//         <legend>Enter temperature in Celcius:</legend>
//         <input value={temperature} onChange={this.handleChange} />
//
//         <BoilingVerdict celcius={parseFloat(temperature)} />
//       </fieldset>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

// const scaleNames = {
//   c: 'Celcius',
//   f: 'Fahrenheit'
// }
//
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//     console.log(props);
//   }
//
//   handleChange(e){
//     // this.setState({temperature: e.target.value});
//     this.props.onTemperatureChange(e.target.value);
//   }
//
//   render() {
//     // const temperature = this.state.temperature;
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//
//     return(
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature} onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
//
// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }
//
// function toFahrenheit(celsius){
//   return (celsius * 9 / 5) + 32;
// }
//
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)){
//     return '';
//   }
//
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
//
// function BoilingVerdict(props) {
//   if(props.celsius >= 100){
//     return <p>The water would boil.</p>
//   }
//   return <p>The water would not boil.</p>
// }
//
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//    }
//
//    handleCelsiusChange(temperature) {
//      this.setState({scale: 'c', temperature});
//    }
//
//    handleFahrenheitChange(temperature) {
//      this.setState({scale: 'f', temperature});
//    }
//
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//
//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange}/>
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange}/>
//
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );


// Chapter 11
// function FancyBorder(props) {
//   return(
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
//
// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }
//
// ReactDOM.render(
//   <WelcomeDialog />,
//   document.getElementById('root')
// );

// function Contacts() {
//   return <div className="Contacts" />;
// }
//
// function Chat() {
//   return <div className="Chat" />;
// }
//
// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }
//
// function App() {
//   return(
//     <SplitPane
//       left={
//         <Contacts />
//       }
//       right={
//         <Chat />
//       } />
//   );
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// function FancyBorder(props) {
//   return(
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
//
// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }
//
// function WelcomeDialog() {
//   return (
//     <Dialog title="Welcome"
//       message="Thank you for visiting our spacecraft!" />
//   );
// }
//
// ReactDOM.render(
//   <WelcomeDialog />,
//   document.getElementById('root')
// );

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return(
      <Dialog title="Mars Exploration Program"
        message="How should we refer to you?">
        <input value={this.state.log} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }
}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);




  // setInterval(tick, 1000);
serviceWorker.unregister();
