var models=require('../models/models.js');
var reclamo= { tipoReclamo:'odeco',
                observacion:'Mal servicio', 
                fecha:'26/11/2016'};

exports.principal = function(req, res, next) {
                    res.render('index',
                    			 { title:'Proyecto Final', 
		                           subtitle: 'Avances en computacion',
		                           reclamo:reclamo});
					 };
exports.registroReclamo = function(req, res) {
 		       			res.render('registroReclamo',
 		       			{reclamo: reclamo });
		  				 };

exports.guardarReclamo = function(req, res) {
 		       			res.render('respuestaReclamo',
 		       			{mensaje: 'Reclamo Guardado'});
		  				 };

exports.respuestaReclamo = function(req, res) {
 		       			res.render('respuestaReclamo',
 		       			{title:'realizo su reclamo',
 		       				mensaje: 'Reclamo Guardado'});
		  				 };
		  				 
exports.listaReclamo = function(req, res) {
 		       			res.render('listaReclamo',
 		       			{title:'seleccion por fecha',
 		       				reclamo: reclamo });
		  				 };

exports.fechaReclamo = function(req, res) {
 		       			res.render('fechaReclamo',
 		       			{title:'fecha',
 		       				reclamo: reclamo });
		  				 };



