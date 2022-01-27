const empmodel=require('../db/employeeSchema');
const getData=async()=>{
    await empmodel.find({},(err,data)=>{
        if(err) throw err;
    })
}

const postData=(data)=>{
    let ename=data.ename;
    let salary=data.salary;
    let add=data.add;
}

//insert data
let ins=new empmodel({ename:ename,salary:salary,add:add});
ins.save((err)=>{
    if(err) throw err;
    else{
        console.log("data added")
    }
})


const putData=(id,data)=>{
    empmodel.updateOne({_id:id},{$set:data},(err)=>{
        if(err)throw err;
        else{
            console.log("updated")
        }
    })
}

const deleteData=(id)=>{
    empmodel.deleteOne({_id:id},(err)=>{
        if(err)throw err;
        else{
            console.log("deleted")
        }
    })
}