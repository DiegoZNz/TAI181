
      $(document).ready(function() {
        // Cargar el JSON
        $.getJSON("static/js/cv.json", function(data) {
            console.log(data);
          // Información personal
          $("#nombre").text(data.informacion_personal.nombre);
          $("#idiomas").empty();
          data.informacion_personal.idiomas.forEach(function(idioma) {
            $("#idiomas").append("<li>" + idioma + "</li>");
          });
          $("#telefono").text(data.informacion_personal.contacto.telefono);
          $("#correo").text(data.informacion_personal.contacto.correo);
          $("#direccion").text(data.informacion_personal.contacto.direccion);
          // Educación
          $("#educacion").empty();
          data.educacion.forEach(function(inst) {
            $("#educacion").append("<li><h4>" + inst.titulo + "</h4><p>" + inst.fecha_inicio + " - " + inst.fecha_fin + "</p><p>" + inst.institucion + "</p></li>");
          });
          // Experiencia académica
          $("#experiencia_academica").empty();
          data.experiencia_academica.forEach(function(exp) {
            $("#experiencia_academica").append("<li><h4>" + exp.puesto + "</h4><p>" + exp.periodo + "</p><p>" + exp.institucion + "</p></li>");
          });
          // Proyectos destacados
          $("#proyectos_destacados").empty();
          data.proyectos_destacados.forEach(function(proyecto) {
            $("#proyectos_destacados").append("<li><h4>" + proyecto.nombre + "</h4><p>" + proyecto.descripcion + "</p><p>" + proyecto.fecha + "</p></li>");
          });
          // Habilidades
          $("#habilidades").empty();
          data.habilidades.forEach(function(habilidad) {
            $("#habilidades").append("<li>" + habilidad + "</li>");
          });
          // Conocimientos
          $("#conocimientos").empty();
          Object.keys(data.conocimientos).forEach(function(cat) {
            $("#conocimientos").append("<h4>" + cat.replace(/_/g, " ") + "</h4><ul>");
            data.conocimientos[cat].forEach(function(conocimiento) {
              $("#conocimientos").append("<li>" + conocimiento + "</li>");
            });
            $("#conocimientos").append("</ul>");
          });
        });
      });
