class Alumno {
    constructor(nombre, apellidos, edad) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.materias = [];
      this.calificaciones = {};
    }
  
    inscribirMateria(materia) {
      this.materias.push(materia);
    }
  
    asignarCalificacion(materia, calificacion) {
      this.calificaciones[materia] = calificacion;
    }
  
    obtenerPromedio() {
      let suma = 0;
      let numMaterias = 0;
      for (let materia in this.calificaciones) {
        suma += this.calificaciones[materia];
        numMaterias++;
      }
      return suma / numMaterias;
    }
  }
  
  class Grupo {
    constructor() {
      this.alumnos = [];
    }
  
    agregarAlumno(alumno) {
      this.alumnos.push(alumno);
    }
  
    buscarPorNombre(nombre) {
      return this.alumnos.filter(alumno => alumno.nombre === nombre);
    }
  
    buscarPorApellido(apellido) {
      return this.alumnos.filter(alumno => alumno.apellidos === apellido);
    }
  
    obtenerPromedioGrupo() {
      let suma = 0;
      for (let alumno of this.alumnos) {
        suma += alumno.obtenerPromedio();
      }
      return suma / this.alumnos.length;
    }
  
    obtenerListaOrdenada() {
      return this.alumnos.sort((a, b) => a.obtenerPromedio() - b.obtenerPromedio());
    }
  }