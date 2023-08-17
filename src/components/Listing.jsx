export default function Listing({ profile }) {
  return (
    <>
      <div className="flex ">
        <div className="">
          <img src={profile.imageUrl}></img>
        </div>
        <br />
        <div className="">
          <span>Name:{profile.name}</span>
        </div>
        <br />
        <div className="">
          <span>Rate:{profile.rate}</span>
        </div>
        <br />
        <div className="">
          <span>Languages:{profile.lang}</span>
        </div>
        <br />
        <div className="">
          <span>Years of Exp:{profile.exp}</span>
        </div>
        <br />
        <div className="">
          <span>Patients treated:{profile.no}</span>
        </div>
        <br />
      </div>
    </>
  );
}
