import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
providedIn: 'root'
})

export class AuthenticationService {
userData: Observable<firebase.User>;

constructor(private angularFireAuth: AngularFireAuth) {
this.userData = angularFireAuth.authState;
}

/* Sign up */
SignUp(data) {
this.angularFireAuth
.auth
.createUserWithEmailAndPassword(data.email, data.password)
.then(res => {
console.log('You are Successfully signed up!', res);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}

/* Sign in */
SignIn(data) {
this.angularFireAuth
.auth
.signInWithEmailAndPassword(data.email, data.password)
.then(res => {
console.log('You are Successfully logged in!');
})
.catch(err => {
console.log('Something is wrong:',err.message);
});
}

/* Sign out */
SignOut() {
this.angularFireAuth
.auth
.signOut();
}

}