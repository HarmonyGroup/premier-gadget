import React from "react";

const Page = () => {
  const mapHtml = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.26178780582!2d3.353261778212765!3d6.614361705054892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b65ba86e15%3A0x3ae060fb3436c3ad!2sIkeja%20City%20Mall!5e0!3m2!1sen!2sng!4v1727526570135!5m2!1sen!2sng" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

  return (
    <div>
      <div
        className="w-full h-96"
        dangerouslySetInnerHTML={{ __html: mapHtml }}
      />

      <div className="grid grid-cols-3 items-center gap-5 md:gap-10 px-4 md:px-10 py-5 md:py-10">
        <div className="col-span-3 md:col-span-1 h-full">
          <div className="bg-white rounded-lg p-5">
            <h1 className="text-xl font-bold">ICM Store</h1>
            <p className="text-gray-500 mt-2.5">
              Unit L94, Ikeja City Mall, 176/194 Obafemi Awolowo Way Alausa,
              Lagos
            </p>
            <p className="text-blue-500 mt-2.5">08173630234</p>
          </div>
        </div>

        <div className="col-span-3 md:col-span-1 h-full">
          <div className="bg-white rounded-lg p-5">
            <h1 className="text-xl font-bold">Computer Village Store</h1>
            <p className="text-gray-500 mt-2.5">
              4, Francis Oremeji street, off Simbiat Abiola way, Ikeja, Lagos
            </p>
            <p className="text-blue-500 mt-2.5">08186700678</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 h-full">
          <div className="bg-white rounded-lg p-5">
            <h1 className="text-xl font-bold">Abuja Store</h1>
            <p className="text-gray-500 mt-2.5">
              Unit 19B Jabi Lake Mall, Plot 1260 Jabi District, Cadastral Zone
              BO4 FCT
            </p>
            <p className="text-blue-500 mt-2.5">08173477775</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
