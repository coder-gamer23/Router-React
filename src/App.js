import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Designcomponent from './design';



export default function App() {
  return (
    <div>

   
      <BrowserRouter>
      
        <Switch>
        
          <Route exact path="/" component={(props)=>(<Designcomponent props={props} />)}/>
          <Route exact path="/Admin" component={()=>(<Admin />)}/>
          <Route exact path="/Student" component={()=>(<Student />)}/>
          <Route exact path="/Contact" component={() => (<Contact />)}/>
          <Route exact path="/About" component={() => (<AboutUs />)}/>
          <Route exact path="/Branch" component={() => (<Branch />)}/>
              </Switch>
      </BrowserRouter>
    </div>
  );
}

function Student() {
  const history = useHistory();
  console.log(history);
    return (
    <>
          <h3> Student Component </h3>
       <button onClick={history.goBack}> Go Back </button> &nbsp;
    <button onClick={history.goForward}> Go Forward </button> &nbsp; 
    <button onClick={() => history.push('/Admin')}> Admin </button> &nbsp;
    <button onClick={() => history.push('/About')}> AboutUs </button> &nbsp;
    <button onClick={() => history.push('/Contact')}> Contactus</button> &nbsp;

   </>
  );
}
function AboutUs() {
  const history = useHistory();
  console.log(history);
  return (
    <>
          <h3> About Us Component </h3>
      <button onClick={history.goBack}> Go Back </button> &nbsp;
    <button onClick={history.goForward}> Go Forward </button> &nbsp; 

   </>
  );
}
function Contact() {
      const history = useHistory();
      console.log(history);
        return (
        <>
              <h3> Contact Us Component </h3>
           <button onClick={history.goBack}> Go Back </button> &nbsp;
        <button onClick={history.goForward}> Go Forward </button> &nbsp; 
    
       </>
      );
}
function Branch() {
 const history = useHistory();
 console.log(history);
   return (
    <>
          <h3> Branch Component </h3>
      <button onClick={history.goBack}> Go Back </button> &nbsp;
    <button onClick={history.goForward}> Go Forward </button> &nbsp; 

   </>
  );
}
function Admin() {
  const history = useHistory();
  console.log(history);
    return (
    <>
          <h3> Admin Component </h3>
     <button onClick={history.goBack}> Go Back </button> &nbsp;
    <button onClick={history.goForward}> Go Forward </button> &nbsp;   
    <button onClick={() => history.push('/About')}> AboutUs </button> &nbsp;
    <button onClick={() => history.push('/Student')}> Student </button> &nbsp;
    <button onClick={() => history.push('/Contactus')}> Contactus</button> &nbsp;

   </>
  );
}
