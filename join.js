let registrsationForm = document.getElementsByClassName('.registration-form');

registrsationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let fname = document.getElementById('fnsme').value;
    let password = document.getElementById('password').value;

    if(fname === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }





});

    