import express, {NextFunction, Request, Response} from "express";

const app = express();
app.use(express.json());
// app.use(express.urlencoded({extended: true}))

app.get('/',(req:Request,res:Response) => {
    // Return Types
    // ------------

    // return res.send("Hello World")

    // return res.json({
    //     success: true,
    //     name : "AnyName"
    // })

    // return res.redirect("https://google.co.in")

    return res.send("Requests")
})

app.post("/api/data" , (req:Request,res:Response)=>{
    console.log(req.body);
    return res.sendStatus(200);
})

//Chaining the Requests
//---------------------

app.route('/chain').get((req:Request, res:Response)=>{
    return res.send("First Request (GET)")
}).post((req:Request,res:Response)=>{
    return res.send("Second Request (POST)")
})


//middleware Currying
//--------------------

const middleware = ({name}: {name:string}) => (req:Request,res:Response,next:NextFunction) => {
    res.locals.name = name;
    // req.name = name;
    next();
}

/*
Request<{1},{2},{3},{4}>
1. Request Parameters
2. Response Body
3. Request Body
4. Request Query
*/

app.get("/middleware", middleware({name: "Arun"}), (req:Request<{},{},{},{}>, res:Response)=>{
    console.log(res.locals.name);
    res.send({name: res.locals.name})
})

app.listen(3000,()=>{
    console.log(`Application listening at http://localhost:3000`);
});