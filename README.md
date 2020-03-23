first a javascript file is written to crate a mongo database. 

the collections are created as follows

the classes of excerces, endurance, strength, balance, and flexibility

the initial collections to be grouped under each class is as follows

endurance:
Jogging,
jumpropes,
tredmill,
stairs,

strength:
pullups,
pushups,
benchlifting,
deadlift;




balance:

foottaps,
standing march;
sit to stand,



felxibility:
yoga,
stretches,


another collection will be created as well
once the html page 
opens, the log information sppears to the right. along with the 
type of excercise, 
the name of excercist 
and the time .
the index.js 
will call to the database and populate the div on the right hand side 
with the db.strength.find({}), and 
pupulate with all of the strengthExc information that is associated. 
one can select to show all logged excercises or one can pick a category

the submit function is composed of mostly forms
regardless of the stuff in the database information, the first 
set of the selection will be the four classes of the excercis.

on change, the 2ndary selections associated with the selected option will gain visility.

and this section is populated by the database of all of teh logged in types of excercise 
(the user can input new types of excercise, and the database will create a new collection to add to it)
for this, the user can select "new excercise, and another form will become visible.  and the user will input the
have to input the new activity inbetween the selection input and the time input. )

once the activity is submitted, 
the javascript will fire up a api post and push the new activity to eh designated class. the browser will then berefreshed and the actvitity will then show up on teh left side. 
app.get("/populated", (req, res) => {
  db.Library.find({})
    .populate("books")
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});


db.Library.create({ name: "Campus Library" })
  .then(dbLibrary => {
    console.log(dbLibrary);
  })
  .catch(({message}) => {
    console.log(message);
  });

app.post("/submit", ({body}, res) => {
  db.Book.create(body)
    .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});


[{"books":[{"_id":"5e6e700898b4496074c90c60","author":"hectorsd","title":"sdsdsd","__v":0},{"_id":"5e6e703198b4496074c90c61","author":"das bok ","title":"something shit","__v":0}],"_id":"5e6e6ffa98b4496074c90c5f","name":"Campus Library","__v":0}]


this is in server.js:

const data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 42
};

Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });
