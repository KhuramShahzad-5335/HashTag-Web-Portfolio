import NavBarSM from "./MultiLevelNavMenu";

function Header_SM() {
  return (
    <div className="w-[100%] min-h-[100%] Scroll bg-white absolute top-24 left-0 z-[1000000] flex flex-col">
      <div className="my-4">
        <NavBarSM />
      </div>
    </div>
  );
}

export default Header_SM;
