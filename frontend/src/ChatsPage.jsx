import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
 return (
  <div style={{ height: '100vh' }}>
    <PrettyChatWindow
          projectId='agregar-project-id'
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100%'}}
          />
  </div>
 )
}

export default ChatsPage;
