# Duplicate Message Fix - Chatbot Landing Page

## Vấn đề đã được khắc phục

### 1. Duplicate Botpress Event Listeners
**Vấn đề**: Event listener `onEvent` được đăng ký nhiều lần khi component mount/unmount trong React StrictMode.

**Giải pháp**: 
- Tạo utility function `botpressUtils.js` để quản lý Botpress chat tập trung
- Sử dụng flag `botpressInitialized` để đảm bảo chỉ khởi tạo một lần
- Thêm proper cleanup trong useEffect

### 2. Duplicate Notifications
**Vấn đề**: Notification functions được duplicate trong nhiều components.

**Giải pháp**:
- Tạo utility function `notificationUtils.js` để quản lý notifications tập trung
- Tự động remove notifications trùng lặp
- Thêm unique ID cho mỗi notification

### 3. Multiple sendEvent Calls
**Vấn đề**: `sendEvent` được gọi nhiều lần khi user click button.

**Giải pháp**:
- Kiểm tra trạng thái chat trước khi gọi `sendEvent`
- Sử dụng `isChatOpen()` để tránh duplicate events
- Thêm error handling cho Botpress API calls

## Files đã được thay đổi

### 1. `src/App.js`
- Sử dụng `initializeBotpress()` utility function
- Loại bỏ local state management
- Thêm proper error handling

### 2. `src/components/Hero.js`
- Sử dụng `openChat()` và `isBotpressReady()` utilities
- Loại bỏ duplicate notification functions
- Cải thiện error handling

### 3. `src/components/Contact.js`
- Sử dụng centralized notification utility
- Loại bỏ duplicate notification functions

### 4. `src/utils/botpressUtils.js` (Mới)
- Quản lý Botpress initialization
- Track chat state (open/closed)
- Provide utility functions cho chat operations

### 5. `src/utils/notificationUtils.js` (Mới)
- Centralized notification management
- Prevent duplicate notifications
- Auto-cleanup functionality

### 6. `src/App.css`
- Thêm CSS animations cho notifications
- Cải thiện visual feedback

## Cách sử dụng

### Khởi tạo Botpress
```javascript
import { initializeBotpress } from './utils/botpressUtils';

useEffect(() => {
  initializeBotpress()
    .then(() => console.log('Botpress ready'))
    .catch(error => console.error('Botpress failed:', error));
}, []);
```

### Mở chat
```javascript
import { openChat, isBotpressReady } from './utils/botpressUtils';
import { showNotification } from './utils/notificationUtils';

const handleOpenChat = () => {
  if (isBotpressReady()) {
    try {
      openChat();
      showNotification('Chat opened!', 'success');
    } catch (error) {
      showNotification('Failed to open chat', 'error');
    }
  }
};
```

### Hiển thị notification
```javascript
import { showNotification } from './utils/notificationUtils';

showNotification('Your message here', 'success', 5000);
```

## Lợi ích

1. **Không còn duplicate messages**: Event listeners chỉ được đăng ký một lần
2. **Better error handling**: Proper try-catch blocks và user feedback
3. **Centralized management**: Dễ maintain và debug
4. **Performance improvement**: Giảm unnecessary re-renders và API calls
5. **Better UX**: Consistent notifications và chat behavior

## Testing

Để test fix:
1. Mở browser developer tools
2. Click "Start Chat" button nhiều lần
3. Kiểm tra console logs - không nên có duplicate events
4. Kiểm tra notifications - không nên có duplicate notifications
5. Test trong React StrictMode để đảm bảo không có side effects 