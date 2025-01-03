# Ejercicio Vuelos
Con el fichero json adjunto realiza las siguientes tareas

   1) Incluye el fichero vuelos.json en tu proyecto. Léelo y muestra en un componente un listado con los destinos y por cada destino las opciones de vuelo ( número de vuelo y fecha) . 


   2) Por cada vuelo, añade un botón seleccionar. Cuando se pulsa seleccionar , se muestra en un panel del detalle del vuelo (Destino, fecha , hora , plazas , plazas disponibles y plazas ocupadas) 


   3) Sobre el panel anterior, crea dos botones (Reservar plaza y Liberar plaza) . El botón Reservar plaza solo estará activo si existen plazas disponibles y el botón Liberar plazas estará activo solo si existen plazas reservadas. Cuando se pulsa sobre reservar plaza , las plazas disponibles de decrementan en una unidad y las plazas reservadas se incrementan en una unidad. 


   4) Sobre cada destino añade un botón Añadir vuelo que muestre un formulario con id de vuelo, fecha y hora, plazas disponibles. Cuando se envíe el formulario , se crea un nuevo vuelo y se visualiza en la lista.


   5) Sobre cada vuelo añade un botón Eliminar vuelo que elimina el vuelo de la lista


  6) Muestra un mensaje en la cabecera de la pantalla cuando en algún vuelo queden menos de tres plazas con el mensaje " Ultimas plazas disponibles para el vuelo XXXX con destino YYYY" donde  XXXX se corresponde con el id del vuelo e YYYY con el destino del vuelo.