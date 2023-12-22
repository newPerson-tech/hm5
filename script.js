const divAction = document.getElementById('poem');

function createGhostDiv() {
    const divGhost = document.createElement('div');
    divGhost.textContent = 'I am ghost. I talk to you. But you cannot hear me. I shove you. But you cannot feel me. I look at you. But you cannot see me. I am invisible';
    divGhost.style.display.block;
    divAction.appendChild(divGhost);
}

function removeGhostDiv() {
    const divGhostAgain = document.getElementById('i-am-ghost');
    if (divGhostAgain) {
        divGhostAgain.remove();
    }
}

divAction.addEventListener('mouseover', createGhostDiv);
divAction.addEventListener('mouseleave', removeGhostDiv);