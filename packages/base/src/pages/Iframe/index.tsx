import { PageContainer } from '@ant-design/pro-components';

const AccessPage: React.FC = () => {
  const app1Url = `http://localhost:8001`;
  return (
    <PageContainer
      ghost
      header={{
        title: 'iframe加载的页面',
      }}
    >
      <iframe 
       style={{
        width:'100%',
        height:'180vh',
        border: '2px solid #1890ff'
      }}
      src={app1Url}
       />
    </PageContainer>
  );
};

export default AccessPage;