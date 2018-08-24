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
      <ul>
        <p className="usage-tips__info">
          Enter your query string to search all sources, categories, and dates - sorted by date.
          For more specific results try:
        </p>
        <li>Surround phrases with quotes (&quot;) for exact match.</li>
        <li>Prepend words or phrases that <em>must</em> appear with a + symbol. Eg: +bitcoin</li>
        <li>Prepend words that <em>must not</em> appear with a - symbol. Eg: -bitcoin</li>
        <li>Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.</li>
      </ul>
      <div className="has-text-centered">
        <h4 className=".subtitle">Advanced Search Options</h4>
      </div>
      <ul>
        <li><span>Target:</span>Top stories/headlines or everything.</li>
        <li><span>Country:</span>Select the country you want news from. (cannot be used with sources)</li>
        <li><span>Category:</span>Select the category you want news from. (cannot be used with sources)</li>
        <li><span>Sources:</span>Select the sources you want news from. (cannot be used with country and/or category)</li>
        <li><span>From Date:</span>Select the date you want to start searching from.</li>
        <li><span>To Date:</span>Select the date you want to stop searching at.</li>
      </ul>
    </div>
  );
}
