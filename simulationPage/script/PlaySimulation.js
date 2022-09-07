function PlaySimulation()
{  PlaySimulationPop();

}

function PlaySimulationPop()
{
    var blur=document.getElementById("blur");
    blur.classList.toggle("active");
    var pop=document.getElementById("playsimulation");
    pop.classList.toggle("active");
    console.log(pop);
}