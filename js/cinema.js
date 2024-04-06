// login 

function lgn()
{
    var gmail=document.getElementById("mail").value
    var password=document.getElementById("pass").value
    var cpassword=document.getElementById("cpass").value
    if(gmail=='twin@gmail.com' && password=='twin1275' && cpassword=='twin1275')
    {
        alert('you are logged in successfully')
        window.location='home.html';
    }

    else
    {
        alert('your email and password are incorrect try again')
        window.location='index.html';
    }

}

// logout

function closewin()
{
    var user = document.getElementById("lout")
    
        if(user)
        {
            alert('are you sure you want to logout');
            window.location='index.html';
        }
        else
        {
        alert('not logout');
        window.location='home.html';
        }
}