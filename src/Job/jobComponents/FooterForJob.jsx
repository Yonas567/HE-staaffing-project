export default function FooterForJob() {
  return (
    <main className="bg-white shadow-2xl  z-50 bottom-0 w-full left-0  py-10 rounded-xl border-t-2 border-red-700 flex flex-col gap-8 px-6">
      <div className="flex flex-col gap-4 ">
        <h1>COMPANY</h1>
        <div className="flex flex-col gap-2">
          <p>privacy & cookie policy</p>
          <p>Terms of use</p>
        </div>
      </div>
      <div className="grid grid-rows-[1fr,0.4fr] gap-5">
        <div className="flex flex-col gap-4">
          <h1>CONNECT WITH US</h1>
          <div className="flex flex-col gap-2">
            <p>privacy & cookie policy</p>
            <p>Terms of use</p>
          </div>
        </div>
        <p className="place-self-end">copyright mr.yonas @ 2003</p>
      </div>
    </main>
  );
}
