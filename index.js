
let tempoPadraoPipoca = 10;
let tempoPadraoMacarrao = 8;
let tempoPadraoCarne = 15;
let tempoPadraoFeijao = 12;
let tempoBrigadeiroPadrao = 8;


        function pipoca(tempoPipoca){
            if (tempoPipoca >= 10 && tempoPipoca < tempoPadraoPipoca*2){
                return "Prato pronto, bom apetite!"
            }else if(tempoPipoca < 10){
                return "Tempo insuficiente";
            }else if (tempoPipoca >= tempoPadraoPipoca*2 && tempoPipoca < tempoPadraoPipoca*3){
                return "Pipoca queimou";
            }else if (tempoPipoca >= tempoPadraoPipoca*3){
                return "kabumm";
            }
        }

        function macarrao(tempoMacarrao){
            if (tempoMacarrao >= 8 && tempoMacarrao < tempoBrigadeiroPadrao*2){
                return "Prato pronto, bom apetite!"
            }else if(tempoMacarrao < 8){
                return "Tempo insuficiente";
            }else if(tempoMacarrao >= tempoPadraoMacarrao*2 && tempoMacarrao < tempoPadraoMacarrao*3){
                return "Macarrao queimou";
            }else if(tempoMacarrao >= tempoPadraoMacarrao*3){
                return "kabumm";
            }
        }

        function carne(tempoCarne){
            if (tempoCarne >= 15 && tempoCarne < tempoPadraoCarne*2){
                return "Prato pronto, bom apetite!"
            }else if(tempoCarne < 15){
                return "Tempo insuficiente";
            }else if(tempoCarne >= tempoPadraoCarne*2 && tempoCarne < tempoPadraoCarne*3){
                return "Carne queimou";
            }else if(tempoCarne >= tempoPadraoCarne*3){
                return "kabumm";
            }   
        }

        function feijao(tempoFeijao){
            if (tempoFeijao >= 12 && tempoFeijao < tempoPadraoFeijao*2){
                return "Prato pronto, bom apetite!"
            }else if(tempoFeijao < 12){
                return "Tempo insuficiente";
            }else if(tempoFeijao >= tempoPadraoFeijao*2 && tempoFeijao < tempoPadraoFeijao*3){
                return "Feijao queimou";
            }else if(tempoFeijao >= tempoPadraoFeijao*3){
                return "kabumm";
            }
        }

        function brigadeiro(tempoBrigadeiro = 8){
            if (tempoBrigadeiro == 8){
                return "Prato pronto, bom apetite!"
            }else if(tempoBrigadeiro < 8){
                return "Tempo insuficiente";
            }else if((tempoBrigadeiro >= tempoBrigadeiroPadrao*2  && (tempoBrigadeiro < tempoBrigadeiroPadrao*3))){
                return "Brigadeiro queimou";
            }else if(tempoBrigadeiro >= tempoBrigadeiroPadrao*3){
                return "kabumm!!!";
            }
        }


console.log(feijao(11));
