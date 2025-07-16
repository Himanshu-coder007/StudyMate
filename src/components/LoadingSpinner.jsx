const LoadingSpinner = ({ size = 'medium' }) => {
  const sizes = {
    small: 'h-5 w-5',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  };

  return (
    <div className={`animate-spin rounded-full border-b-2 border-gray-900 ${sizes[size]}`}></div>
  );
};

export default LoadingSpinner;