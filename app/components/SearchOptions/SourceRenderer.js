/**
 *  Helper function for the SourceOptions component.
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

export default renderSources;

