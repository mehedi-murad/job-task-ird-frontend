
const LeftSidebar = () => {
    return (
        <div className="w-24 h-[860px] bg-white rounded-xl">
            <aside>
              <img className="mb-20" src="/logo.png" alt="" />

              <div className="px-7 space-y-10">
                <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                  <img className="" src="/home.png" alt="" />
                </div>
                <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                  <img className="" src="/menu.png" alt="" />
                </div>
                <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                  <img className="" src="/memorize.png" alt="" />
                </div>
                <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                  <img className="" src="/bookmark.png" alt="" />
                </div>
                <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                  <img className="" src="/ruqyah.png" alt="" />
                </div>
                <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                  <img className="" src="/duainfo.png" alt="" />
                </div>
                <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                  <img className="" src="/books.png" alt="" />
                </div>
              </div>

              <div className="bg-[#1FA45B] w-[57px] h-[57px] rounded-xl p-4 ml-5 mt-10">
                <img src="/donate.png" alt="" />
              </div>
            </aside>
        </div>
    );
};

export default LeftSidebar;