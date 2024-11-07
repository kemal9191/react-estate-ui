import React, { useState } from "react";
import "./chat.scss";

const Chat = () => {

    const [chat, setChat] = useState(true)
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (<div className="chatBox">
        <div className="top">
            <div className="user">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                John Doe
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit numquam, ipsum, ipsam perferendis 
                molestiae suscipit autem cum beatae hic illo consequuntur, explicabo consectetur cupiditate doloremque aliquam 
                vero vel perspiciatis corrupti labore. Rem officiis pariatur itaque atque deserunt error quae ipsa, perspiciatis 
                porro ut animi corrupti eum obcaecati beatae asperiores voluptas minus fugit consectetur reiciendis nemo? Amet 
                et sit aperiam error quia labore eaque quae soluta in tenetur consectetur hic praesentium quas doloribus commodi 
                maiores, alias ducimus deserunt, modi qui saepe officiis laborum quis. Aliquam similique aspernatur deserunt. 
                Soluta illo, facere dignissimos fugit et reiciendis fugiat dolores ut sed quis.
                </p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit numquam, ipsum, ipsam perferendis 
                molestiae suscipit autem cum beatae hic illo consequuntur, explicabo consectetur cupiditate doloremque aliquam 
                vero vel perspiciatis corrupti labore. Rem officiis pariatur itaque atque deserunt error quae ipsa, perspiciatis 
                porro ut animi corrupti eum obcaecati beatae asperiores voluptas minus fugit consectetur reiciendis nemo? Amet 
                et sit aperiam error quia labore eaque quae soluta in tenetur consectetur hic praesentium quas doloribus commodi 
                maiores, alias ducimus deserunt, modi qui saepe officiis laborum quis. Aliquam similique aspernatur deserunt. 
                Soluta illo, facere dignissimos fugit et reiciendis fugiat dolores ut sed quis.
                </p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit numquam, ipsum, ipsam perferendis 
                molestiae suscipit autem cum beatae hic illo consequuntur, explicabo consectetur cupiditate doloremque aliquam 
                vero vel perspiciatis corrupti labore. Rem officiis pariatur itaque atque deserunt error quae ipsa, perspiciatis 
                porro ut animi corrupti eum obcaecati beatae asperiores voluptas minus fugit consectetur reiciendis nemo? Amet 
                et sit aperiam error quia labore eaque quae soluta in tenetur consectetur hic praesentium quas doloribus commodi 
                maiores, alias ducimus deserunt, modi qui saepe officiis laborum quis. Aliquam similique aspernatur deserunt. 
                Soluta illo, facere dignissimos fugit et reiciendis fugiat dolores ut sed quis.
                </p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit numquam, ipsum, ipsam perferendis 
                molestiae suscipit autem cum beatae hic illo consequuntur, explicabo consectetur cupiditate doloremque aliquam 
                vero vel perspiciatis corrupti labore. Rem officiis pariatur itaque atque deserunt error quae ipsa, perspiciatis 
                porro ut animi corrupti eum obcaecati beatae asperiores voluptas minus fugit consectetur reiciendis nemo? Amet 
                et sit aperiam error quia labore eaque quae soluta in tenetur consectetur hic praesentium quas doloribus commodi 
                maiores, alias ducimus deserunt, modi qui saepe officiis laborum quis. Aliquam similique aspernatur deserunt. 
                Soluta illo, facere dignissimos fugit et reiciendis fugiat dolores ut sed quis.
                </p>
                <span>1 hour ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
        </div>
      </div>)}
    </div>
  );
};

export default Chat;