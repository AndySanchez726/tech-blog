async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}


let timer, currSeconds = 0; 

function resetTimer() { 

    /* Hide the timer text */ 
    document.getElementById('timer') 

    /* Clear the previous interval */ 
    clearInterval(timer); 

    /* Reset the seconds of the timer */ 
    currSeconds = 0; 

    /* Set a new interval */ 
    timer =  
        setInterval(startIdleTimer, 1000); 
} 


// Define the events that 
// would reset the timer 
window.onload = resetTimer;
window.onmousemove = resetTimer; 
window.onmousedown = resetTimer; 
window.ontouchstart = resetTimer; 
window.onclick = resetTimer; 
window.onkeypress = resetTimer; 

function startIdleTimer() { 
        
    /* Increment the 
        timer seconds */ 
    currSeconds++; 

    // if idle for 10 minutes, the user is logged out
    if (currSeconds === 600) {
      logout();
    }
} 



document.querySelector('#logout').addEventListener('click', logout);
