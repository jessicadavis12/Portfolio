### The Mongo query to find the document with a score greater than 30 is

1. db.collection('res').find({ "score": { $ge: 30 }});
1. db.collection('res').find({ "score" > 30 }});
1. db.collection('res').find({ score: > 30 });
1. db.collection('res').find({ "score": { $gt: 30 }});


3 1. db.collection('res').find({ score: > 30 });

Incorrect - 0pts
#4

Here is a similar example we did in class (Mongo Project 1):
db.dc.find({children: {$elemMatch: {age:{$lt: 18}}}})

This is looking for less than (inside an object) but same concept.