document.querySelectorAll('.chefs-team-button').forEach((el) => {
    el.addEventListener('click', () => {
        let hidden_team = el.previousElementSibling;
        
        if(hidden_team.style.maxHeight) {
            document.querySelectorAll('.chefs-team-items.hidden').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.button-a-links').forEach((el) => el.innerHTML = "Read More")
        } else {
            document.querySelectorAll('.chefs-team-items.hidden').forEach((el) => el.style.maxHeight = null)
            hidden_team.style.maxHeight = hidden_team.scrollHeight + 'px'
            document.querySelectorAll('.button-a-links').forEach((el) => el.innerHTML = "Hide")
        }
        
    });
    
})