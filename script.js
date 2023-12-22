const divAction = document.getElementById('poem');
const divGhost = document.createElement('div');

function createGhostDiv() {
    divGhost.innerHTML = 'I am ghost. I talk to you. But you cannot hear me. I shove you. But you cannot feel me. I look at you. But you cannot see me. I am invisible';
    divGhost.style.display = 'block';
    divGhost.style.width = '400px';
    divGhost.style.position = 'absolute';
    divGhost.style.left = '400px';
    divGhost.style.color = 'rgba(156, 156, 154)';
    divAction.appendChild(divGhost);
}

function removeGhostDiv() {
    if (divGhost) {
        divAction.removeChild(divGhost);
    }
}

divAction.addEventListener('mouseover', createGhostDiv);
divAction.addEventListener('mouseleave', removeGhostDiv);