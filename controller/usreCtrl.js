const model = require("../model/model");

 exports.userData = async (req, res) => {
    try {
        
        const data = req.body;
    
      //  console.log(data);
    
        const newData =  new model(data)
        const existing = await newData.save();
        console.log(existing);
        res.status(200).json({success: true, data: existing});
    } catch (error) {
        console.log(error);
    }
};

exports.getUser = async (req, res) => {
    try {
        
        const getData = await model.find();

        res.status(200)
        .json({
                 success: true,
                 message: getData
            });

            console.log(getData);
    } catch (error) {
        res.status(404).json(error.message );
    }
}

exports.updateUser = async (req, res) => {

    try {
        
        const userId = req.params.id; 

        const userData = await model.findByIdAndUpdate({
            _id : userId },
             req.body,
             { new : true }
            );
            
            res.status(200)
            .json({ updatedUserData: userData});

    } catch (error) {
        res.status(500).json({ error: error });
    }

};

exports.deleteUser = async (req, res) => {
    try {
        
        const userName = req.body.user;
        const deleteUser = await model.findOneAndDelete({ name : userName});

        if(!deleteUser){
            res.status(404).json({ massage : " user not found" });
        }
        res.status(200)
        .json({massage : "user delete successfully"});

    } catch (error) {
        res.status(404).json({error : error.massage});
        console.log(error);
    }
}

