angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'bulbasur',
    lastText: 'A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.',
    face: 'img/bulbasur.png'
  }, {
    id: 1,
    name: 'charmelon',
    lastText: 'Charmeleon no tiene reparo en acabar con su rival usando las afiladas garras que tiene. Si su enemigo es fuerte, se vuelve agresivo, y la llama que tiene en el extremo de la cola empieza a arder con mayor intensidad tornándose azulada.',
    face: 'img/charmelon.png'
  }, {
    id: 2,
    name: 'charizard',
    lastText: 'Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque.',
    face: 'img/charizard.png'
  }, {
    id: 3,
    name: 'blastoise',
    lastText: 'Blastoise lanza chorros de agua con gran precisión por los tubos que le salen del caparazón que tiene en la espalda. Puede disparar chorros de agua con tanta puntería que no fallaría al tirar contra una lata pequeña a 50 m.',
    face: 'img/blastoise.png'
  }, {
    id: 4,
    name: 'pikachu',
    lastText: 'Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga.',
    face: 'img/pikachu.png'
    }, {
    id: 5,
    name: 'pidgey',
    lastText: 'Pidgey tiene un sentido de la orientación muy desarrollado. Es capaz de regresar a su nido, por lejos que se encuentre de las zonas que le resultan familiares.',
    face: 'img/pidgey.png'
  }, {
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
