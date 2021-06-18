//Requerimos express en la constante {Router}
const { Router } = require('express');
//Llamamos a Router en la constante rtr
const rtr = Router();
//requerimos structure.json en la variable let structures
let structures = require('../structures.json');
//Metodos HTTP
//Metodo GET
rtr.get('/',(req, res)=>{
  res.json(structures);
});

rtr.get('/:id',(req, res)=>{
  const { id }=req.params;
  const structure=structures.find(n=>n.id==id);
  res.json(structure);
});
//Metodo POST
rtr.post('/', (req,res)=>{
  const structure=req.body;
  structure.id=structures.length+1;
  structures.push(structure);
  res.json({msg:"Se Agrego La Estructura Con Exito",structures});
});
//Metodo PUT
rtr.put('/:id', (req,res)=>{
  const { id }=req.params;
  const {
    name,
    type,
    floors,
    walls,
    stairs,
    windows,
    rooms,
    doors
  }=req.body;
  structures = structures.map(n=>{
    if (n.id==4,n.id==3,n.id==2,n.id==1) {
      n.name=name;
      n.type=type;
      n.floors=floors;
      n.walls=walls;
      n.stairs=stairs
      n.windows=windows;
      n.rooms=rooms;
      n.doors = doors;
    }
    return n;
  });
  res.json({ msg:"Se Actualizo La Estructura De La Casa",structures});
});
rtr.put('/:id',(req, res)=>{
  const { id }=req.params;
  const {
    name,
    type,
    floors,
    apartments,
    stairs,
    parks,
    parkingLots
  } = req.body;
  structures=structures.map(n=>{
    if (n.id==5,n.id==6) {
      n.name=name;
      n.type=type;
      n.floors=floors;
      n.apartments=apartments;
      n.stairs=stairs
      n.parks=parks;
      n.parkingLots=parkingLots
    }
    return n;
  });
  
  res.json({msg:"Se Actualizo La Estructura Del Edificio", structures});
});
rtr.put('/:id',(req,res)=>{
  const { id }=req.params;
  const {
    name,
    type,
    lines,
    ubication
  } = req.body;
  structures=structures.map(n=>{
    if (n.id==7,n.id==8,n.id==9,n.id==10,n.id==11) {
      n.name=name;
      n.type=type;
      n.lines=lines;
      n.ubication=ubication
    }
    return n;
  });
  res.json({msg:"Se Actualizo La Estructura De La Carretera",structures});
});
rtr.put('/:id',(req, res)=>{
  const { id }=req.params;
  const {
    name,
    type,
    lines,
    ubication
  } = req.body;
  structures=structures.map(n=>{
    if (n.id==12) {
      n.name=name;
      n.type=type;
      n.lines=lines;
      n.ubication=ubication
    }
    return n;
  });
  res.json({msg:"Se Actualizo La Estructura Del Puente", structures});
});
rtr.put('/:id',(req, res)=>{
  const { id }=req.params;
  const {
    name,
    type,
    places,
    ubication,
    parkingLots
  } = req.body;
  structures=structures.map(n=>{
    if (n.id==13,n.id==14) {
      n.name=name;
      n.type=type;
      n.places=places;
      n.ubication=ubication;
      n.parkingLots=parkingLots
    }
    return n;
  });
  res.json({ msg:"Se Actualizo La Estructura Del Parque", structures });
});
rtr.put('/:id',(req, res)=>{
  const { id }=req.params;
  const {
    name,
    type,
    floors,
    places,
    restaurants,
    ubication,
    parkingLots
  } = req.body;
  structures=structures.map(n=>{
    if (n.id==15) {
      n.name=name;
      n.type=type;
      n.floors=floors;
      n.places=places;
      n.restaurants=restaurants
      n.ubication=ubication
      n.parkingLots=parkingLots
    }
    return n;
  });
  res.json({msg:"Se Actualizo La Estructura De La Carretera", structures});
});
//Metodo Delete
rtr.delete('/:id',(req, res)=>{
  const { id }=req.params;
  structures.forEach((n, index)=>{
    if (n.id==id) {structures.splice(index, 1);}
  });
  res.json({msg:"Se elimino la estructura", structures});
});


module.exports = rtr;