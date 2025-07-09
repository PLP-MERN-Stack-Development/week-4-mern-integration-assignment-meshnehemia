const Loader = ({ size = 'medium', className = '' }) => {
    const sizeClasses = {
      small: 'h-4 w-4',
      medium: 'h-8 w-8',
      large: 'h-12 w-12',
    };
  
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div
          className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-solid border-primary-500 border-t-transparent`}
        />
      </div>
    );
  };
  
  export default Loader;