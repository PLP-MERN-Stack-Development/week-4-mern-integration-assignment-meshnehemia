/**
 * Formats a date string into a readable format
 * @param {string|Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  /**
   * Truncates text to a specified length and adds ellipsis
   * @param {string} text - The text to truncate
   * @param {number} length - Maximum length before truncation
   * @returns {string} Truncated text
   */
  export const truncateText = (text, length = 100) => {
    if (text.length <= length) return text;
    return `${text.substring(0, length)}...`;
  };
  
  /**
   * Capitalizes the first letter of a string
   * @param {string} str - The string to capitalize
   * @returns {string} Capitalized string
   */
  export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  // Add more utility functions as needed