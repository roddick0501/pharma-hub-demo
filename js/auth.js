
(function(){
  // Replace these values with your Firebase project's config
  const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    appId: "YOUR_FIREBASE_APP_ID"
  };
  if (window.firebase && firebase.initializeApp) {
    try { firebase.initializeApp(firebaseConfig); } catch(e) {}
  }

  if (!window.firebase || !firebase.auth) {
    console.error('Firebase SDK not available. Add the compat scripts on the page.');
    // graceful fallback: show demo handlers
  }

  const auth = firebase.auth();

  // keep a small local cache for UI (used by index welcome)
  function saveLocalUser(u){
    if (!u) { localStorage.removeItem('ph_user'); return; }
    const small = { uid: u.uid, email: u.email, displayName: u.displayName };
    localStorage.setItem('ph_user', JSON.stringify(small));
  }

  auth.onAuthStateChanged(u => {
    window.currentUser = u || null;
    saveLocalUser(u);
    // redirect to dashboard when signed in on login page
    if (u && location.pathname.endsWith('login.html')) location.href = 'dashboard.html';
  });

  // Email/password sign up & sign in
  document.getElementById('primary-btn').addEventListener('click', function(ev){
    ev.preventDefault();
    const mode = (document.getElementById('name-field').style.display === 'block') ? 'signup' : 'signin';
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value.trim();
    const errEl = document.getElementById('form-error');
    errEl.textContent = '';
    if (!email || !password){ errEl.textContent = 'Email and password are required.'; return; }
    if (mode === 'signup') {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          if (name) res.user.updateProfile({ displayName: name });
          saveLocalUser(res.user);
          location.href = 'dashboard.html';
        }).catch(e => errEl.textContent = e.message || 'Signup failed');
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => { saveLocalUser(res.user); location.href = 'dashboard.html'; })
        .catch(e => errEl.textContent = e.message || 'Sign-in failed');
    }
  });

  // Google sign-in
  document.getElementById('google-btn').addEventListener('click', function(){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(res=>{
      saveLocalUser(res.user);
      location.href = 'dashboard.html';
    }).catch(e=> alert(e.message || 'Google sign-in failed'));
  });

  // Apple sign-in (requires config in Firebase console and Apple developer)
  document.getElementById('apple-btn').addEventListener('click', function(){
    const provider = new firebase.auth.OAuthProvider('apple.com');
    auth.signInWithPopup(provider).then(res=>{
      saveLocalUser(res.user);
      location.href = 'dashboard.html';
    }).catch(e=> alert(e.message || 'Apple sign-in failed - ensure provider is configured in Firebase'));
  });
})();