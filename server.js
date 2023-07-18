const express = require('express')
const app = express()
const PORT = 8000

const provincialFlower = {
    'yukon':{
        'name': 'Fireweed',
        'color': 'Purple',
        'yearEstablished' : '1957'
    },
    'british columbia':{
        'name': 'Pacific Dogwood',
        'color': 'White',
        'yearEstablished' : '1956'
    },
    'northwest territories':{
        'name': 'Mountain Avens',
        'color': 'white',
        'yearEstablished' : '1957'
    },
    'alberta':{
        'name': 'Wild Rose',
        'color': 'Pink',
        'yearEstablished' : '1930'
    },
    'saskatchewan':{
        'name': 'Western Red Lily',
        'color': 'Orange',
        'yearEstablished' : '1941'
    },
    'manitoba':{
        'name': 'Prairie Crocus',
        'color': 'Lilac',
        'yearEstablished' : '1906'
    },
    'nunavut':{
        'name': 'Purple Saxifrage',
        'color': 'Purple',
        'yearEstablished' : '1999'
    },
    'ontario':{
        'name': 'White Trillium',
        'color': 'White',
        'yearEstablished' : '1937'
    },
    'quebec':{
        'name': 'Blue Flag',
        'color': 'Purple',
        'yearEstablished' : '1999'
    },
    'new brunswick':{
        'name': 'Purple Violet',
        'color': 'Purple',
        'yearEstablished' : '1936'
    },
    'nova scotia':{
        'name': 'Mayflower',
        'color': 'Pink',
        'yearEstablished' : '1901'
    },
    'prince edward island':{
        'name': 'Lady\'s Slipper',
        'color': 'Pink',
        'yearEstablished' : '1947'
    },
    'newfoundland':{
        'name': 'Purple Pitcher Plant',
        'color': 'Purple',
        'yearEstablished' : '1954'
    },
    
    'not found': {
        'name': 'unknown',
        'color': 'unknown',
        'yearEstablished' : '0'
    },
}

app.get('/', (request, response)=> {
        response.sendFile(__dirname + '/index.html')
})

app.get('/api/:province',(request,response)=>{
    const provinceName = request.params.province.toLowerCase()
    if (provincialFlower [provinceName]){
        response.json(provincialFlower [provinceName])
    }
    else {
        response.json(provincialFlower['not found'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on ${PORT}!`)
})

