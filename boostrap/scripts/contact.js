function sendFeedback() {
    alert("Thank you for your feedback! We will get back to you soon!");

    const thanksDiv = document.getElementById('thanksFeedback');
    thanksDiv.style.display = 'flex';

    thanksDiv.innerHTML = `
        <iframe width="410" height="728" src="https://www.youtube.com/embed/hGWn_M-U-ng"
        title="salute"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
        web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;

    setTimeout(function() {
        thanksDiv.style.display = 'none';
        thanksDiv.innerHTML = '';
    }, 12000);
}