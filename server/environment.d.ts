declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MANGO_URI: string;
      SOCKET_PORT?: number;
      SERVER_PORT: number;
      JWT_SECRET_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}