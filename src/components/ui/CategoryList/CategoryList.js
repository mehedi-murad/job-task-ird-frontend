import { useEffect, useState } from "react";



const CategoryList = () => {
    const [data, setData] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/api/data');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);
    
  useEffect(() => {
    const fetchSubcategory = async () => {
      const res = await fetch('http://localhost:3001/api/subCategory');
      const result = await res.json();
      setSubCategory(result);
    };

    fetchSubcategory();
  }, []);

  

  

    return (
        <div className="h-[780px] bg-white rounded-xl overflow-y-scroll">
                <div className="">
                  <h2 className="bg-[#1FA45B] rounded-t-xl px-32 py-7 text-center text-white">Categories</h2>
                  <div className="p-4">
                    <input type="search" placeholder="Search by Categories" className="p-3 border w-full rounded-xl" />
                  </div>
                </div>
                <div className="p-3">
                  <ul>
                    {data.map((item) => (
                      <div className="collapse bg-[#E8F0F5] mb-5">
                        <input type="checkbox" /> 
                          <div className="collapse-title text-xl font-medium flex justify-between items-center gap-7">
                            <div className="flex gap-7 items-center">
                                <div className="bg-[#F7F8FA] w-14 h-14 p-2 rounded-lg">
                                  <img src="/dua.png" alt="" />
                                </div>
                                <div> 
                                    <h2 className="text-[#1FA45B] font-semibold text-md">{item.cat_name_en}</h2>
                                    <p className="text-sm text-[#7E7E7E]">Subcategory:{item.no_of_subcat}</p>
                                </div>
                            </div>
                            <div className="text-sm text-[#7E7E7E]">
                              <p>{item.no_of_dua}</p>
                              <p>duas</p>
                            </div>
                          </div>
                          <div className="collapse-content"> 
                            <p>hello</p>
                          </div>
                      </div>
                    ))}
                  </ul>
                   
                </div>
              </div>
    );
};

export default CategoryList;