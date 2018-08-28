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
      <div className="has-text-centered">
        <h4 className="subtitle">Usage Tips and Tricks</h4>
      </div>
      <ul className="box">
        <p className="usage-tips__info">
          Submit a query string to search across <em>all</em> sources, categories, and dates.
        </p>
        <p className="usage-tips__info">
          For more specific results you can:
        </p>
        <li>Surround phrases with quotes (&quot;) for exact match.</li>
        <li>Prepend words or phrases that <em>must</em> appear with a + symbol. Eg: +bitcoin</li>
        <li>Prepend words that <em>must not</em> appear with a - symbol. Eg: -bitcoin</li>
        <li>Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.</li>
      </ul>
      <div className="has-text-centered">
        <h4 className="subtitle">Advanced Option Settings</h4>
      </div>
      <ul className="box">
        <li><span>Target:</span>Top stories/headlines or everything. Default is everything. Depending on your selection here, some of the following options may or may not be available.</li>
        <li><span>Language:</span>Select the language you want stories to be chosen from. Default is all.</li>
        <li><span>From Date:</span>Select the date you want to start searching from. Default is oldest available.</li>
        <li><span>To Date:</span>Select the date you want to stop searching at. Default is newest available.</li>
        <li><span>Country:</span>Select the country you want news from. Default is all. Only available in Top Stories/headline search. (cannot be used with sources)</li>
        <li><span>Category:</span>Select the category you want news from. Default is all. Only available in Top Stories/headlines search. (cannot be used with sources)</li>
        <li><span>Sources:</span>Select the sources you want news from. Default is all. (cannot be used with country and/or category)</li>
      </ul>
    </div>
  );
}
