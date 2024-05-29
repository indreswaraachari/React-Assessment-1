import React, { useState } from 'react';
import _ from 'lodash'; // Import lodash library
import './App.css';

function TextTransform() {
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState({
    lowerCase: '',
    upperCase: '',
    camelCase: '',
    pascalCase: '',
    snakeCase: '',
    kebabCase: '',
    trim: '',
  });

  // Function to convert text to camel case
  const toCamelCase = (str) => _.camelCase(str);

  // Function to convert text to pascal case
  const toPascalCase = (str) => _.startCase(_.camelCase(str)).replace(/ /g, '');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    transformText(e.target.value);
  };

  const transformText = (text) => {
    setTransformedText({
      lowerCase: text.toLowerCase(),
      upperCase: text.toUpperCase(),
      camelCase: toCamelCase(text), // Use toCamelCase function
      pascalCase: toPascalCase(text), // Use toPascalCase function
      snakeCase: text.replace(/\W+/g, '_').toUpperCase(),
      kebabCase: text.replace(/\W+/g, '-').toUpperCase(),
      trim: text.replace(/\s+/g, ''),
    });
  };

  return (
    <div className="container">
      <div className="input-box">
        <h3>Input Text</h3>
        <textarea placeholder="Enter text..." value={inputText} onChange={handleInputChange} />
      </div>
      <div className="transformed-text">
        <div className="transformed-item">
          <div className="heading-box">
            <h3 className="green-heading">Lower Case</h3>
          </div>
          <div className="box">{transformedText.lowerCase}</div>
        </div>
        <div className="transformed-item">
          <div className="heading-box">
            <h3 className="green-heading">Upper Case</h3>
          </div>
          <div className="box">{transformedText.upperCase}</div>
        </div>
        <div className="transformed-item">
          <div className="heading-box">
            <h3 className="green-heading">Camel Case</h3>
          </div>
          <div className="box">{transformedText.camelCase}</div>
        </div>
        <div className="transformed-item">
          <div className="heading-box">
            <h3 className="green-heading">Pascal Case</h3>
          </div>
          <div className="box">{transformedText.pascalCase}</div>
        </div>
        <div className="transformed-item">
          <div className="heading-box">
            <h3 className="green-heading">Snake Case</h3>
          </div>
          <div className="box">{transformedText.snakeCase}</div>
        </div>
        <div className="transformed-item">
          <div className="heading-box">
            <h3 className="green-heading">Kebab Case</h3>
          </div>
          <div className="box">{transformedText.kebabCase}</div>
        </div>
        <div className="transformed-item">
          <div className="heading-box">
            <h3 className="green-heading">Trim</h3>
          </div>
          <div className="box">{transformedText.trim}</div>
        </div>
      </div>
    </div>
  );
}

export default TextTransform;
