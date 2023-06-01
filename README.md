Para el backend se utilizó nodemon para recargas automáticas y para el frontend se utilizó Vite para un desarrollo más rápido. La aplicación admite chat privado y en grupo, mensajes en tiempo real y autenticación de usuario con Firebase. Además, esta aplicación puede manejar hasta 30,000 usuarios gracias a su arquitectura escalable, lo que significa que puede abarcar hasta 100,000 usuarios.

Para ejecutar la aplicación, clonar el repositorio, instalar los paquetes y ejecutar "npm start" en el directorio raíz. 

En este proyecto, se utilizó Chat Engine para administrar y conectar a los usuarios a través de diferentes chats. Puede encontrar más información sobre los usuarios y sus actividades en el siguiente enlace: https://chatengine.io

Crearse una cuenta en https://chatengine.io 
Una vez creado en Project Settings copiar las API Keys de Project ID: " ",  y Private Key: " "

En la carpeta BackEnd/index.js  

cambiar esta parte   
        const response = await axios.put(
           'https://api.chatengine.io/users/',
           {username: username, secret: username, first_name: username},
          {headers: {"private-key": "Pegar aqui private-key"}}
         );         
y en FrontEnd/src/ChatsPage.jsx         
        <PrettyChatWindow
          projectId='Poner aqui projectID'
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100%'}}
          />
