const fs = require("fs/promises");
const cors = require("cors");
const _ = require("lodash");
const {v4:uuid} = require("uuid");
const express = require("express");

const app = express();
app.use(express.json());
app.listen(3000, () => console.log("API SERVER RUNNING"))


app.get("/jokes", (req,res) => {
    const jokes = [
        "If ali goes on the express does it mean he is now aliexpress",
        "If sam was sick nd he gets better does it mean he is now samuel",
        "If i become rich in a difficult way does it mean i am Richard",
        "If i draw only on a woman does it mean i am a designer",
        "If i take an iphone and put it on a tree does it become an apple tree",
        "If ama gets a new ride does it mean i can call it amaka",
        "If i take a hook and i lift it does it mean i have done HookUp",
        "If i take bill and put him on a gate does it mean he is now bill gate",
        "If you jug near a transformer does that mean it's an electric jug",
        "Do you know that spiders are the only original web developers",
        "Which insect builds mobile apps.Butterflies because they Flutter",
        "Do you know people that write fast are more likely to build IOS apps because they write SWIFTly"

    ];
    res.json({
        "Joke": _.sample(jokes)
    });
})
