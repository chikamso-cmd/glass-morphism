

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // const email = document.getElementById('email').value;

    // const password = document.getElementById('password').value;

    // if (email === '' || password === '') {
    //   alert('error');  
    // }

});

function submitform(){
    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
      alert('email and password cannot be empty'); 

    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        console.log('wrong email');   
    }else if(!/[!@#$%^&*()_+\-=[\]{}':"\\,.<>\/?]+/.test(password)){
        alert('password must contain at least one special character') 
    }else if (password.length < 8) {
        alert("password must be at least 8 characters")
      }
      else{
        alert('welcome')
      }

}