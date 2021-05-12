$( function() {
  $( "#draggable" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable1" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable2" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable3" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable4" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable5" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable6" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable7" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable8" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable9" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable10" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#draggable11" ).draggable(
    { snap: ".ui-widget-header", snapTolerance: "50"});
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
} );
