import firebase from '../../firebase';

const db = firebase.database().ref("dev");

//get the chats
export const getUserChats = () => (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(user=>{
       if(!user) return null;
       console.log(user.uid)
      db.child("users").child(user.uid)
           .on("value", snap=>{
               if(!snap.val()) return false;
               const profile = snap.val();
               const chats = Object.keys(profile.chats);
               console.log(chats);
           })
    });
};