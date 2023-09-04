const { writeProduct, getProduct } = require('../data/model');
const uuid = require('uuid');
const mainController = {
    index: (req, res) => {
        const storeNotes = getProduct();
        res.render('addProduct', {productos: storeNotes});
    },
    create: (req, res) => {
        const newNote = {
            id: uuid.v4(),
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            estado: req.body.estado,
            precio: req.body.precio,
            image: req.file ? req.file.filename : 'default.jpg',
        };
        const storedNotes = getProduct();
        storedNotes.push(newNote);
        writeProduct(storedNotes);
        res.redirect('/addIndex');
    },
    edit: (req, res) => {
        if(!req.body.id || !req.body.nombre || !req.body.descripcion || !req.body.categoria || !req.body.estado || !req.body.precio || !req.file ? req.file.filename : 'default.jpg') return res.send('Error');
        const storedNotes = getProduct();
        const note = {
            id: req.body.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            estado: req.body.estado,
            precio: req.body.precio,
            image: req.file ? req.file.filename : 'default.jpg',
        };
        writeProduct(storedNotes.map((element) => {
            if(element.id == req.body.id){
                return note;
            }
            return element;
        }))
        res.redirect('/addIndex');
    },
    delete: (req, res) => {
        if (!req.params.id) return res.send('Error');
        const storedNotes = getProduct();


        writeProduct(storedNotes.filter((note) => {
            return note.id != req.params.id;
        }));
        res.redirect('/addIndex');
    }
};
module.exports = mainController;