import { useState } from 'react';
import yayJpg from '../assets/yay.jpg';
import { Button, Modal } from 'antd';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  const handleCloseModal = ()=>{
    setIsModalOpen(false);
  }
  return (
    <div>
      <h2>Welcome to app1!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <Button onClick={handleOpenModal}>打开弹框</Button>
      <Modal
        title="弹框"
        centered
        open={isModalOpen}
        onCancel={handleCloseModal}
        // style={{
        //   position:'fixed',
        //   zIndex:1000
        // }}
        onOk={handleCloseModal}
        // getContainer={false} // 指定 Modal 挂载的节点, false 为挂载在当前位置。
      >
        快来看下，我居不居中？
      </Modal>
    </div>
  );
}
