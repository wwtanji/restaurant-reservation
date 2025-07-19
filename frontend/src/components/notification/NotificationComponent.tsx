import React from 'react';
import { useNotification } from '../../context/NotificationContext';

const NotificationComponent: React.FC = () => {
  const { message, type } = useNotification();

  if (!message || !type) return null;

  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div className={`fixed top-0 left-0 right-0 ${bgColor} text-white py-4 px-6 text-center z-50`}>
      {message}
    </div>
  );
};

export default NotificationComponent;