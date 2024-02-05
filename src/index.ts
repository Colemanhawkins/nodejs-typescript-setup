import app from './app/app'
import initializeDatabase from './app/db' // Cambié el nombre de db a initializeDatabase

const startApp = async (): Promise<void> => {
  try {
    const db = await initializeDatabase() // Espera a que se completen la carga de modelos y la sincronización de la base de datos

    // Opcionalmente, puedes acceder a los modelos de la siguiente manera:
    // const userModel = db.User;
    // const cursoModel = db.Curso;
    // Sincroniza la base de datos (puedes cambiar { force: false } según tus necesidades)
    await db.conn.sync({ force: false })
    // Inicia tu aplicación después de completar la inicialización de la base de datos
    app.listen(3000, () => {
      console.log('%s listening at 3000')
    })
  } catch (error) {
    console.error('Error al iniciar la aplicación:', error)
    process.exit(1) // Sale con un código de error en caso de fallo
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startApp()
