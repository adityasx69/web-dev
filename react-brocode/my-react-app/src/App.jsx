import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ButtonClick from "./ButtonClick.jsx"
import ProfilePicture from "./ProfilePicture.jsx"

function App() {

  // const fruits=[{id:1,name:"apple",calories:95},
  //               {id:2,name:"orange",calories:45},
  //               {id:3,name:23233,calories:105},
  //               {id:4,name:"coconut",calories:159},
  //               {id:5,name:"pineapple",calories:37}]

  // const vegetables=[{id:6,name:"potatoes",calories:10},
  //                   {id:7,name:"celery",calories:115},
  //                   {id:8,name:"carrots", calories:25},
  //                   {id:9,name:"corn",calories:63},
  //                   {id:10,name:"brocolli",calories:50}]

  return (
      // <Header/>
      // <Card/>
      // <Food/>
      // <Footer/>
      // <Button/>
      // <Student name="Aditya" age={20} isStudent={true}/>
      // <Student name="Aaishleen" age={21} isStudent={true}/>
      // <Student/>
      // <UserGreeting isLoggedIn={false} username="adityassx"/>
      // <>
      //   {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      //   {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
        
      // </>
      <>
        {/* <ButtonClick /> */}
        <ProfilePicture />
      </>
  );
}

export default App