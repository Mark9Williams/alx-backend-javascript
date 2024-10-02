// guardrail.js
export default function guardrail(mathFunction) {
    const queue = []; // Create the queue array
    
    try {
      const result = mathFunction(); // Try to execute the math function
      queue.push(result); // Append the result to the queue
    } catch (error) {
      queue.push(error.message); // Append the error message to the queue
    }
    
    queue.push('Guardrail was processed'); // Always append this message
    return queue; // Return the queue array
  }
  