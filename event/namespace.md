# namespace
`namespaces` позволяет создавать события в пространстве имён и обработчики событий будут срабатывать только для этих пространств.

    $( "p" ).on( "test.something", function( evt ) {
        alert( evt.namespace );
    });

    $( "button" ).click(function( ) {
        $( "p" ).trigger( "test.something" );
    });
