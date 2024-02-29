import React, { useState } from 'react';

const DynamicInput = () => {
  const [inputs, setInputs] = useState([{ initial: '', selectedOption: 'option1' }]);

  console.log(inputs);

  const handleChange = (index, event) => {
    const values = [...inputs];
    if (event.target.name === 'input') {
      values[index].initial = event.target.value;
    } else if (event.target.name === 'select') {
      values[index].selectedOption = event.target.value;
    }
    setInputs(values);
  };

  const handleAddInput = () => {
    const values = [...inputs];
    values.push({ initial: '', selectedOption: 'option1' });
    setInputs(values);
  };

  const handleRemoveInput = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };

  return (
    <div className="container mx-auto p-4">
      {inputs.map((input, index) => (
        <div key={index} className="mb-4 flex items-center">
          <select
            name="select"
            value={input.selectedOption}
            onChange={(event) => handleChange(index, event)}
            className="p-2 text-lg border rounded-md border-gray-300 mr-2"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <input
            type="text"
            name="input"
            value={input.initial}
            onChange={(event) => handleChange(index, event)}
            className="border border-gray-300 rounded py-2 px-4 mr-2"
            placeholder="Enter text"
          />
          <button
            type="button"
            onClick={() => handleRemoveInput(index)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddInput}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Input
      </button>
    </div>
  );
};

export default DynamicInput;
