
// Dummy login function toggleLogin() { document.getElementById('loginModal').style.display = 'block'; }

function login() { const user = document.getElementById('username').value; const pass = document.getElementById('password').value; if (user === 'admin' && pass === '1234') { document.getElementById('loginModal').style.display = 'none'; document.getElementById('adminPanel').style.display = 'block'; } else { alert('गलत यूज़रनेम या पासवर्ड'); } }

// Image Upload and Preview function handleImageUpload(inputId, galleryId) { const input = document.getElementById(inputId); const gallery = document.getElementById(galleryId);

input.addEventListener('change', () => { [...input.files].forEach(file => { const reader = new FileReader(); reader.onload = e => { const img = document.createElement('img'); img.src = e.target.result; img.onclick = () => img.remove(); img.title = 'क्लिक करके हटाएं'; gallery.appendChild(img); }; reader.readAsDataURL(file); }); }); }

handleImageUpload('galleryUpload', 'gallery'); handleImageUpload('featureUpload', 'featureGallery');

// Theme and Font Switching const themes = ['light', 'dark', 'bright', 'elegant', 'classic']; const fonts = ['roboto', 'opensans', 'arial', 'georgia', 'courier'];

const themeSelector = document.getElementById('themeSelector'); const fontSelector = document.getElementById('fontSelector');

themes.forEach(t => { const option = document.createElement('option'); option.value = t; option.textContent = t.charAt(0).toUpperCase() + t.slice(1); themeSelector.appendChild(option); });

fonts.forEach(f => { const option = document.createElement('option'); option.value = f; option.textContent = f; fontSelector.appendChild(option); });

function updateStyle() { document.body.className = theme-${themeSelector.value} font-${fontSelector.value}; }

themeSelector.addEventListener('change', updateStyle); fontSelector.addEventListener('change', updateStyle);

// Save Changes (dummy functionality) function saveChanges() { alert('बदलाव सेव हो गए (डेमो)'); }

// Appointment Submit (dummy) document.getElementById('appointmentForm').addEventListener('submit', function (e) { e.preventDefault(); alert('अपॉइंटमेंट बुक हो गया!'); });


