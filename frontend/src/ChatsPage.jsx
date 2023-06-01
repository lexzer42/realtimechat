import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
 return (
  <div style={{ height: '100vh' }}>
    <PrettyChatWindow
          projectId='d09d852c-1511-4bc5-a963-b86c55859cf8'
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100%'}}
          />
  </div>
 )
}

export default ChatsPage;