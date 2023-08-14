export default function Listing({ profile }) {
  return (
    <>
      <div className="flex ">
        <div className="">
          <spam>Name:{profile.name}</spam>
        </div>
        <div className="">
          <spam>Rate:{profile.rate}</spam>
        </div>
        <div className="">
          <spam>Languages:{}</spam>
        </div>
        <div className="">
          <spam>Years of Exp:{}</spam>
        </div>
        <div className="">
          <spam>Patients treated:{}</spam>
        </div>
        <div className="">
          <spam>Name:{}</spam>
        </div>
      </div>
    </>
  );
}
