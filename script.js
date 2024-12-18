// JavaScript for lazy loading TikTok videos when section is in view
document.addEventListener('DOMContentLoaded', () => {
    const tiktokVideos = document.querySelectorAll('.tiktok-video');

    // Create an intersection observer to detect when TikTok videos come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the video section is in view
            if (entry.isIntersecting) {
                const videoId = entry.target.getAttribute('data-video-id');
                const iframe = document.createElement('iframe');
                iframe.setAttribute('width', '100%');
                iframe.setAttribute('height', '100%');
                iframe.setAttribute('src', `https://www.tiktok.com/embed/${videoId}`);
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allowfullscreen', true);

                entry.target.innerHTML = ''; // Clear "Loading TikTok..." text
                entry.target.appendChild(iframe); // Append the iframe with TikTok video

                // Stop observing the current video element
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe each TikTok video element
    tiktokVideos.forEach(video => {
        observer.observe(video);
    });
});