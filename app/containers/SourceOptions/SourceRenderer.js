/**
 * Function for rendering selected sources into a string
 */

/**
 * getSourceNames
 *
 * Returns an array of the currently selected sources in a prettified format.
 * @param {array} selected
 * @param {array} options
 * @returns {array<string>}
 */
const getSourceNames = (selected, options) => selected.map((source) => {
  let label;
  options.forEach((option) => {
    if (option.value === source) {
      ({ label } = option);
    }
  });
  return label;
});

const renderUsedSources = (selected, options) => {
  switch (selected.length) {
    case 0:
      return 'All';
    case 1:
      return `${getSourceNames(selected, options)[0]}`;
    case 2:
      return `${getSourceNames(selected, options)[0]} and ${getSourceNames(selected, options)[1]}.`;
    default:
      return `${getSourceNames(selected, options)[0]} and ${selected.length - 1} more.`;
  }
};

/**
 * renderSources
 * @param {array} selected
 * @param {array} options
 * @returns {string}
 */
const renderSources = (selected, options) => (
  (selected.length === options.length) ?
    'All' :
    renderUsedSources(selected, options)
);

/**
 * sourceRenderer
 * @param {array} selected
 * @param {array} options
 * @returns {string}
 */
const sourceRenderer = (selected, options) => renderSources(selected, options);

export default sourceRenderer;

