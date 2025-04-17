document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('authOverlay');
  const form = document.getElementById('loginForm');
  const error = document.getElementById('loginError');
  const appContent = document.getElementById('appContent');

  // Mock credentials (replace with a real backend API later)
  const mockUser = {
    username: 'admin',
    password: 'password123',
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === mockUser.username && password === mockUser.password) {
      sessionStorage.setItem('authToken', 'mock-token'); // Pretend token
      overlay.classList.add('hidden');
      appContent.classList.remove('hidden');
    } else {
      error.classList.remove('hidden');
    }
  });

  // Logout and clear session
  const logout = () => {
    sessionStorage.removeItem('authToken');
    location.reload();
  };
});