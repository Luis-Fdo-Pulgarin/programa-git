function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;


    if(user=="adso" && pass=="2024")
    {
        window.location="/bienvenida.html"

    }

    else

    {
        alert("ojo datos incorrectos");
    }

    

}