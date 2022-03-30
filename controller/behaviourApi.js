
const Decision = require('../model/MakingDecisions');
const Influencing = require('../model/influencing');
const Thinking = require('../model/ThinkingLaterally');
const Managing = require('../model/ManagingConflicts');
const Driving = require('../model/DrivingResults');

module.exports.behaviourList = async function(req, res){
    console.log("enterd to view");
    let decisoin = await Decision.find({})
    let md = decisoin.map((value)=>{
        return {
            id: value.id,
            description: value.description,
        }
    })
    let influencing = await Influencing.find({});
    let iN = influencing.map((value)=>{
        return {
            id: value.id,
            description: value.description,
        }
    })
    let thinking = await Thinking.find({})
    let tL = thinking.map((value)=>{
        return {
            id: value.id,
            description: value.description,
        }
    })
    let managing = await Managing.find({})
    let mC = managing.map((value)=>{
        return {
            id: value.id,
            description: value.description,
        }
    })
    let driving = await Driving.find({})
    let dR = driving.map((value)=>{
        return {
            id: value.id,
            description: value.description,
        }
    })

                
             
    return res.status(200).json({data: {behavioursList: {
        Making_Decision: md,
        Thinking_Laterally: tL,
        Influencing_And_Negotiating: iN,
        Managing_Conflicts: mC,
        Driving_Results: dR,
    }}});
}

module.exports.createDecision = async function(req, res){
    console.log("entered to create decisoin");
    if (req.body.description) {
        Decision.create({
            description: req.body.description
        }, function(err, decision){
            if (err) {
                return res.status(500).json({error:"internal server issue"});
            }else{
                return res.status(200).json({data:{
                    behaviourLL:{
                        Making_Decision:{
                            description: decision.description,
                        }
                    }
                }});
            }
        });
    }else{
        return res.status(404).json({error:" field data is incorrect"});
    }
}

module.exports.createThinking = async function(req, res){
    console.log("entered to create thinking");
    if (req.body.description) {
        Thinking.create({
            description: req.body.description
        }, function(err, thinking){
            if (err) {
                return res.status(500).json({error:"internal server issue"});
            }else{
                return res.status(200).json({data:{
                    behaviourLL:{
                        Thinking_Laterally:{
                            description: thinking.description,
                        }
                    }
                }});
            }
        });
    }else{
        return res.status(404).json({error:" field data is incorrect"});
    }
}
module.exports.createInfluencing = async function(req, res){
    console.log("entered to create influencing");
    if (req.body.description) {
        Influencing.create({
            description: req.body.description
        }, function(err, influencing){
            if (err) {
                return res.status(500).json({error:"internal server issue"});
            }else{
                return res.status(200).json({data:{
                    behaviourLL:{
                        Influencing_And_Negotiating:{
                            description: influencing.description,
                        }
                    }
                }});
            }
        });
    }else{
        return res.status(404).json({error:" field data is incorrect"});
    }
}
module.exports.createManaging = async function(req, res){
    console.log("entered to create managing");
    if (req.body.description) {
        Managing.create({
            description: req.body.description
        }, function(err, managing){
            if (err) {
                return res.status(500).json({error:"internal server issue"});
            }else{
                return res.status(200).json({data:{
                    behaviourLL:{
                        Managing_Conflicts:{
                            description: managing.description,
                        }
                    }
                }});
            }
        });
    }else{
        return res.status(404).json({error:" field data is incorrect"});
    }
}
module.exports.createDriving = async function(req, res){
    console.log("entered to create driving");
    if (req.body.description) {
        Driving.create({
            description: req.body.description
        }, function(err, driving){
            if (err) {
                return res.status(500).json({error:"internal server issue"});
            }else{
                return res.status(200).json({data:{
                    behaviourLL:{
                       Driving_Results:{
                            description: driving.description,
                        }
                    }
                }});
            }
        });
    }else{
        return res.status(404).json({error:" field data is incorrect"});
    }
}

//deleting the behaviors
module.exports.removeDecision = async function(req, res){
    Decision.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            return res.status(500).json({error:" Making_decision id is not in the list"});
        }else{
            return res.status(200).json({data:{
                message: "Deleted Successfully"
            }})
        }
    })
}

module.exports.removeTL = async function(req, res){
    Thinking.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            return res.status(500).json({error:" Thinking_Laterally id is not in the list"});
        }else{
            return res.status(200).json({data:{
                message: "Deleted Successfully"
            }})
        }
    })
}

module.exports.removeIN = async function(req, res){
    Influencing.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            return res.status(500).json({error:" Influencing_AND_Negotiating id is not in the list"});
        }else{
            return res.status(200).json({data:{
                message: "Deleted Successfully"
            }})
        }
    })
}

module.exports.removeManaging = async function(req, res){
    Managing.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            return res.status(500).json({error:" Managing_Conflicts id is not in the list"});
        }else{
            return res.status(200).json({data:{
                message: "Deleted Successfully"
            }})
        }
    })
}

module.exports.removeDriving = async function(req, res){
    Driving.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            return res.status(500).json({error:" Driving_result id is not in the list"});
        }else{
            return res.status(200).json({data:{
                message: "Deleted Successfully"
            }})
        }
    })
}


// Updating the behaviours
module.exports.updateMD =  function(req, res){
    // console.log("enterd to update deci");
    Decision.findOneAndUpdate({_id: req.params.id},{
        description: req.body.description}, 
        {new: true}, (err, decision)=>{
        if (err) {
            return res.status(500).json({error:" Making_decision id is not in the list"});
        }else{
            return res.status(200).json({data:{
                Making_Decision: {
                    description: decision.description,
                },
                message: "updated Successfully"
            }})
        }
    })
    // .then(result=>{
    //     res.status(200).json({
    //        message: "updated successfully"
    //     })
    // })
    // .catch(err=>{
    //     console.log(err);
    //     res.status(500).json({
    //         error: err
    //     })
    // })
}
module.exports.updateTL =  function(req, res){
    // console.log("enterd to update Think");
    Thinking.findOneAndUpdate({_id: req.params.id},{
        $set:{
            description: req.body.description,
        }
    }, {new: true}).then(result=>{
        res.status(200).json({
           message: "updated successfully"
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}
module.exports.updateIN =  function(req, res){
    // console.log("enterd to update influencing");
    Influencing.findOneAndUpdate({_id: req.params.id},{
        $set:{
            description: req.body.description,
        }
    }, {new: true}).then(result=>{
        res.status(200).json({data:{
            Influencing_And_Negotiating: {
                description: result.description,
            },
            message: "updated Successfully"
        }})
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}
module.exports.updateMC =  function(req, res){
    // console.log("enterd to update managing");
    Managing.findOneAndUpdate({_id: req.params.id},{
        $set:{
            description: req.body.description,
        }
    }, {new: true}).then(result=>{
        res.status(200).json({data:{
            Managing_Conflicts: {
                description: result.description,
            },
            message: "updated Successfully"
        }})
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}
module.exports.updateDR =  function(req, res){
    // console.log("enterd to update driving");
    Driving.findOneAndUpdate({_id: req.params.id},{
        $set:{
            description: req.body.description,
        }
    }, {new: true}).then(result=>{
        res.status(200).json({data:{
            Driving_Results: {
                description: result.description,
            },
            message: "updated Successfully"
        }})
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}