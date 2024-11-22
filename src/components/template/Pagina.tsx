import Header from "./Header";
import MenuLateral from "./MenuLateral";

export default function Pagina(props: any) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <MenuLateral />
      <div className="flex flex-1 flex-col">
        <Header></Header>
        <main className="flex flex-1 flex-col justify-between bg-[#F9F9F9] w-full overflow-auto">
          <div>{props.children}</div>
          <footer className="flex items-center justify-end w-full px-6 py-3 text-xs text-[#B8B8B8]">
            Desenvolvido pela equipe KKR
          </footer>
        </main>
      </div>
    </div>
  );
}
