if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


meContribLevels =  [  ]  ; 
selectContrib =  function (  ) { meContribLevels =  [  ]  ; 
 if ( fileExists ( "contrib" )  )  { 
  var contrib = lsdir ( "contrib" )  ;
  {     var foreachOutput = squirrelForEach ( contrib ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; item = foreachOutput . getValue ( ) ;  { 
  if ( item != "." && item != ".." && isdir ( "contrib/" + item )  && fileExists ( "contrib/" + item + "/info.json" )  )  { 
  var data = jsonRead ( fileRead ( "contrib/" + item + "/info.json" )  )  ;
 meContribLevels . push (  { contribFolder : item , contribName : data [ "name" ]  , contribWorldmap : data [ "worldmap" ]  , name :  (  function ( x ) {  return  function (  ) {  return x ;
  }  ;
  }  )  ( data [ "name" ]  )  , func :  (  function ( contribFolder , contribWorldmap ) {  return  function (  ) { game = clone ( gameDefault )  ; 
game . completed . clear (  )  ; 
game . allCoins . clear (  )  ; 
game . allEnemies . clear (  )  ; 
game . allSecrets . clear (  )  ; 
game . bestTime . clear (  )  ; 
game . file = contribFolder ; 
game . path = "contrib/" + contribFolder + "/" ; 
game . world = contribWorldmap ; 
tileSearchDir . push ( "contrib/" + contribFolder + "/gfx" )  ; 
gvDoIGT = false ; 
 if ( fileExists ( "contrib/" + contribFolder + "/" + config . lang + ".json" )  )  { 
 gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "contrib/" + contribFolder + "/" + config . lang + ".json" )  )  )  ; 
print ( "Found text.json" )  ; 
 } 
  
  else  if ( fileExists ( "contrib/" + contribFolder + "/text.json" )  )  { 
 gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "contrib/" + contribFolder + "/text.json" )  )  )  ; 
print ( "Found text.json" )  ; 
 } 
  
  
  if ( fileExists ( "contrib/" + contribFolder + "/script.nut" )  )  if (  ! contribDidRun . rawin ( contribFolder )  )  { 
 donut ( "contrib/" + contribFolder + "/script.nut" )  ; 
contribDidRun [ contribFolder ] = true ; 
 } 
  
  
  if ( fileExists ( "save/" + contribFolder + ".json" )  ) loadGame ( contribFolder )  ; 
 
  else startOverworld ( "contrib/" + contribFolder + "/" + contribWorldmap )  ; 
 
  }  ;
  }  )  ( item , data [ "worldmap" ]  )  }  )  ; 
 } 
  
  } 
     }  }  } 
  
  if ( meContribLevels . len (  )  == 0 )  { 
 meContribLevels . push (  { name :  function (  ) {  return gvLangObj [ "contrib-menu" ]  [ "empty" ]  ;
  }  , func :  function (  ) {  }  }  )  ; 
 } 
  
  else meContribLevels . sort (  function ( a , b ) {  if ( a . name (  )  > b . name (  )  )  return 1 ;
  
  if ( a . name (  )  < b . name (  )  )  return  - 1 ;
  
  return 0 ;
  }  )  ; 
 
 meContribLevels . push (  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meMain ; 
cursor = 2 ; 
 }  , back :  function (  ) { menu = meMain ; 
cursor = 2 ; 
 }  }  )  ; 
menu = meContribLevels ; 
 }  ; 



});