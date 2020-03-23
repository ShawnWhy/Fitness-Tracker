var activities;
var excerciseTypeInput = $(".excerciseType");
var submitButton =$(".submitButton");
var logContainer = $(".logContainer");
var logFrom=$("#logForm");
var strengthChoices;
var enduranceChoices;
var flexibilityChoices;
var balanceChoices;
var excerciseTypeChoice;
var secondaryContainer = $(".secondaryContainer");
var secondaryChoice;
var secondaryExcercise;
var tertiaryContainer = $(".tertiaryContainer");


var deploystrengthChoices = function(){
    console.log("deployingstrength");
let newChoiceBox = $("<select>");
newChoiceBox.addClass("secondaryChoice")
for(var i=0;i<strengthChoices.length;i++){
    let newChoice=$("<option>");
    newChoice.attr("value",strengthChoices[i]);
    newChoice.text(strengthChoices[i]);
    newChoiceBox.append(newChoice);
    console.log("donechoices");
};
let extraChoice=$("<option>")
extraChoice.attr("value","New");
extraChoice.text("create new activity");
console.log("donenew");
newChoiceBox.append(extraChoice);
$(".secondaryContainer").append(newChoiceBox);
console.log("donestrength");
};

var deployBalanceChoices = function(){
    console.log("deployingbalance");

    let newChoiceBox = $("<select>");
    newChoiceBox.addClass("secondaryChoice")
    for(let i=0;i<balanceChoices.length;i++){
        let newchoice=$("<option>");
        newchoice.attr("value",balanceChoices[i]);
        newchoice.text(balanceChoices[i]);
        newChoiceBox.append(newchoice);
    };
    let extraChoice=$("<option>")
    extraChoice.attr("value","New");
    extraChoice.text("create new activity");
    newChoiceBox.append(extraChoice);
    $(".secondaryContainer").append(newChoiceBox);
    };

    var deployEnduranceChoices = function(){
        console.log("deployingendurance");

        let newChoiceBox = $("<select>");
        newChoiceBox.addClass("secondaryChoice")
        for(let i=0;i<enduranceChoices.length;i++){
            let newChoice=$("<option>");
            newChoice.attr("value",enduranceChoices[i]);
            newChoice.text(enduranceChoices[i]);
            newChoiceBox.append(newChoice);
        };
        let extraChoice=$("<option>")
        extraChoice.attr("value","New");
        extraChoice.text("create new activity");
        newChoiceBox.append(extraChoice);
        $(".secondaryContainer").append(newChoiceBox);
        };

    
var deployFlexibilityChoices = function(){
    console.log("deployingflex");

    let newChoiceBox = $("<select>");
    newChoiceBox.addClass("secondaryChoice")
    for(let i=0;i<flexibilityChoices.length;i++){
        let newchoice=$("<option>");
        newchoice.attr("value",flexibilityChoices[i]);
        newchoice.text(flexibilityChoices[i]);
        newChoiceBox.append(newchoice);
    };
    let extraChoice=$("<option>")
    extraChoice.attr("value","New");
    extraChoice.text("create new activity");
    newChoiceBox.append(extraChoice);
    $(".secondaryContainer").append(newChoiceBox);
    };
        
        
    


var deployTertiary = function(){
    console.log("3deploy2");
    $(".tertiaryContainer").empty();
    secondaryExcercise=$(".secondaryChoice").val();
    console.log(secondaryExcercise);
    if(secondaryExcercise=="New"){
        let newTitle=$("<lable>");
        newTitle.attr("for","newInputname");
        newTitle.text("name of the new activity");
        let newInput = $("<input>");
        newInput.addClass("newInput");
        newInput.attr("name","newInputname");
        newInput.attr("type","text");
        $(".tertiaryContainer").append(newTitle,newInput);
};
let numberInputTitle=$("<lable>");
numberInputTitle.attr("for","numberInput");
numberInputTitle.text("duration/repetitions");
let numberInput =$("<input>");
numberInput.addClass("numberInput");
numberInput.attr("type","number");
numberInput.attr("name","numberInput");
let durRep = $("<select>")
durRep.addClass("durRep");
durRep.html("<option value='rep'>repetition</option><option value='dur'>duration</option>");
$(".tertiaryContainer").append(numberInputTitle,numberInput,durRep);
let submitButton=$("<button>");
submitButton.addClass("btn btn-primary submitButton");
submitButton.text("log excercise");
$(".tertiaryContainer").append(submitButton);



};



var deployhomepage = function(){
    
    console.log("hshdsds");
    $.get("/activityList",function(data){
        console.log("got the stuff");
        console.log(data);
        activities=data[0].list
        console.log(activities);

        activities=JSON.parse(activities);
        console.log(activities);    
        
         strengthChoices = activities.strength;
         enduranceChoices = activities.endurance;
         balanceChoices= activities.balance;
         flexibilityChoices=activities.flexibility
         console.log(strengthChoices);
         console.log(enduranceChoices);
         console.log(flexibilityChoices);
         console.log(balanceChoices);
         excerciseTypeChoice=$(".excerciseType").val()
         console.log(excerciseTypeChoice);
})
}

var deploySecondaryChoice = function(){
    console.log("deploy2nd choice");

    event.preventDefault;
    event.stopPropagation;
    $(".secondaryContainer").empty();
    $(".tertiaryContainer").empty();
   excerciseTypeChoice=$(".excerciseType").val();
   console.log(excerciseTypeChoice);
    switch (excerciseTypeChoice){
        case "strength":
        deploystrengthChoices();
            break;
        case "endurance":
        deployEnduranceChoices();
            break;
        case "balance":
        deployBalanceChoices();
            break;
        case "flexibility":
        deployFlexibilityChoices();
};
}


$(document).on("change",".secondaryChoice",function(event){
    event.stopPropagation;
    event.preventDefault;
    console.log("deploy3,1");
    deployTertiary()
});




$(document).on("ready",deployhomepage());
// $("document").on("ready",deploylogs);


// $(".logForm").on("submit",handleSubmit);

$(document).on('change','.excerciseType',function(event){
    
    // console.log("deploying1");

    event.stopPropagation;
    event.preventDefault;
    console.log("deploying");
    deploySecondaryChoice();
})

