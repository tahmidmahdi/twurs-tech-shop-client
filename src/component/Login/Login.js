import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import "./Login.css"
import { emailContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import firebaseConfig from './firabase.config';
// import logos from '../../logos/Group 1329.png'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


function App() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    const [email, setEmail] = useContext(emailContext)
    console.log('email of', email);



    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false

    });

    const [newUser, setNewUser] = useState(false)




    //saving data from input to state
    const handleBlur = (e) => {
        let isValid = false;
        if (e.target.name === 'email') {

            isValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const passLength = e.target.value.length > 6;
            const passCheck = /\d{1}/.test(e.target.value);
            isValid = passLength && passCheck;

            console.log('from password', isValid);
        }
        if (isValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);

        }
    }

    //sign up 
    const handleSubmit = (e) => {
        console.log(user.ema);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    const newUserInfo = { ...user }
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    console.log(user);
                    setEmail(user.email);
                    history.replace(from);


                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    console.log(errorCode, errorMessage);
                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    const newUserInfo = { ...user }
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    console.log(user);
                    setEmail(user.email);
                    history.replace(from);



                    // console.log(user.name);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    console.log(errorCode, errorMessage);

                });
        }
        e.preventDefault();
    }

    //sign in user
    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                console.log(token);
                // The signed-in user info.
                var user = result.user;
                setEmail(user.email);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
                // ...
            });
    }

    const handleFacebookSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // The signed-in user info.
                var user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;
                console.log(accessToken);

                setEmail(user.email);
                history.replace(from);

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);

                // ...
            });
    }



    return (
        <div className="containers">
            <h1 className="font-bold tracking-widest">Twurs Tech Shop</h1>
            {/* <img src={logos} alt="" /> */}
            <br /><br />

            <input className='checkBox' type="checkbox" onClick={() => setNewUser(!newUser)} name="newUser" id="" />
            
            <label htmlFor="newUser"> Sign Up if you are new</label>

            <form onSubmit={handleSubmit} >
                <br />
                {(newUser) && <input onBlur={handleBlur} className="input-field" name="name" style={{ backgroundColor: '', borderRadius: '5px' }} type="text" placeholder="Name" />}

                <br /> <br />

                <input onBlur={handleBlur} name="email" className="input-field" style={{ backgroundColor: '', borderRadius: '5px' }} type="text" placeholder="Email" required />

                <br /> <br />

                <input onBlur={handleBlur} name="password" className="input-field" style={{ backgroundColor: '', borderRadius: '5px' }} type="password" placeholder="Password" required />

                <br /><br />

                {(newUser) && <input onBlur={handleBlur} className="input-field" name="confirm password" style={{ backgroundColor: '', borderRadius: '5px' }} type="password" placeholder="Confirm Password" required />}

                <br /><br />

                <input style={{ width: '190px' }} className="input-submit" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />

            </form>
            <br />
            <p className="text-red-600">{user.error}</p>
            {
                (user.success) && <p className="text-green-600">success</p>
            }
            <br />
            <p><strong>----------------Or----------------</strong></p>
            <button className="google mt-7" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} size="1x" />  {' '} Google Sign In </button>
            <br /> <br />
            <button className="google " onClick={handleFacebookSignIn}><FontAwesomeIcon icon={faFacebookSquare} size="1x" /> {' '} Facebook Sign In</button>

            <br/><br/><br/><br/>
           
        </div>
    );
}

export default App;