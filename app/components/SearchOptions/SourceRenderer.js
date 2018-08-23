/**
 * Function for rendering selected sources into a string
 */

/**
 * compileSources
 *
 * Returns an array of the currently selected sources in a prettified format.
 * @param {array} selected
 * @param {array} options
 * @returns {array<string>}
 */
const compileSources = (selected, options) => selected.map((source) => {
  let label;
  options.forEach((option) => {
    if (option.value === source) {
      ({ label } = option);
    }
  });
  return label;
}).join(', ');

/**
 * renderSources
 * @param {array} selected
 * @param {array} options
 * @returns {string}
 */
const renderSources = (selected, options) => (
  (selected.length === options.length) ?
    'Sources: All' :
    `Sources: ${compileSources(selected, options)}`
);

/**
 * sourceRenderer
 * @param {array} selected
 * @param {array} options
 * @returns {string}
 */
const sourceRenderer = (selected, options) => (
  (selected.length === 0) ?
    'Sources' :
    renderSources(selected, options)
);

export default sourceRenderer;

