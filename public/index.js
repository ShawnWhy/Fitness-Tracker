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
    // console.log("deployingstrength");
let newChoiceBox = $("<select>");
newChoiceBox.addClass("secondaryChoice")
for(var i=0;i<strengthChoices.length;i++){
    let newChoice=$("<option>");
    newChoice.attr("value",strengthChoices[i]);
    newChoice.text(strengthChoices[i]);
    newChoiceBox.append(newChoice);
    // console.log("donechoices");
};
let extraChoice=$("<option>")
extraChoice.attr("value","New");
extraChoice.text("create new activity");
newChoiceBox.append(extraChoice);
$(".secondaryContainer").append(newChoiceBox);
// console.log("donestrength");
};

var deployBalanceChoices = function(){
    // console.log("deployingbalance");

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
        // console.log("deployingendurance");

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
    // console.log("deployingflex");

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
    // console.log("3deploy2");
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
durRep.html("<option value='rep'>repetition</option><option value='dur'>minites</option>");
$(".tertiaryContainer").append(numberInputTitle,numberInput,durRep);
let submitButton=$("<button>");
submitButton.addClass("btn btn-primary submitButton");
submitButton.text("log excercise");
$(".tertiaryContainer").append(submitButton);



};



var deployhomepage = function(){
    
    // console.log("hshdsds");
    $.get("/activityList",function(data){
        console.log("got the stuff");
        console.log(data);
        for(var i=0; i<data.length;i++){
            if (data[i].list){
        
        activities=data[i].list}}
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
});
}

