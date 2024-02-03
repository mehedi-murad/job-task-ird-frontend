import React from 'react';

const Settings = () => {
    return (
        <div className="h-[780px] bg-white rounded-xl">
                <h2 className="text-xl font-bold text-center py-8">Settings</h2>
                <div className="space-y-4 px-5">
                  <div className="flex items-center gap-4 bg-[#F7F8FA] py-2 px-4 rounded-md">
                    <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                      <img src="/language.png" alt="" />
                    </div>
                      <h2 className="font-bold text-[#868686]">Language Settings</h2>
                  </div>
                  <div className="flex items-center gap-4 bg-[#F7F8FA] py-2 px-4 rounded-md">
                    <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                      <img src="/general.png" alt="" />
                    </div>
                      <h2 className="font-bold text-[#868686]">General Settings</h2>
                  </div>
                  <div className="flex items-center gap-4 bg-[#F7F8FA] py-2 px-4 rounded-md">
                    <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                      <img src="/menu.png" alt="" />
                    </div>
                      <h2 className="font-bold text-[#868686]">Font Settings</h2>
                  </div>
                  <div className="flex items-center gap-4 bg-[#F7F8FA] py-2 px-4 rounded-md">
                    <div className="bg-[#E8F0F5] p-2 rounded-full w-[38px] h-[38px]">
                      <img src="/menu.png" alt="" />
                    </div>
                      <h2 className="font-bold text-[#868686]">Appearance Settings</h2>
                  </div>
                </div>
              </div>
    );
};

export default Settings;