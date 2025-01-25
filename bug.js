```javascript
// Incorrect usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id":ObjectId("6535656565")},{$inc:{count:NaN}});
```