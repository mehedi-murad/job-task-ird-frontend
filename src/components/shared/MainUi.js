"use client"
import CategoriesLayout from "@/app/categories/layout";
import LeftSidebar from "./LeftSidebar";
import Settings from "./Settings";

const MainUi = () => {
    return (
        <div className="grid grid-cols-12 gap-7 p-8">
            <div className="col-span-1">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-span-9">
                <div className="flex items-center gap-7 py-8">
                <h2 className="text-[#393939] font-semibold text-2xl w-[429px]">Duas Page</h2>
                <div className="flex justify-end w-[829px]">
                    <input type="search" placeholder="Search by Dua name" className="p-3 border rounded-xl" />
                </div>
                <div className="flex justify-end w-[330px]">
                    <img src="/vector.png" alt="" />
                </div>

                </div>
                <CategoriesLayout></CategoriesLayout>
            </div>
            <div className="col-span-2">
                <Settings></Settings>
            </div>
        </div>
    );
};

export default MainUi;