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

//strength secondary choices
var deploystrengthChoices = function(){
    let newChoiceBox = $("<select>");
    newChoiceBox.addClass("secondaryChoice")

    //push each of the choices into the array of selections
    for(var i=0;i<strengthChoices.length;i++){
        let newChoice=$("<option>");
        newChoice.attr("value",strengthChoices[i]);
        newChoice.text(strengthChoices[i]);
        newChoiceBox.append(newChoice);
};
    //put in the "new" option in the secondary choice 
    let extraChoice=$("<option>")
    extraChoice.attr("value","New");
    extraChoice.text("create new activity");
    newChoiceBox.append(extraChoice);
     $(".secondaryContainer").append(newChoiceBox);
};

//secondary balance choices
var deployBalanceChoices = function(){
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

// secondary endurance choices
    var deployEnduranceChoices = function(){
        //creating the selection box
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

//secondary flexibility choices  
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
//deploying the third section and last section of the selections 
//which are the number of repetition or number of minutes  
var deployTertiary = function(){
    $(".tertiaryContainer").empty();
    secondaryExcercise=$(".secondaryChoice").val();
    // console.log(secondaryExcercise);
    //if the user is loggin a new kind of excercise, 
    //the input box will appear as well 
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

    //inputs boxes and lables for the duration input
    let numberInputTitle=$("<lable>");
    numberInputTitle.attr("for","numberInput");
    numberInputTitle.text("duration/repetitions");
    let numberInput =$("<input>");
    numberInput.addClass("numberInput");
    numberInput.attr("type","number");
    numberInput.attr("name","numberInput");
    let durRep = $("<select>")
    durRep.addClass("durRep");
    durRep.html("<option value='rep'>repetition</option><option value='dur'>minutes</option>");
    $(".tertiaryContainer").append(numberInputTitle,numberInput,durRep);

    //submit button is created here
    let submitButton=$("<button>");
    submitButton.addClass("btn btn-primary submitButton");
    submitButton.text("log excercise");
    $(".tertiaryContainer").append(submitButton);
    };


//deploy the div containing the first set of choices
var deployhomepage = function(){
        //getting the list of activities
        $.get("/activityList",function(data){
        // console.log(data);
        for(var i=0; i<data.length;i++){
            if (data[i].list){
        
        //getting the list as a string 
        activities=data[i].list}}
        // console.log(activities);

        //pase it into usable objects 
        activities=JSON.parse(activities);
        // console.log(activities);    

        //seperate the excercise choices into organized arrays
         strengthChoices = activities.strength;
         enduranceChoices = activities.endurance;
         balanceChoices= activities.balance;
         flexibilityChoices=activities.flexibility
        //set the excercise choive value
         excerciseTypeChoice=$(".excerciseType").val()
    });
}


//creates the log divs on the right hand side
var deploylogs=function(){
    //first gets rid of the stuff that was there before
    $(".logList").empty()
    //getting all of the logs from the database
    $.get("/allLogged", function(data){
        // console.log(data);
        //setting the different arrays of logs into variables
        var strengthLog = data[0].strengthexcs;
        var balanceLog = data[0].balanceexcs;
        var enduranceLog = data[0].enduranceexcs;
        var flexibilityLog = data[0].flexibilityexcs;

        //first create a generalized strengh logs div
        //then create the title for the div
        var strengthTitleDiv = $("<div>");
        strengthTitleDiv.html("<h4>Strength Excercises</h4>");

        //making the logs into divs and pushing them under the log div
        //for every one of the logs, create a subdiv and append display all of the information needed as texts in div 
         for ( var i=0;i<strengthLog.length;i++){
            var newLog = $("<div>");
            var newName= $("<p>");
            newLog.addClass("newLogDiv");
            newName.text("activity: "+strengthLog[i].name + " ");
            newLog.append(newName);
            var newNumberDiv = $("<div>");
            var newNumber;

            //for each one, of repetition is logged, show repetition
            if(strengthLog[i].repetition){
                 newNumber=strengthLog[i].repetition
                newNumberDiv.text("repetitions: "+ newNumber);
                }
            //of duration is logged, duration
            else if(strengthLog[i].duration){
            newNumber=strengthLog[i].duration;
            newNumberDiv.text("duration: "+ newNumber + " minutes");
            }
            //creating the div 
            newLog.append(newNumberDiv);
            strengthTitleDiv.append(newLog);
            }
            // at last, the entire trength div is pushed in to the main div 
            $(".logList").append(strengthTitleDiv);

            //same for balance
            var balanceTitleDiv = $("<div>");
            balanceTitleDiv.html("<h4>Balance Excercises</h4>");
            //each one
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
                else if(balanceLog[i].duration){
                newNumber=balanceLog[i].duration;
                newNumberDiv.text("duration: "+ newNumber + " minutes");
                }
                newLog.append(newNumberDiv);
                balanceTitleDiv.append(newLog);}

                $(".logList").append(balanceTitleDiv);

                //same for endurance
                var enduranceTitleDiv = $("<div>");
                 enduranceTitleDiv.html("<h4>Endurance Excercises</h4>");
                //each one
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
                else if(enduranceLog[i].duration){
                newNumber=enduranceLog[i].duration;
                newNumberDiv.text("duration: "+ newNumber + " minutes");
                }
                newLog.append(newNumberDiv);
                enduranceTitleDiv.append(newLog);}
                $(".logList").append(enduranceTitleDiv);

                //same for flexiblility
                var flexibilityTitleDiv = $("<div>");
                flexibilityTitleDiv.html("<h4>Flexibility Excercises</h4>");
                //for each one
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

//once the first , the kinds of excercise is chosen the 2nd round of choices are deployed
var deploySecondaryChoice = function(){
    event.preventDefault;
    event.stopPropagation;
    //we first get rid of what's already there
    $(".secondaryContainer").empty();
    $(".tertiaryContainer").empty();
    excerciseTypeChoice=$(".excerciseType").val();
    //switch to which ever the type of excercise is chosen
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



//first submit
var handleSubmit = function(){
    //assign the input values of dom input elements to variables
    var name = $(".secondaryChoice").val()
    var newname = $(".newInput").val()
    var numberTypeInput = $(".durRep").val()
    var numberInput= $(".numberInput").val()

//if the excercise name is not on the list and the user chooses new, the 
//the name of the excercise will be in the "newname" input box when its submitted
if(name=="New"){
    name=newname;
    }
//the object to be submitted to the database 
var log;
// if repetition, number input is put into "repstition" slot, else , duration
if (numberTypeInput =="rep"){
    log = {
        "name":name,
        "repetition":numberInput
        }
    }
    else {
        log= {
            "name":name,
            "duration":numberInput
        }
    };

    //depending on wich excercise group the activity belongs in, the excercise is logged under a 
    //excercise type and sent to the database
        switch($(".excerciseType").val()){

        case "strength":
                $.post("/strengthSubmit",log,function(data){
                    // console.log(data);
                })
            break;

        case "endurance":
        $.post("/enduranceSubmit",log,function(data){
            // console.log(data);
        })
            break;

        case "balance":
            $.post("/balanceSubmit",log,function(data){
                // console.log(data);
            })
            break;

        case "flexibility":
            $.post("/FlexibilitySubmit",log,function(data){
                // console.log(data);
            });
    }
}
  
//after the secondary, actual names of the excercise are chosen, another level of choices will be availablt to the user
$(document).on("change",".secondaryChoice",function(event){
    event.stopPropagation;
    event.preventDefault;
    // console.log("deploy3,1");
    deployTertiary()
});

//deploy based on the selection of the type of excercise that one does, 
//a list of secondary chioces will be given in another array selection below
$(document).on('change','.excerciseType',function(event){
    event.stopPropagation;
    event.preventDefault;
    // console.log("deploying");

    //afterwards, the actual names of the excercises will be deployed underneath
    deploySecondaryChoice();
})


$(document).on('click','.submitButton',function(event){
    // console.log("updatelist");
    event.stopPropagation;
    event.preventDefault;
    handleSubmit();
    //if the user were to select "new activity" the activity will be pushed to the temporary 
    //list of activities and then the list will be save on to the database
    if($(".secondaryChoice").val()=="New"){
        var newActivity = $(".newInput").val();

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
        //the all activitiy types, both new and old will be saved over the old list of items
        var newActivityArrays={
            "strength":strengthChoices,
            "endurance":enduranceChoices,
            "balance":balanceChoices,
            "flexibility":flexibilityChoices

        };

        newActivityArrays=JSON.stringify(newActivityArrays);
        // console.log(newActivityArrays);
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

//delete all logs
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

//selection menus with the first choices
$(document).on("ready",deployhomepage());
//the entire logs on the side
$(document).on("ready",deploylogs());