import Image from "next/image";
const FeaturedContentCard = () => {
  return (
    <div className="relative border border-pink-600">
      <div className="">
        <Image
          src="/images/succesful_student.jpg"
          alt="succesful_student"
          width={500}
          height={500}
          className=""
        />
      </div>
      <div className="absolute top-0 z-10">
        <h2 className="text-3xl">Yo</h2>
        <p className="text-xl">This is getting frustrating</p>
      </div>
    </div>
  );
};

export default FeaturedContentCard;
