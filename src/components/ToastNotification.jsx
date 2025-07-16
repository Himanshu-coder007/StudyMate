const ToastNotification = ({ message, type = 'info', onClose }) => {
  const typeStyles = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700'
  };

  return (
    <div className={`fixed top-4 right-4 border-l-4 p-4 rounded ${typeStyles[type]}`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button 
          onClick={onClose}
          className="ml-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ToastNotification;