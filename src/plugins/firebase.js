import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAqlnLB2uDtHClp-F6Dsxm4ZS0OUUuxCho',
  authDomain: 'synchronizer-209608.firebaseapp.com',
  databaseURL: 'https://synchronizer-209608.firebaseio.com',
  projectId: 'synchronizer-209608',
  storageBucket: 'synchronizer-209608.appspot.com',
  messagingSenderId: '11443145407'
})

const settings = { timestampsInSnapshots: true }
export const firestore = firebaseApp.firestore()
firestore.settings(settings)
