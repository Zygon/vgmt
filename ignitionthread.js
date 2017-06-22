//var Ingnicao = 0;
//var IngitionStatus = 0;

//var cptaignitionthread = {
//    start: function () {
//        var IngitionStatus = window.JSInterface.getignition();
//        if (Ingnicao != IngitionStatus) {
//            if (IngitionStatus == 1) {
//                var Sessao = cptaLocalStorage.readSession();
//                if (Sessao == null || Sessao == undefined)
//                    usersManager.checkignitionUser("00000", "1234");
//                eventManager.addEvent_Trip(6666, "IGNITION_ON", "TRIP_NULL");
//            }
//            else if (IngitionStatus == 0) {
//                //cptaTrackManager.stop("IGNICAO_OFF", null);
//                eventManager.addEvent_Trip(5555, "IGNITION_OFF", "TRIP_NULL");

//            }
//            Ingnicao = IngitionStatus;
//        }
//        setTimeout(function () {
//            cptaignitionthread.start();
//        }, 3000);
//    },
//    getignicao: function () {
//        return IngitionStatus;
//    },
//    setIgnicao: function (valor) {
//        IngitionStatus = valor;
//    },
//    init: function () {
//        setTimeout(function () {
//            cptaignitionthread.start();
//        }, 0)
//    },
//};


//var AppComm = function () { };
//AppComm.prototype.updateValues = function (json) {
//    var data = window.JSON.parse(json);
//    alert(data.value1);
//};

//var teste = {
//    teste2: function () {
//        cordova.exec(
//        teste.successCallback, // success callback function
//        teste.errorCallback, // error callback function
//        'Calendar', // mapped to our native Java class called "Calendar"
//        'addCalendarEntry', // with this action name
//        [{                  // and this array of custom arguments to create our entry
//            "title": title,
//            "description": notes,
//            "eventLocation": location,
//            "startTimeMillis": startDate.getTime(),
//            "endTimeMillis": endDate.getTime()
//        }]);
//    },
//    successCallback: function () {

//    },
//    errorCallback: function () {

//    }
//}

////cordova.addConstructor(function () {
////    cordova.addPlugin("appcomm", new AppComm());
////};

//var cptaignitionthread = {
//    alerta: function (value) {
//        alert(value);
//    },
//    SendEvent2DB: function (value) {
//        var Viagem = cptaLocalStorage.readTripStatus();  //IR BUSCAR AO TRIP VALUES
//        if (Sessao == null || Sessao == undefined)
//            usersManager.checkignitionUser("00000", "1234");
//        if (value == 1) {// IGNIÇÃO LIGADA
//            eventManager.addEvent_Trip(1, "IGNITIO_ON", "INPUT");// NO CASO DE NÃO TER GPS TODOS OS EVENTOS SAO REGISTADOS COM O ULTIMO GPS CONHECIDO 

//        }
//        if (value == 0) {// IGNIÇÃO DESLIGADA
//            eventManager.addEvent_Trip(1, "IGNITIO_OFF", "INPUT");// NO CASO DE NÃO TER GPS TODOS OS EVENTOS SAO REGISTADOS COM O ULTIMO GPS CONHECIDO 
//        }
//    }

//}