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