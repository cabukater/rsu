import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
providedIn: 'root'
})

export class AuthenticationService {
userData: Observable<firebase.User>;
private user: Observable<firebase.User>;
private userDetails: firebase.User = null;

constructor(private angularFireAuth: AngularFireAuth,
    private router:Router) {
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
.then((res) => this.router.navigate(['leads']))
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
isLoggedIn() {
    if (this.userData == null ) {
        return false;
      } else {
        return true;
      }
    }
  logout() {
      this.angularFireAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
    }
  }
  