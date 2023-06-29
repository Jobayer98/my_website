const Experience = () => {
  return (
    <div className="relative text-left">
      <div className="border-l pl-6 pb-4 border-gray-700">
        <span className="absolute flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full -left-4 dark:bg-[#cf1f1f] font-bold text-white">
          1
        </span>
        <div className="-ml-6">
          <h3 className="timeline font-normal leading-tight py-2 pl-8">
            2019 - now
          </h3>
          <div className="pl-8">
            <h3 className="font-bold leading-tight mt-3 mb-1 text-lg">
              Bachelor in Computer Science and Engineering
            </h3>
            <p className="text-[16px] font-normal text-[#cf1f1f]">
              United International University, Dhaka
            </p>
          </div>
        </div>
      </div>
      <div className="pl-6 pb-4">
        <span className="absolute flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full -left-4 dark:bg-[#cf1f1f] font-bold text-white">
          2
        </span>
        <div className="-ml-6">
          <h3 className="timeline font-normal leading-tight py-2 pl-8">
            2017 - 2018
          </h3>
          <div className="pl-8">
            <h3 className="font-bold leading-tight  mt-3 mb-1 text-lg">
              H.S.C
            </h3>
            <p className="text-[16px] font-normal text-[#cf1f1f]">
              Monipur School and College, Dhaka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
