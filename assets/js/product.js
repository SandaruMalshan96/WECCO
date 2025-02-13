document.addEventListener('DOMContentLoaded', newFunction);

function newFunction() {
    const buttons = document.querySelectorAll('.info-btn');
    console.log(`Found ${buttons.length} buttons`);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('More information coming soon!');
        });
    });
}
