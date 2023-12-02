import microApp from '@micro-zoe/micro-app';
microApp.start();
export default function MyPage() {
  return (
    <div>
      <h1>子应用👇</h1>
      <micro-app 
        name="viteApp" 
        url="http://localhost:8001/app1" 
        // iframe // 切换 with沙箱 or iframe沙箱。默认为与qiankun类似的 with 沙箱
      >
      </micro-app>
    </div>
  );
}
