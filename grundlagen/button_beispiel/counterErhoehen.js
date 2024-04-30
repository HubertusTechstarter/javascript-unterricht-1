let counter = 0; // Initialisierung mit 0

function counterErhoehen(){
    counter = counter + 1; // counter++;
    console.log(counter)
    document.getElementById("counter").textContent = counter;
}