import Image from "next/image";
const FeaturedContentCard = () => {
  return (
    <div className="block rounded-lg bg-blank dark:bg-neutral-800 ">
      <Image
        src="/images/succesful_student.jpg"
        alt="succesful_student"
        width={500}
        height={500}
        className="w-full h-auto dark:opacity-80 rounded-lg"
      />
      <div className="absolute z-10 top-0 p-6">
        <h2 className="text-3xl">Yo</h2>
      </div>
    </div>
  );
};

export default FeaturedContentCard;
