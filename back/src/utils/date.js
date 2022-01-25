'use strict';

/**
 * Format the given date in the DD.MM.YYYY format
 * @return {string} - The formatted date or undefined for missing input
 */
function formatDate() {
  const date = new Date();

  return date.toISOString();
}

module.exports = {
  formatDate,
};
