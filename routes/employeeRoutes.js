const router=express.Router()
const {getData,postData,putData,deleteData}=require('../controller/empController')
router.get("/",(req,res)=>{
    res.send("get data")
    getData();
})

router.post("/addnew",(req,res)=>{
    res.send("post data")
    postData();
})

router.put("/update/:id",(req,res)=>{
    const id=req.params.id
    res.send("update data")
    putData(id,req.body);
})

router.delete("/delete/:id",(req,res)=>{
    const id=req.params.id
    res.send("delete data")
    deleteData(id);
})
module.exports=router;