var deploySecondaryChoice = function(){
    // console.log("deploy2nd choice");

    event.preventDefault;
    event.stopPropagation;
    $(".secondaryContainer").empty();
    $(".tertiaryContainer").empty();
   excerciseTypeChoice=$(".excerciseType").val();
//    console.log(excerciseTypeChoice);
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

var deploylogs=function(){
    $(".logList").empty()

    $.get("/allLogged", function(data){
        console.log(data);
        var strengthLog = data[0].strengthexcs;
        // console.log(strengthlog);
        var balanceLog = data[0].balanceexcs;
        var enduranceLog = data[0].enduranceexcs;
        var flexibilityLog = data[0].flexibilityexcs;

        var strengthTitleDiv = $("<div>");
        strengthTitleDiv.html("<h4>Strength Excercises</h4>");

         for ( var i=0;i<strengthLog.length;i++){
            var newLog = $("<div>");
            var newName= $("<p>");
            newLog.addClass("newLogDiv");
            newName.text("activity: "+strengthLog[i].name + " ");
            newLog.append(newName);
            var newNumberDiv = $("<div>");
            var newNumber;
            if(strengthLog[i].repetition){
                 newNumber=strengthLog[i].repetition
                newNumberDiv.text("repetitions: "+ newNumber);
                
            }
            else if(strengthLog[i].duration){newNumber=strengthLog[i].duration;
            newNumberDiv.text("duration: "+ newNumber + " minutes");
            
            }
            newLog.append(newNumberDiv);
            strengthTitleDiv.append(newLog);}
            $(".logList").append(strengthTitleDiv);

            var balanceTitleDiv = $("<div>");
            balanceTitleDiv.html("<h4>Balance Excercises</h4>");
    
             for ( var i=0;i<balanceLog.length;i++){
                var newLog = $("<div>");
                var newName= $("<p>");
                newLog.addClass("newLogDiv");
                newName.text("activity: "+balanceLog[i].name + " ");
                newLog.append(newName);
                var newNumberDiv = $("<div>");
                var newNumber;
                if(balanceLog[i].repetition){
                     newNumber=balanceLog[i].repetition
                    newNumberDiv.text("repetitions: "+ newNumber);
                    
                }
                else if(balanceLog[i].duration){newNumber=balanceLog[i].duration;
                newNumberDiv.text("duration: "+ newNumber + " minutes");
                
                }
                newLog.append(newNumberDiv);
                balanceTitleDiv.append(newLog);}
                $(".logList").append(balanceTitleDiv);

                var enduranceTitleDiv = $("<div>");
            enduranceTitleDiv.html("<h4>Endurance Excercises</h4>");
    
             for ( var i=0;i<enduranceLog.length;i++){
                var newLog = $("<div>");
                var newName= $("<p>");
                newLog.addClass("newLogDiv");
                newName.text("activity: "+enduranceLog[i].name + " ");
                newLog.append(newName);
                var newNumberDiv = $("<div>");
                var newNumber;
                if(enduranceLog[i].repetition){
                     newNumber=enduranceLog[i].repetition
                    newNumberDiv.text("repetitions: "+ newNumber);
                    
                }
                else if(enduranceLog[i].duration){newNumber=enduranceLog[i].duration;
                newNumberDiv.text("duration: "+ newNumber + " minutes");
                
                }
                newLog.append(newNumberDiv);
                enduranceTitleDiv.append(newLog);}
                $(".logList").append(enduranceTitleDiv);

                var flexibilityTitleDiv = $("<div>");
            flexibilityTitleDiv.html("<h4>Flexibility Excercises</h4>");
    
             for ( var i=0;i<flexibilityLog.length;i++){
                var newLog = $("<div>");
                var newName= $("<p>");
                newLog.addClass("newLogDiv");
                newName.text("activity: "+flexibilityLog[i].name + " ");
                newLog.append(newName);
                var newNumberDiv = $("<div>");
                var newNumber;
                if(flexibilityLog[i].repetition){
                     newNumber=flexibilityLog[i].repetition
                    newNumberDiv.text("repetitions: "+ newNumber);
                    
                }
                else if(flexibilityLog[i].duration){newNumber=flexibilityLog[i].duration;
                newNumberDiv.text("duration: "+ newNumber + " minutes");
                
                }
                newLog.append(newNumberDiv);
                flexibilityTitleDiv.append(newLog);}
                $(".logList").append(flexibilityTitleDiv);


})
}

var handleSubmit = function(){
    // console.log("submit works o n the other end")
    var name = $(".secondaryChoice").val()
    var newname = $(".newInput").val()
    var numberTypeInput = $(".durRep").val()
    var numberInput= $(".numberInput").val()
if(name=="New"){
    name=newname;}
    var log;
    if (numberTypeInput =="rep"){
         log = {
            "name":name,
            "repetition":numberInput
        }}
    else {log= {
            "name":name,
            "duration":numberInput
        }};
        switch($(".excerciseType").val()){
            case "strength":
                $.post("/strengthSubmit",log,function(data){
                    console.log(data);
                })
            break;
        case "endurance":
        // enduranceChoices.push(newActivity);
        $.post("/enduranceSubmit",log,function(data){
            console.log(data);
        })
            break;
        case "balance":
            $.post("/balanceSubmit",log,function(data){
                console.log(data);
            })
            break;
        case "flexibility":
            $.post("/FlexibilitySubmit",log,function(data){
                console.log(data);
            });
            console.log("log");
            console.log(log);

        
    }}
  

    
//        switch($(".excerciseType").val()){
//         case "strength":
// $.post("/submitStrength",
// function(data))        break;
//     case "endurance":
//     enduranceChoices.push(newActivity);
//         break;
//     case "balance":
//     balanceChoices.push(newActivity);
//         break;
//     case "flexibility":
//         flexibilityChoices.push(newActivity);


    
        // event.preventDefault;
    // event.



$(document).on("change",".secondaryChoice",function(event){
    event.stopPropagation;
    event.preventDefault;
    console.log("deploy3,1");
    deployTertiary()
});




$(document).on("ready",deployhomepage());
$(document).on("ready",deploylogs());


// $(document).on("click",".submitButton",function(event){
//     console.log("submit works at teh start");
//     event.preventDefault;
//     event.stopPropagation;
//     handleSubmit();
// });

$(document).on('change','.excerciseType',function(event){
    
    // console.log("deploying1");

    event.stopPropagation;
    event.preventDefault;
    console.log("deploying");
    deploySecondaryChoice();
})
$(document).on('click','.submitButton',function(event){
    console.log("updatelist");
    event.stopPropagation;
    event.preventDefault;
    handleSubmit();
    if($(".secondaryChoice").val()=="New"){
        var newActivity = $(".newInput").val();
        console.log(newActivity);
        switch($(".excerciseType").val()){
            case "strength":
        strengthChoices.push(newActivity);
            break;
        case "endurance":
        enduranceChoices.push(newActivity);
            break;
        case "balance":
        balanceChoices.push(newActivity);
            break;
        case "flexibility":
            flexibilityChoices.push(newActivity);
            
        }
        
        var newActivityArrays={
            "strength":strengthChoices,
            "endurance":enduranceChoices,
            "balance":balanceChoices,
            "flexibility":flexibilityChoices

        };
        console.log(newActivityArrays);

        newActivityArrays=JSON.stringify(newActivityArrays);
        console.log("walawala");
        console.log(newActivityArrays);
        var body = {"list":newActivityArrays};
        $.ajax({
            type:"POST",
            url: "/activityListNew",
            // headers: {"X-HTTP-Method-Override": "PUT"},
            data:body}).then(function(data){
                console.log("name");
            console.log(data);
        })
    }
});
$(document).on("click",".deleteAllButton", function(event){
    event.preventDefault;
    event.stopPropagation;
    $.post("/deleteAll",function(result){
        var data = JSON.stringify(result);
        console.log("deleted");
        console.log(data);
        location.reload();
    })


})

// $.ajax({
//     type: 'POST', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
//     dataType: 'json', // Set datatype - affects Accept header
//     url: "http://example.com/people/1", // A valid URL
//     headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
//     data: '{"name": "Dave"}' // Some data e.g. Valid JSON as a string
// });
