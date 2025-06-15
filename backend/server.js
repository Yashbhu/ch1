//advance or modern
import express from 'express';

const app = express()
const port = process.env.PORT || 3000//hardcorded port
app.get('/', (req, res) => {
    res.send('hello')
});
const joke=[{
  joke1: "Why don't scientists trust atoms? Because they make up everything!",
  joke2: "Why did the function cross the road? To return to the other side!",
  joke3: "I told my computer I needed a break, and now it won’t stop sending me KitKat ads."
}]

app.get('/',(req,res)=>{
    res.json(joke)
})
app.listen(port, () => {
    console.log(`port is listening to port ${port}`)
})

