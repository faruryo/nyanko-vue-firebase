import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import store from '@/store'

const config = {
  apiKey: 'AIzaSyAqlnLB2uDtHClp-F6Dsxm4ZS0OUUuxCho',
  authDomain: 'synchronizer-209608.firebaseapp.com',
  databaseURL: 'https://synchronizer-209608.firebaseio.com',
  projectId: 'synchronizer-209608',
  storageBucket: 'synchronizer-209608.appspot.com',
  messagingSenderId: '11443145407'
}

const settings = { }
let firestore = null

export default {
  init () {
    const firebaseApp = firebase.initializeApp(config)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    firestore = firebaseApp.firestore()
    firestore.settings(settings)
  },
  signIn () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  signOut () {
    firebase.auth().signOut()
  },
  onAuth () {
    firebase.auth().onAuthStateChanged(user => {
      store.dispatch('auth/setAuthStatus', user)
    })
  },
  getFirestore () {
    return firestore
  }
}
