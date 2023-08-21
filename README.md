# Curso-Testing-Vue

shallow mount vs mount
shallow nos ayuda para montar nuestra aplicacion en las pruebas

shallow mount y mount son formas de montar la aplicacion
shallow mount es lo mismo que el mount, solo que no renderiza los componenetes hijos, por ejemplo, si quisieramos realizar una prueba de nuestro componenete principal el no accederia a los componentes hijos, esto nos sirve para el alcance del unit test, 
desventajas de usar mount, no lo debemos de utilizar por perfomance, 
shallow: renderiza solo el componente padre. Esta enfocado a Unit test. Tiempo de ejecucion corto.
Mount: renderiza al componente padre y sus hijos. Enfocado a test de integracion. Tiempo de ejecucion largo.

Wrapper: Ademas de contener un componente tiene  metodos que nos ayudan a testearlo
https://test-utils.vuejs.org/api/#wrapper-methods
la instancia del componente Vue proporciona acceso a todas las propiedades, metodos y eventos definidos en el componente, lo que permite realizar pruebas mas avanzadas y detalladas. Al acceder a la instancia del componente Vue a traves de wrapper.vm podemos interacutar con ella directamente y realizar comprobaciones sobre su estado y comportamiento

trigger: esta funcion del wrapper nos ayuda a generar una accion

Mocks: Es un tipo de prueba que consisten en crear objetos falsos que sustituyan a los objetos reales y de esta manera poder probar un determinado requerimiento. El objetivo de utilizar objetos fake en lugar de reales es romper las dependencias con otros objetos y de esta manera probar requerimientos de manera independiente. Estos objetos se usan para probar que se realizan correctamente llamadas a otros metodos, por ejemplo a una web API y poder validar el comportamiento del componente al obtener una respuesta por parte de esa API
hay dos formas de hacerlo


UN COMPONENTE PADRE PASA PROPIEDADES A COMPONENTES HIJOS, LOS COMPONENTES HIJOS EMITEN EVENTOS AL COMPONENTE PADRE

para hacer el coverage necesitamos agregar la siguiente configuracion al package.json
"jest": {
    "preset": "@vue/cli-plugin-unit-jest",
    "collectCoverage": true,
    "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**"]
  }

  npm run test:unit para ejecutar nuestras pruebas y ver el coverage

  Vue Test Coverage o cobertura de pruebas en Vue es una metrica utilizada para medir la cantidad de codigo de Vue.js que es cubierta por pruebas automatizadas
  En el contexto de Vue la cobertura de pruebas se puede medir utilizando herramientas como Jest o Mocha, que son frameworks de pruebas populares para aplicaciones web.
  Estas herramientas nos permiten generar un informe de cobertura de pruebas que nos muestra la cantidad de codigo que es cubierta por las pruebas automatizadas.
  El informe de cobertura de pruebas se muestra en forma de porcentaje, lo que nos indica cuanto del codigo de nuestra aplicacion esta siendo evaluado por las pruebas automatizadas. Un alto porcentaje de cobertura de prueba indica que la mayoria del codigo esta siendo evaluado y que hay menos posibilidades de que se produzcan errores o problemas en el codigo.
  Para configurarlo, se puede agregar dentro del archivo package.json o si tienes un archivo aparte de test.config.js se agregaria lo siguiente 
  // Para jest.config.js 
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**']
}

// Para package.json
"jest": {
    "preset": "@vue/cli-plugin-unit-jest",
    "collectCoverage": true,
    "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**"]
}

