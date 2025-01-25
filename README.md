# MongoDB $inc operator with NaN value
This example demonstrates an error that can occur when using the MongoDB $inc operator with a NaN (Not a Number) value. The $inc operator is used to increment a numerical field in a document. However, if you attempt to increment a field with a NaN value, it will result in an error.

## Bug
The bug is caused by attempting to increment a field with a non-numeric value using the $inc operator.  This will throw an error. 

## Solution
The solution involves verifying the data type of the value being used to increment the field.  Ensure that the value is a valid number before using it with the $inc operator. If the value is obtained from user input or calculation, add error handling or validation to handle cases where the value is not a number.