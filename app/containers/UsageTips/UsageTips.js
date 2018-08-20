/*
 * UsageTips
 *
 * Display tips for advanced usage
 */
import React from 'react';
import './style.scss';


export default function UsageTips() {
  return (
    <div className="usage-tips">
      <h4 className="centerText">Advanced Search Tips</h4>
      <ul>
        <li>Surround phrases with quotes (&quot;) for exact match.</li>
        <li>Prepend words or phrases that <em>must</em> appear with a + symbol. Eg: +bitcoin</li>
        <li>Prepend words that <em>must not</em> appear with a - symbol. Eg: -bitcoin</li>
        <li>Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.</li>
      </ul>
    </div>
  );
}
