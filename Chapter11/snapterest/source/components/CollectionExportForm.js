import React from 'react';

const formStyle = {
  display: 'inline-block'
};

const CollectionExportForm = ({ htmlMarkup }) => (
  <form
    action="http://codepen.io/pen/define"
    method="POST"
    target="_blank" style={formStyle}>
    <input type="hidden" name="data" value={htmlMarkup}/>

    <button type="submit" className="btn btn-default">
      Export as HTML
    </button>
  </form>
);

export default CollectionExportForm;
