export default function Listing({ profile }) {
  return (
    <>
      <div className="flex ">
        <div className="">{profile.img}</div>
        <div className="">
          <spam>Name:{profile.name}</spam>
        </div>
        <div className="">
          <spam>Rate:{profile.rate}</spam>
        </div>
        <div className="">
          <spam>Languages:{profile.lang}</spam>
        </div>
        <div className="">
          <spam>Years of Exp:{profile.exp}</spam>
        </div>
        <div className="">
          <spam>Patients treated:{profile.no}</spam>
        </div>
      </div>
    </>
  );
}
