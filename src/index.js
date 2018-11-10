import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

function Blog(props){
  const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
  );

  const content =  props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return(
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);

  // setInterval(tick, 1000);
serviceWorker.unregister();
