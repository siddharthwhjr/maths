function adduser(){
    player1 = document.getElementById('player1').Value;
    player2 = document.getElementById('player2').Value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "gamepage.html";
}