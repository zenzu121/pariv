/**
 * Main application logic for Parivahan Sarathi design clone
 */

// Function to handle Real-time Date & Time updates
function updateDateTime() {
    const now = new Date();
    
    // Format Date: DD-MM-YYYY
    const dates = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const dateStr = `${dates}-${month}-${year}`;
    
    // Format Time: HH:MM:SS AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const hoursStr = hours.toString().padStart(2, '0');
    
    const timeStr = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
    
    const dateEl = document.getElementById('current-date');
    const timeEl = document.getElementById('current-time');
    
    if (dateEl && timeEl) {
        dateEl.textContent = dateStr;
        timeEl.textContent = timeStr;
    }
}

// Start tracking time immediately
updateDateTime();
setInterval(updateDateTime, 1000);

// Text Size Controls Logic
document.addEventListener('DOMContentLoaded', () => {
    const tsBtns = document.querySelectorAll('.ts-btn');
    const root = document.documentElement;
    
    // Base font size we'll adjust from (in px)
    const baseFontSize = 16;
    
    tsBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tsBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Adjust root font side
            if (index === 0) {
                // A- (decrease size)
                root.style.fontSize = `${baseFontSize - 2}px`;
            } else if (index === 1) {
                // A (normal size)
                root.style.fontSize = `${baseFontSize}px`;
            } else if (index === 2) {
                // A+ (increase size)
                root.style.fontSize = `${baseFontSize + 2}px`;
            }
        });
    });

    // Captcha Refresh animation logic
    const refreshBtn = document.querySelector('.refresh-captcha');
    const captchaImg = document.querySelector('.captcha-image');
    
    if (refreshBtn && captchaImg) {
        refreshBtn.addEventListener('click', () => {
            const icon = refreshBtn.querySelector('i');
            icon.style.transform = `rotate(${Math.random() * 360 + 360}deg)`;
            
            // Simulate changing captcha
            captchaImg.style.opacity = '0.5';
            setTimeout(() => {
                captchaImg.style.opacity = '1';
                // Here you would typically fetch a new image or change text
            }, 300);
        });
    }
    
    // Smooth hover effect on APK Button
    const apkBtn = document.querySelector('.btn-download-apk');
    if (apkBtn) {
        apkBtn.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        apkBtn.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
});
