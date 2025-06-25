// Notification utility functions
let notificationId = 0;

export const showNotification = (message, type = 'info', duration = 5000) => {
  const id = ++notificationId;
  
  // Remove existing notifications of the same type and message
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => {
    const messageElement = notification.querySelector('span');
    if (messageElement && messageElement.textContent === message) {
      notification.remove();
    }
  });
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.dataset.notificationId = id;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${getNotificationIcon(type)}"></i>
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${getNotificationColor(type)};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    max-width: 400px;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after specified duration
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, duration);
  
  return id;
};

export const removeNotification = (id) => {
  const notification = document.querySelector(`[data-notification-id="${id}"]`);
  if (notification) {
    notification.remove();
  }
};

export const removeAllNotifications = () => {
  const notifications = document.querySelectorAll('.notification');
  notifications.forEach(notification => notification.remove());
};

const getNotificationIcon = (type) => {
  switch (type) {
    case 'success': return 'fa-check-circle';
    case 'error': return 'fa-exclamation-circle';
    case 'warning': return 'fa-exclamation-triangle';
    default: return 'fa-info-circle';
  }
};

const getNotificationColor = (type) => {
  switch (type) {
    case 'success': return '#10b981';
    case 'error': return '#ef4444';
    case 'warning': return '#f59e0b';
    default: return '#2563eb';
  }
}; 