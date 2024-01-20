let guest_score=0
let home_score=0

let homeobj= document.getElementById("home")
let guestobj= document.getElementById("guest")


function Ginc_1()
{
    guest_score+=1
    guestobj.textContent=guest_score
}

function Ginc_2()
{
    guest_score+=2
    guestobj.textContent=guest_score
}

function Ginc_3()
{
    guest_score+=3
    guestobj.textContent=guest_score
}

function Hinc_1()
{
    home_score+=1
    homeobj.textContent=home_score
}

function Hinc_2()
{
    home_score+=2
    homeobj.textContent=home_score
}

function Hinc_3()
{
    home_score+=3
    homeobj.textContent=home_score
}

function newgame()
{
    guestobj.textContent=0
    homeobj.textContent=0
    guest_score=0
    home_score=0
}