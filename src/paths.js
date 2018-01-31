const serverPaths = {
  dev: 'https://localhost:8000',
  prod: 'https://mission.herokuapp.com'
}

const serverPath = (process.env.NODE_ENV === 'development') ? serverPaths.dev : serverPaths.prod

export default serverPath
